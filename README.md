## Todo List

할 일 목록을 관리하는 To Do 서비스입니다.

- **작업 기간**: 2025.02.07 ~ 02.11
- **배포 링크**: https://codeit-doit.vercel.app/

## 주요 기능

### 1. 할 일 목록 페이지

| **할 일 목록 조회, 추가, 완료 상태 변경**                                                 |
| ----------------------------------------------------------------------------------------- |
| ![Image](https://github.com/user-attachments/assets/4b0046f5-5d55-4aa8-a3e6-196d2ed2761e) |

- **목록 조회**

  - 로고 버튼을 클릭 시 `/` 페이지로 이동(새로고침)
  - 진행 중인 할 일과 완료된 할 일 구분

- **할 일 추가**

  - 입력창에서 할 일을 입력 후 `추가하기` 버튼 클릭 또는 엔터 입력 시 새로운 할 일 생성

- **할 일 완료 처리**
  - 진행 중인 할 일의 체크박스를 클릭하면 완료 상태로 변경
  - 완료된 할 일의 체크박스를 클릭하면 다시 진행 중 상태로 변경

### 2. 할 일 상세 페이지

| **할 일 수정**                                                                                                  |
| --------------------------------------------------------------------------------------------------------------- |
| <p align="center">![Image](https://github.com/user-attachments/assets/2e41b6b5-6468-42b4-8084-a7e3035ce183)</p> |

| **할 일 삭제**                                                                                                  |
| --------------------------------------------------------------------------------------------------------------- |
| <p align="center">![Image](https://github.com/user-attachments/assets/f20b306d-2efb-4cbc-af58-557d3a9f13a8)</p> |

- **할 일 수정**

  - 할 일 이름 및 진행 상태 수정
  - 메모 추가 및 이미지 첨부(파일명은 영어, 5MB 이하)
  - `수정 완료` 버튼 클릭 시 수정 사항 반영 후 할 일 목록 페이지로 이동

- **할 일 삭제**
  - `삭제하기` 버튼 클릭 시 할 일 삭제 후 할 일 목록 페이지로 이동

## 기술 스택

<img width="569" alt="tech stack" src="https://github.com/user-attachments/assets/be0250c6-0e96-4949-a474-324057b574fc">

### 선정 이유

- **`Tailwind CSS`**: 직관적인 클래스 기반 스타일링으로 빠른 개발과 유지보수가 용이하여 선정하였습니다.

- **`Zustand`**: 가벼운 상태 관리 라이브러리로 불필요한 리렌더링 없이 직관적인 전역 상태 관리를 제공하며, props drilling 없이 효율적으로 상태를 공유할 수 있어 선정하였습니다.

- **`Vercel`**: Next.js와 최적화된 배포 환경을 제공하며, 간편한 CI/CD 및 글로벌 배포가 가능하여 선정하였습니다.

## 폴더 구조

```
📂 src
├── apis
├── app
├── components
│   ├── common
│   │   ├── Button.tsx
│   │   ├── CheckBox.tsx
│   │   └── Input.tsx
│   ├── layout
│   │   └── GNB.tsx
│   └── todo
│       ├── add
│       │   ├── AddForm.tsx
│       │   └── AddInput.tsx
│       ├── edit
│       │   ├── EditActions.tsx
│       │   ├── EditForm.tsx
│       │   ├── EditInput.tsx
│       │   ├── ImageInput.tsx
│       │   └── MemoInput.tsx
│       └── list
│           ├── EmptyList.tsx
│           ├── TodoItem.tsx
│           ├── TodoList.tsx
│           └── TodoListContainer.tsx
├── store
│   └── useTodoStore.ts
├── styles
│   ├── button.css
│   ├── globals.css
│   └── todo.css
└── types
    └── todo.ts
```
