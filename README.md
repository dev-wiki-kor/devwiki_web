### 프로젝트 세팅

- 노드 버전 관리
  - Volta
  - https://volta.sh/ 설치
  - volta install pnpm 설치 가능
  - 설치 후 volta list로 버전확인
    - 로컬 node -v 버전확인 필요
- husky
  - pnpm install로 초기 husky 설치

### 폴더 구조 아키텍처

feature-sliced-design 적용

- 기능별로 폴더를 나누어서 관리
  - 각 기능 쿼리,훅,타입,테스트,스타일 등을 포함
- 모델 계층 정의
  - 모델 계층은 도메인별로 나누어서 관리
- 재사용 가능한 기능은 shared 폴더에 정의
  - 재상요이 가능한 UI kit 생성
  - 커스텀 훅,커스텀 컴포넌트,커스텀 테스트 유틸리티 등
- 참고 https://emewjin.github.io/feature-sliced-design/

### 사용 기술 스택

- next 14 app router
  - 적극적인 캐시 레이어 사용
  - 서버,클라이언트 컴포넌트의 적절한 사용
  - 프로젝트 특성상 정적,동적 라우팅 동시 사용
  - 간단한 mutation 작업의 경우 server action 사용
- react 18.canary
  - 현재 정식 버전이 아닌 실험적인 기능을 사용하기 위해
  - https://react.dev/reference/react-dom/hooks 레퍼런스참조
  - ex) useFormState.useFormStatus,use 등등
- typescript ^5.2
- style-x 사용 예정
  - 컴파일 에러시 scss 모듈 사용?
  - ??
- react-query 5.0 버전
- 클라이언트 상태 관리 라이브러리 : recoil | zustand
- TDD? 적용 고민
- Sonar Lint 적용 고민
  - 클린 코드
  - 코드 품질
  - https://jiwondev.tistory.com/160

### 코드 관리

- git flow 사용
- 커밋 메시지 규칙
  - https://doublesprogramming.tistory.com/256
- pr? mr ? 사용
