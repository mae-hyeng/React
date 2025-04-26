# React

1. MPA (Multi Page Application)
   - 동작 방식이 매우 직관적이기 때문에 많은 서비스가 사용하는 전통적인 방식으로 애초에 서버가 여러 개의 HTML 페이지를 가지고 있다.
   - 장점
     - MPA는 각 페이지마다 개별 HTML을 가지고 있기 때문에 처음 접속할 때 필요한 리소스를 빠르게 렌더링 할 수 있다.
   - 단점
     - 페이지 이동을 빠르게 처리하기 굉장히 힘들다는 단점이 있어, React.js는 이 방식을 따르지 않는다.
     - 모든 사용자들이 페이지를 이동할 때마다 서버에 요청을 하게 되다보니 서버의 부하도 심해진다는 단점이 있다.
     - 페이지 이동시 모든 요소를 교체하고 새롭게 렌더링을 하기 때문에 새로고침이 된다.
     - 페이지 이동이 매끄럽지 않고 비효율적이며, 다수의 사용자 접속시, 서버의 부하가 심해진다는 단점이 있다.
2. SSR (Server Side Rendering)
  - 서버측에서 페이지를 미리 렌더링 해준다.
  - MPA 방식에서 브라우저가 새로운 페이지를 요청했을 때 서버측에서 미리 렌더링 된 HTLM 페이지를 보내주면 브라우저에서 그대로 렌더링 하는 방식
  - 초기 로딩속도는 빠르고, SEO(검색 엔진 최적화)에 유리하다는 장점이 있다.

3. SPA (Single Page Application)
   - MPA 방식과 반대대는 방식으로 페이지 이동이 매끄럽고 효율적이며, 다수의 사용자가 접속해도 크게 상관이 없다.
   - 모든 리액트 컴포넌트들이나 기능들이 작성되어 있는 JavaScript파일을 하나의 파일로 묶어서 브라우저에 전달해줌. (하나로 묶는다고 해서 Bundling 이라고 하며 Bulding된 파일을 Bundle 파일 (Bundle JS File)이라고 한다.)
   - 어떠한 경로로 요청하던 관계없이 무조건 index.html을 반환한다.
   - 공통 컴포넌트는 제외하고 필요한 컴포넌트만 교체하기 때문에 효율적으로 페이지를 업데이트 할 수 있다.
   - SEO가 어렵고, 초기 로딩속도가 느릴 수 있다는 단점이 있다
   - 정리해보자면 사용자가 어떤 경로로 요청하던 상관없이 브라우저는 index.html와 하나로 묶인 Bundle JS File을 받아오게 되고 main.jsx파일이 제일 먼저 실행하게 되고, render() 가 호출되며 App 컴포넌트가 실행되서 화면에 렌더링 되게 된다.
4. CSR (Client Side Rendering)
   - SSR과는 반대되는 개념
   - 브라우저에서 JS 파일을 실행해서 화면에 직접 렌더링하도록 하는 방식.
   - 초기 로딩은 느리지만, 이후 페이지 이동은 매우 빠르다.
  
구분 | MPA (Multi Page App) | SPA (Single Page App) | SSR (Server Side Rendering) | CSR (Client Side Rendering)|
-----|----------------------|-----------------------|-----------------------------|-----------------------------|
기본 구조 | 여러 개의 HTML 페이지 | 하나의 HTML + JS Bundle | 서버에서 HTML 생성 | 클라이언트에서 JS로 렌더링
페이지 이동 | 전체 새로고침 (서버 요청) | JS 라우팅, 새로고침 없음 | 서버가 HTML 반환 | JS가 컴포넌트를 클라이언트에서 렌더링
초기 로딩 속도 | 빠름 (페이지 별 필요 자원만 로드) | 느릴 수 있음 (모든 자원을 초기 로드) | 빠름 | 느림
페이지 전환 속도 | 느림 | 빠름 | 빠름 (서버 응답 속도에 따라 다름) | 매우 빠름
SEO | 매우 좋음 | 어려움 | 좋음 | 어려움
서버 부하 | 높음 (매 요청 시 렌더링) | 낮음 | 높음 | 낮음

# State 관리
1. Context
   - 전역처럼 데이터를 전달하는 시스템
   - 부모 컴포넌트가 트리 아래에 있는 모든 컴포넌트 깊이에 상관없이 props를 통해 전달하지 않고도 사용할 수 있게 해준다.
   - 이를 통해 Prop drilling을 방지할 수 있다.
