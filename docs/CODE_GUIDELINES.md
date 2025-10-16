# Vue 투두리스트 프로젝트 - 코드 규칙 & 초기 가이드라인

---

## 1. 프로젝트 구조 및 파일 네이밍

- `src/` 아래에 컴포넌트, 스타일, 유틸 등 폴더 분리
- 컴포넌트 파일명은 **PascalCase.vue** 사용 (`TodoItem.vue`)
- JS/TS 파일은 camelCase 사용 (`todoService.js`)
- 공용 스타일은 `src/assets/styles/`에 관리

## 2. 코드 스타일

- **ESLint + Prettier** 연동해서 코드 자동 정렬 및 린팅 적용
- 인덴트는 **스페이스 2칸**
- 최대 줄 길이 80~100자 권장
- 세미콜론은 반드시 사용
- 문자열은 싱글 쿼테이션(') 사용
- Vue 템플릿 내 속성은 한 줄에 하나씩 작성
- 컴포넌트 내 메서드, 변수는 camelCase로 작성

## 3. Vue 컴포넌트 작성 규칙

- **Composition API** 사용 (setup() 함수 내 로직 집중)
- `props`, `emits` 명확하게 정의
- `data`는 `ref` 또는 `reactive`로 관리
- 이벤트 핸들러는 `handle` 접두어 사용 (`handleClick`)
- UI 관련 함수와 비즈니스 로직 분리 (가능하면 composables로 분리)
- 스타일은 scoped 사용 권장

## 4. 네이밍 컨벤션

| 타입        | 규칙 예시                   | 설명                 |
| ----------- | --------------------------- | -------------------- |
| 컴포넌트    | `TodoItem.vue`              | PascalCase           |
| 변수 & 함수 | `todoList`, `addTodo`       | camelCase            |
| 이벤트      | `onAddTodo`, `handleDelete` | camelCase, 동사 포함 |
| 상수        | `MAX_TODO_COUNT`            | UPPER_SNAKE_CASE     |

## 5. 커밋 메시지 규칙 (Git)

- **형식**: `<타입>: <설명>`
- 타입 예시:
  - `feat`: 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `style`: 스타일 변경 (코드 변경 없는 포맷팅)
  - `refactor`: 코드 리팩토링
  - `test`: 테스트 추가 및 수정
- 예시:
  - `feat: 할 일 추가 기능 구현`
  - `fix: 완료 토글 버그 수정`

## 6. 코드 주석 및 문서화

- 복잡한 함수나 로직은 **JSDoc 스타일 주석** 권장
- 컴포넌트 최상단에 역할 간략히 주석 작성
- 공개 API 함수는 파라미터와 반환값 명시

## 7. 기타 권장 사항

- 반복되는 로직은 `composables/` 폴더에 분리하여 재사용성 극대화
- Magic number, 문자열 상수는 별도 파일(`constants.js`)에 관리
- 이벤트 버블링 주의, 명확한 이벤트 흐름 설계
- 에러 처리 및 예외 케이스에 대한 방어 코드 작성

## 8. 예시 (간단한 컴포넌트 틀)

```vue
<script setup lang="ts">
import { ref } from 'vue';

const todos = ref<{ id: number; text: string; completed: boolean }[]>([]);

function handleAddTodo(text: string) {
  // todo 추가 로직
}
</script>

<template>
  <div>
    <!-- 투두 리스트 렌더링 -->
  </div>
</template>

<style scoped>
/* 스타일 작성 */
</style>
```
