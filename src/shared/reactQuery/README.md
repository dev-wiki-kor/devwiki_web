- 공식문서 [참고](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#server-components--nextjs-app-router)

- 페이지 루트 컴포넌트에서 전체 쿼리를 프리패칭 할 수 있지만 서버컴포넌트의 스트리밍 과정을 생각해보면 prmise await로 인해 워터풀 현상이 발생한다.

  - 이는 서버 스트리밍의 장점을 죽이는 방식으로 지양되는 방식이다.

- 각 서버컴포넌트에서 프리패칭 후 dehydrate 방식이 추천되는 방식이다.

  - 단점은 전체 서버 컴포넌트에서 QueryClient의 프리패칭 데이터를 사용할 수 없다.

  - 이에 대한 보안으로 단일 QueryClient를 생성 후 각각의 서버 컴포넌트에서 프리패칭 하는 것이다.

  - ```tsx
    const getQueryClient = cache(() => new QueryClient())
    ```

  - 하지만 위 방식에서는 각각의 서버컴포넌트에서 이미 dehydrate 되어 있는 데이타가 있을시 중복으로 *전체를*`dehydrate(getQueryClient())`를 수행하여 불필요한 오버헤드가 발생한다.