2. createContext(defaultValue)
   - Context 객체를 생성하는 함수.
   - React 트리 안에서 데이터를 전역처럼 공유할 수 있는 구조를 만드는 것.
   - defaultValue는 Provider가 없을 경우에만 fallback으로 사용된다.
   - 예시
   ```jsx
   // App.jsx
   export const AnyContext = createContext("any");
   // Context 생성 후 Provider 설정 X

   // Button.jsx
   const Button = () => {
      const any = useContext(AnyContext);
      return <div>any ? {any}</div>
   }

   // 의 결과는 Provider가 없으니까 createContext("any")에서 설정한 "any"가 fallback값으로 사용되기 때문에 any ? any 가 출력된다.
   // 반대로 Provider가 있을 경우
   <AnyContext.Provider value="anyany!">
      <Button />
   </AnyContext.Provider>
   // 이 경우에는 "anyany!"가 실제로 사용되므로 기본값인 "any"는 완전히 무시된다.
   ```
   - 사용 예제
   ```jsx
   const AnyContext = createContext(value);
   ```
   - Provider로 컴포넌트를 감싸서 데이터를 전달한다.
   ```jsx
   return (
      <AnyContext.Provider value={value}>
         <div>
            ---
         </div>
      </AnyContext.Provider>
   )
   ```
4. useContext(AnyContext)
    - 컴포넌트에서 Context를 읽고 사용할 수 있는 Hook 이다.
    - Context의 현재 value를 읽고 컴포넌트에서 사용하게 해준다.
    - 매개변수 AnyContext에는 createContext로 생성한 Context를 담아준다.
   ```jsx
   const data = useContext(AnyContext);
   ```
5. 전체적인 흐름
   ```jsx
   // 1. Context 생성
   // 임시데이터 data 생성
   const data = [
     { id: 0, name: '0번', content: '0번째' },
     { id: 1, name: '1번', content: '1번째' },
   ]
   
   export const AnyContext = createContext(null);
   // export const AnyContext = createContext(data); // 보통 null, {} 로 기본값을 설정하고 실제 데이터는 Provider에서 넣어준다
   // null 또는 {} 일 경우 : 추후에 context 자체를 분리된 모듈로 관리하기가 쉽다.
   // data(즉시 사용하는 경우) : 작은 프로젝트나, 샘플 코드에서는 빠르고 간편하지만, 실제 Provider에서 빠뜨려도 에러 없이 동작해서 발견이 어렵다.

   // 2. Provider로 감싸기
   // App.jsx
   const App = () => {
      return (
         <AnyContext.Provider value={data}>
            <Header /> // Header 컴포넌트가 생성됐다고 가정
         </AnyContext.Provider>
      )
   }

   // 3. useContext로 사용
   // Header.jsx
   import { useContext } from "react";
   import { AnyContext } from "./AnyContext";

   const Header = () => {
      const data = useContext(AnyContext);

      return (
         <div>
            {data.map((item) => (
              <div key={item.id}>
                {item.id} / {item.name} / {item.content}
              </div>
            ))}
         </div>
      )
   }
   ```  **********************************************************************************************************************

# React Router
- npmjs.com 에 등록되어 있는 라이브러리이며, 대다수의 리액트 앱이 이 라이브러리를 사용중이다.

1. BrowserRouter
   - 브라우저의 현재 주소를 저장하고 감지하는 역할을 한다.
   SPA(Single Page Application)의 경우 페이지 렌더링에 필요한 모든 JS가 초기에 브라우저에게 전달되기 때문에 페이지 이동간 서버에 재요청을 할 필요가 없다. 이미 로드된 코드들을 활용해서 페이지간 이동을 구현하면 된다.
   리액트로 SPA를 구현한다는 것은 해당 요청에 맞는 컴포넌트만 라우팅해서 부분적으로 렌더링을 한다.
   
