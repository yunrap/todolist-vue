# 프로젝트 아키텍처 설계서

## 1. 개요

본 문서는 Vue 3 + Tailwind CSS 기반의 투두리스트 프로젝트의 전체 아키텍처와 주요 구성 요소를 설명합니다.  
본 프로젝트는 별도의 백엔드 API 없이, 클라이언트 내 상태 관리만으로 기능을 구현합니다.

## 2. 전체 시스템 구조

```
Client (Vue 3 + Tailwind)
├─ Components
│ ├─ TodoList.vue
│ ├─ TodoItem.vue
│ └─ AddTodoForm.vue
├─ Composables (재사용 로직)
│ └─ useTodos.js
├─ Assets (스타일, 이미지)
├─ Router (필요 시)
└─ Store (Pinia 또는 Vuex - 상태 관리)
```

## 3. 주요 컴포넌트 설명

| 컴포넌트명        | 역할                                           |
| ----------------- | ---------------------------------------------- |
| `TodoList.vue`    | 투두 아이템 리스트를 렌더링, 상태 구독 및 전달 |
| `TodoItem.vue`    | 개별 투두 항목 렌더링 및 수정/삭제 이벤트 처리 |
| `AddTodoForm.vue` | 새로운 투두 항목 입력 및 제출 기능 제공        |

## 4. 상태 관리

- 상태 관리 라이브러리로는 **Pinia** 사용 예정
- 전역 상태: 투두 리스트 배열, 필터 상태(전체, 완료, 미완료)
- 상태 변경은 Pinia 액션을 통해 일관성 있게 처리
- 상태는 로컬스토리지(LocalStorage)에 저장하여 새로고침 시에도 데이터 유지
- 컴포넌트는 Pinia 상태를 구독하여 UI 업데이트

## 5. 데이터 흐름

- 사용자 액션 (추가, 완료, 삭제) → 컴포넌트 이벤트 발생 → Pinia 액션 호출 → 상태 변경 → 상태가 로컬스토리지에 저장 → UI 반영

## 6. 폴더 구조

```
src/
├── assets/ # 이미지, 글로벌 스타일(css)
├── components/ # Vue 컴포넌트
├── composables/ # 재사용 가능한 함수 로직
├── router/ # Vue-router 설정 (필요 시)
├── store/ # Pinia 상태 관리
├── views/ # 페이지 단위 컴포넌트 (필요 시)
├── App.vue
└── main.js
```

---

## 7. 빌드 및 배포

- 개발 환경: Vite + Vue 3
- 빌드 결과물은 `dist/` 폴더에 생성
- Tailwind CSS purge 기능을 활용해 사용하지 않는 클래스 제거하여 용량 최소화

---

## 8. 추가 고려 사항

- 반응형 UI 적용 (Tailwind의 반응형 유틸리티 활용)
- 접근성(ARIA) 고려한 컴포넌트 설계
- 단위 테스트 계획 (Jest/Vitest)

---

## 9. 참고 자료

- Vue 공식 문서: https://vuejs.org
- Pinia 공식 문서: https://pinia.vuejs.org
- Tailwind CSS 공식 문서: https://tailwindcss.com

---
