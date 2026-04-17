# 🐾 Life with My Cats (랙돌 고양이 건강 관리 앱)

'Life with My Cats'는 랙돌 고양이 집사님들을 위한 전용 건강 관리 웹 애플리케이션입니다. 고양이의 일상적인 건강 기록을 쉽고 예쁘게 관리할 수 있도록 설계되었습니다.

## ✨ 주요 기능

- **실시간 대시보드**: 고양이별 '오늘의 기록'과 '누적 기록' 수를 한눈에 확인 가능
- **6가지 건강 지표 관리**: 몸무게, 사료/간식, 음수량, 배변, 구토, 기분 등 핵심 데이터 기록
- **모바일 최적화 디자인**: '주아' 폰트와 파스텔톤 컬러를 사용한 카드 중심의 UI/UX
- **스마트 데이터 연동**: Supabase KV Store를 활용한 안정적인 데이터 저장 및 조회

## 🛠 기술 스택

- **Frontend**: React (v19), React Router (v7)
- **Styling**: Tailwind CSS (v4)
- **Icons**: Lucide React
- **Backend**: Supabase (Auth, Storage, Edge Functions, KV Store)
- **Font**: Google Fonts (Jua)

## 📂 프로젝트 구조

```text
src/
├── app/
│   ├── components/      # 재사용 가능한 UI 컴포넌트 (CatCard, RecordBadge 등)
│   ├── pages/           # 페이지 단위 컴포넌트 (Home, AddRecord 등)
│   ├── App.tsx          # 앱 메인 진입점
│   ├── routes.tsx       # 라우팅 설정
│   └── storage.ts       # 데이터 통신 및 로직 유틸리티
├── styles/
│   ├── fonts.css        # 폰트 설정
│   └── theme.css        # 전반적인 스타일 및 테마
└── imports/             # 이미지 및 에셋