2. 페이지 라우팅 (Page Routing)
   - 경로에 따라 알맞은 페이지를 렌더링 하는 과정
   - SPA에서는 클라이언트 라우팅, MPA에서는 서버 라우팅이 주로 사용된다.
     - ① Routes, Route
       - <Routes> 컴포넌트 안에 <Route>로 경로를 설정한다
       ```jsx
       import Home from "./Home.jsx"; // Home 컴포넌트가 있다고 가정
       ...
       return (
         <>
           <BrowserRouter>
             <div>HI</div> // 이런식으로 Routes 컴포넌트 밖에 있는 요소는 어디 페이지에서든 모두 렌더링이 된다.
             <Routes>
               // <div></div> 이렇게 Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능하다.
               <Route path="/" element={<Home />} />
               <Route path="*" /> // '*'은 default 개념
             </Route>
           </BrowserRouter>
         </>
       )
       ```
       - 이런 형식
  
      - ② Link
         ```jsx
         <Link to={"/"}>Home</Link> // HTML a 태그와 같은 기능을 한다
         ```
         CSR 방식으로 페이지를 이동시키기 때문에 페이지 간 이동시 필요한 컴포넌트만 교체한다.
  
      - ③ useNavigate
         - 페이지를 실제로 이동시키는 navigate함수를 반환해줌
         ```jsx
         const nav = useNavigte();
         <button onClick={() => nav(-1)} />
         ... 
         const onClickButton = () => { nav("/new"); }
         <button onClcik={onClickButton} /> 
         // 이런식으로 사용
         ```
  
       - ④ 동적 경로(Dynamic Segments)
         - 동적인 데이터를 포함하고 있는 경로
         - **URL Parameter**
           - / 뒤에 아이템 id를 명시
           - 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용
             ```
             ex) ~/product/1
             ```
                ```jsx
               return (
                 <>
                   <BrowserRouter>
                     <Routes>
                       <Route path="/new/:id" element={<New />} /> // :id 이런식으로 사용
                     </Route>
                   </BrowserRouter>
                 </>
               )
               ```
         - **useParams**
            - URL Parameter의 값을 가져오는 기능
                 ```jsx
                 import { useParams } from "react-router-dom";
                 ...
                 const params = useParams();
                 console.log(params); // 콘솔창에 파라미터로 넘어온 값 확인 가능
                 // /new/100에 접속시 { id : '100' } 이 넘어온다
                 ```
         -  **Query String**
             - ? 뒤에 변수명과 값 명시
             - 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용
               ```
               ex) ~/product?q=검색어
               ```
               
               ```jsx
               return (
                 <>
                   <BrowserRouter>
                     <Routes>
                       <Route path="/new/?id" element={<New />} /> //  이런식으로 사용
                     </Route>
                   </BrowserRouter>
                 </>
               )
               ```
             
          - **useSearchParams**
            - Query String의 값을 가져오는 기능
               ```jsx
               import { useSearchParams } from "react-router-dom";
               ...
               const params = useSearchParams();
               console.log(params.get("value"));
               // /?value=hello 값을 전달시 hello 출력
               ```
# useEffect
- useEffect 란? 외부 시스템과 컴포넌트를 동기화하는 React Hook.
1. useEffect(setup, dependencies?)
```jsx
useEffect(() => {}, [])
```
   - 1. 컴포넌트가 DOM에 추가된 이후 setup함수 실행.
   - 2. dependencies 중 하나가 변경시 이전 정리 함수 먼저 실행.
   - 3. 컴포넌트가 DOM에서 제거된 경우에도 정리 함수 실행.
   ```jsx
   // 예제
   function useEf ({ count }) {
      useEffect(() => {
         console.log("setup 함수 시작 count = ", count);

         return () => {
            console.log("정리 함수 시작 count = ", count);
         };
      }, [count]);

      return <div>{count}</div>
   }
   // 1. useEF를 처음 렌더링
   // 2. 렌더링 완료 후 setup 함수 실행. return한 정리 함수는 저장만 하고 아직 실행 안함.
   //    ("setup 함수 시작 count = 0" 출력)
   // 3. dependencies 변경시 (현재 예제에서 count) 가 0에서 1로 바뀌면서 useEF가 리렌더링 됨.
   // 4. 먼저 이전에 저장해뒀던 정리 함수 호출.
   //    ("정리 함수 시작 count = 0" 출력)
   //    (이때 count값은 이전 값 기준으로 정리하기 때문에 count는 0임)
   // 5. 그 다음 새 setup 함수 실행.
   //    ("setup 함수 시작 count = 1" 출력)
   //    (이후 count=1 기준으로 새로운 effect 적용)
   // 6. useEF가 더 이상 필요 없어질 때(언마운트), 마지막으로 저장된 정리 함수를 실행.
   //    ("정리 함수 시작 count = 1" 출력)
   ```
  
# Diary 프로젝트
1. 순서 (보통 페이지 라우팅 -> 글로벌 레이아웃 설정 -> 공통 컴포넌트 구현 -> 개별 페이지 구현 및 복잡한 기능 구현)
   - 이동할 pages 부터 생성 (Home.jsx(일기 리스트 렌더링), Diary.jsx(일기 상세 조회), New.jsx(새로운 일기 작성), Edit.jsx(일기 수정 페이지), Notfound.jsx('*'로 들어올 시 렌더링될 페이지)
   - 이미지 파일 불러오기 (src/assets 위치에 추가 [모듈 시스템과, 빌드 최적화 때문])
     - 이미지 파일 불러올 때마다 import 하면 복잡성을 해결하기 위해 (src/util 아래에 get-emotion-image.js 파일 생성 후 파일 안에서 import 시켜줌)
     - emotionId를 매개변수로 갖는 getEmotionImage 함수를 만들고 기능 구현 후 해당 함수를 export 시켜서 내보낸 후 다른 파일에서 import { getEmotionImage } .... 로 불러와서 함수 사용
   - UI 구현
   - 공통 컴포넌트 구현 (Button.jsx, Header.jsx)
     - Button 컴포넌트에는 어떤 props를 받아야 될지 고민해봐야됨. 하나의 버튼 컴포넌트로 여러개의 버튼 모양이나 기능, 텍스트를 바꿀 수 있게.
     - Header 컴포넌트에서도 어떤 props를 받아야 될지 고민해보기.
