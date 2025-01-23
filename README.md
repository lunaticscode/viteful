# Viteful

Viteful은 **Vite** 기반의 React Boilerplate에 **Server Side Rendering (SSR)** 기능을 추가하여, 기본적으로 Client Side Rendering(CSR)만 지원하는 Vite 프로젝트의 SEO(Search Engine Optimization) 문제를 해결하고자 개발된 프로젝트입니다.

---

## 주요 기능

- **빠른 빌드 및 개발 환경**: Vite의 기본 기능을 그대로 활용.
- **SEO 개선**: SSR을 통해 초기 HTML을 렌더링하여 검색 엔진 최적화.
- **React 기반 SPA**: React Router DOM과 함께 동작하며, CSR과 SSR을 모두 지원.

---

## 요구사항

- **Node.js**: 최소 18.19.0 버전 권장
- **패키지 매니저**: [pnpm](https://pnpm.io) 사용 권장

---

## 설치 및 실행 방법

### 1. 레포지터리 클론

```bash
git clone <repository-url>
cd viteful
```

### 2. 의존성 설치

```bash
pnpm install
```

### 3. 개발 모드 실행

```bash
pnpm run dev
```

### 4. 빌드 및 실행

#### 클라인트 & 서버 빌드

```bash
pnpm run build
```

#### 클라이언트 빌드

```bash
pnpm run build:client
```

#### 서버 빌드

```bash
pnpm run build:server
```

#### 프로덕션 모드 실행

```bash
pnpm run preview
```

---

## 프로젝트 구조

```plaintext
viteful/
├── src/
│   ├── pages/             # 사용자 URL에 매핑되는 페이지 컴포넌트
│   ├── components/        # 공통 컴포넌트
│   ├── hooks/             # 공통 커스텀 Hook 파일
│   ├── entry-client.tsx   # CSR 진입 파일
│   └── entry-server.tsx   # SSR 진입 파일
├── dist/                  # 빌드 결과물
├── server.js              # Express 서버 설정
├── package.json           # 프로젝트 설정 및 스크립트
└── vite.config.ts         # Vite 설정 파일
```

---

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.
