# rocket AI 🚀 과제전형

**배포 링크:** [https://rocket-ai-b5ij.vercel.app/](https://rocket-ai-b5ij.vercel.app/)

## ⚠️ 스크롤 애니매이션이 적용되어 있으니 반드시 스크롤하여 페이지를 확인해주세요!

## 🛠️ 사용한 기술스택 및 이유

- **Next.js (React 기반)**: 빠른 개발, SSR/CSR 지원, 파일 기반 라우팅, SEO, 타입 안정성(typescript)
- **TypeScript**: 타입 안정성, 유지보수성, 대규모 프로젝트에 적합
- **Tailwind CSS**: 빠른 UI 스타일링, 유틸리티 우선 접근 방식, 커스텀 디자인 용이
- **Zustand**: 전역 상태 관리, 간단한 API, React와의 높은 호환성
- **Atomic Design Pattern**: 컴포넌트 재사용성, 유지보수성, UI 일관성 강화

## 📁 폴더구조

```
rocket/
├── src/
│   ├── app/                # Next.js 엔트리(페이지, 글로벌 스타일)
│   ├── components/
│   │   ├── atoms/          # 최소 UI 단위(버튼, 이미지 등)
│   │   ├── molcules/       # 여러 atom 조합(테이블 row, 슬라이드 등)
│   │   ├── organisms/      # 섹션 단위(인트로, 사주 결과 등)
│   │   └── ...
│   ├── data/               # 데이터 및 타입 정의
│   ├── utils/              # 유틸리티 함수, 전역 상태(zustand 등)
│   └── app/globals.css     # 글로벌 스타일(Tailwind 포함)
├── public/                 # 정적 파일, 이미지, 폰트 등
├── package.json            # 의존성 및 스크립트
└── README.md               # 프로젝트 소개 및 가이드
```

---

### 특징

- Atomic Design 패턴 기반으로 컴포넌트 구조화
- 스크롤 Animation 구현을 위해 IntersectionObserver 및 전역관리 zustand 사용
- SajuTable, MotionWrapper 등 재사용성 높은 organism 구조
- Tailwind로 빠르고 일관된 UI/UX 구현

### 개선사항

- global.css를 세분화 하여 작은단위로 관리 -> 디자이너 논의 필요 [타이포 그래피, 폰트에 대한 상세 정의 필]
- Table 백엔드 실제 데이터에 맞게 렌더링 -> As-Is: 임의 mock 데이터 사용 To-Be: 실제 데이터 구조로 렌더링
