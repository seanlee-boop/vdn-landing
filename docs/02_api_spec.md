# API 명세서 (API Specification)

이 문서는 VDN 서비스의 프론트엔드와 백엔드 간의 통신을 위한 RESTful API 인터페이스를 정의합니다.

## 1. 기본 정보
- **Base URL**: `https://api.vdn-korea.com/v1` (상용), `http://localhost:8000/v1` (로컬)
- **Content-Type**: `application/json`
- **인증**: 초기 단계에서는 대기자 명단 및 데모 API 위주로 공개 운영 (추후 JWT/Firebase Auth 연동)

## 2. API 목록

### 2.1. 대기자 명단 등록 (Waitlist)
얼리액세스 신청을 처리합니다.

- **URL**: `/waitlist`
- **Method**: `POST`
- **Request Body**:
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "nationality": "France"
}
```
- **Response (201 Created)**:
```json
{
  "status": "success",
  "message": "Successfully registered for early access.",
  "data": {
    "id": 123,
    "email": "user@example.com"
  }
}
```
- **Response (409 Conflict)**:
```json
{
  "error": {
    "code": "DUPLICATE_EMAIL",
    "message": "This email is already registered."
  }
}
```

### 2.2. 인터랙티브 데모 분석 (Demo Analysis)
랜딩 페이지의 데모 섹션에서 가상의 AI 분석 결과를 제공합니다.

- **URL**: `/demo/analyze`
- **Method**: `POST`
- **Request Body**:
```json
{
  "purpose": "Study",
  "region": "Seoul",
  "concern": "Safety"
}
```
- **Response (200 OK)**:
```json
{
  "status": "success",
  "data": {
    "recommended_area": "Mapo-gu (Sinchon/Hongdae)",
    "safety_score": 95,
    "insight": "Mapo-gu is highly recommended for students with high safety and global accessibility.",
    "mock_listings": [
      { "id": 1, "title": "Safe Studio near Hongik Univ", "price": "700,000 KRW" }
    ]
  }
}
```

### 2.3. 매물 검색 (Listings)
조건에 맞는 매물을 검색합니다 (MVP 단계).

- **URL**: `/listings/search`
- **Method**: `GET`
- **Query Parameters**:
  - `region`: (string) 검색 지역
  - `max_price`: (number) 최대 월세
  - `type`: (string) 매물 형태
- **Response (200 OK)**:
```json
{
  "count": 1,
  "items": [
    {
      "id": 1,
      "title": "Modern Studio in Gangnam",
      "price_monthly": 1200000,
      "deposit": 10000000,
      "foreign_friendly": true
    }
  ]
}
```

## 3. 공통 에러 응답
모든 에러 응답은 다음 형식을 따릅니다.
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The email address is already registered.",
    "details": null
  }
}
```

## 4. HTTP 상태 코드
- `200`: 요청 성공
- `201`: 리소스 생성 성공
- `400`: 잘못된 요청 (파라미터 누락 등)
- `401`: 인증 실패
- `404`: 리소스를 찾을 수 없음
- `500`: 서버 내부 오류
