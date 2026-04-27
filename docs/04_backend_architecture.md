# 백엔드 아키텍처 설계서 (Backend Architecture)

이 문서는 VDN 프로젝트의 서버 측 구조, 데이터 흐름, 인프라 구성 및 AI 서비스 연동 방안을 정의합니다.

## 1. 아키텍처 개요
- **Runtime**: Python 3.12
- **Framework**: **AWS Chalice** (Serverless microframework)
- **Database**: **AWS RDS (PostgreSQL)**
- **ORM**: **SQLModel**
- **Infras**: AWS Lambda + Amazon API Gateway

## 2. 레이어 아키텍처 (Layered Architecture)
Chalice 애플리케이션 내에서 다음과 같이 책임을 분리합니다.

```
backend/
├── app.py             # API 라우팅 및 Chalice 앱 설정
├── chalicelib/        # 핵심 비즈니스 로직 및 모듈
│   ├── api/           # API 핸들러 (Business logic orchestration)
│   ├── models/        # SQLModel 기반 데이터 스키마
│   ├── services/      # 외부 연동 (AI, Email, AWS SDK 등)
│   ├── db.py          # RDS 연결 및 세션 관리 (SQLModel Engine)
│   └── config.py      # 환경 변수 및 설정
├── .chalice/          # Chalice 배포 설정 (IAM roles, VPC 등)
└── requirements.txt
```

## 3. 핵심 기술 상세

### 3.1. AWS Chalice & API Gateway
- **Serverless**: Lambda 기반으로 트래픽에 따라 자동 확장 및 비용 최적화.
- **Routing**: `app.py`에서 데코레이터를 사용하여 엔드포인트를 정의하고, 요청 검증은 Pydantic(SQLModel)을 활용.

### 3.2. SQLModel & RDS 통합
- **Connection Management**: Lambda의 특성상 커넥션 풀링(Connection Pooling) 관리가 중요함. `db.py`에서 전역 `engine`을 생성하고 각 요청마다 `Session`을 제공.
- **RDS Proxy (선택 사항)**: Lambda 동시 실행 수가 많아질 경우 RDS Proxy를 도입하여 커넥션 포화 방지.

### 3.3. AI 서비스 연동 (AI Integration)
- **Service Layer**: `services/ai_service.py`를 통해 LLM (AWS Bedrock 또는 OpenAI)과 통신.
- **Prompt Engineering**: 매물 분석 및 계약서 위험도 추출을 위한 전용 프롬프트 템플릿 관리.
- **Asynchronous Analysis**: 시간이 오래 걸리는 계약서 분석 등은 다음과 같은 구조로 처리:
  1. API 요청 시 SQS에 작업 메시지 투입 후 `job_id` 즉시 반환.
  2. 별도의 Worker Lambda가 SQS를 트리거하여 AI 분석 수행.
  3. 완료 시 DB의 `AnalysisHistory` 상태 업데이트.
  4. 프론트엔드에서 `job_id`로 폴링(Polling)하거나 웹소켓/알림을 통해 결과 수신.

## 4. 인프라 및 보안 (Security & DevOps)
- **VPC Configuration**: RDS는 Private Subnet에 위치시키고, Lambda는 VPC Lambda 설정을 통해 통신.
- **Secrets Management**: DB 비밀번호 및 API 키는 **AWS Secrets Manager**에 저장하고 `config.py`에서 로드.
- **CORS**: 랜딩 페이지 도메인에 대해서만 허용하도록 `CORSConfig` 설정.

## 5. 배포 파이프라인
- `chalice deploy` 명령어를 통한 인프라 생성 및 배포.
- GitHub Actions를 연동하여 main 브랜치 푸시 시 자동 배포 구성 가능.
