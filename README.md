
### **1. Node.js 및 npm 설치**

Create React App을 사용하려면 먼저 Node.js와 npm(Node Package Manager)이 설치되어 있어야 합니다. Node.js 설치 시 npm도 함께 설치됩니다.

- **Node.js 설치**: [Node.js 공식 웹사이트](https://nodejs.org/)에서 운영체제에 맞는 설치 파일을 다운로드하여 설치합니다.
- 설치 완료 후, 터미널(또는 명령 프롬프트)에서 다음 명령어를 사용하여 Node.js와 npm이 올바르게 설치되었는지 확인합니다:

  ```bash
  node -v
  npm -v
  ```

### **2. Create React App을 사용하여 TypeScript 프로젝트 생성**

Create React App은 `npx` 명령을 통해 프로젝트 생성 시 TypeScript를 쉽게 설정할 수 있습니다. `npx`는 npm 5.2.0 이상에서 사용할 수 있는 명령어로, 명령을 실행할 때 필요한 패키지를 다운로드하고, 실행 후 자동으로 제거합니다.

1. **터미널을 열고 프로젝트 생성 명령어 실행**:

   프로젝트를 생성하려는 디렉토리로 이동한 다음, 아래 명령어를 실행합니다:

   ```bash
   npx create-react-app my-app --template typescript
   ```

   - `my-app`은 생성할 프로젝트의 이름입니다. 원하는 이름으로 변경할 수 있습니다.
   - `--template typescript`는 TypeScript를 템플릿으로 사용하여 프로젝트를 생성하겠다는 의미입니다.

   명령어 실행 후, 필요한 패키지가 다운로드되고 TypeScript 설정이 자동으로 완료됩니다. 이 과정에는 약간의 시간이 걸릴 수 있습니다.

2. **프로젝트 디렉토리로 이동**:

   프로젝트 생성이 완료되면, 프로젝트 디렉토리로 이동합니다:

   ```bash
   cd my-app
   ```

3. **프로젝트 실행**:

   프로젝트 디렉토리로 이동한 후, 아래 명령어를 실행하여 개발 서버를 시작합니다:

   ```bash
   npm start
   ```

   - 이 명령어는 개발 서버를 실행하고, 브라우저에서 자동으로 `http://localhost:3000`을 열어 React 애플리케이션을 확인할 수 있습니다.
   - Create React App은 기본적으로 핫 리로딩(Hot Reloading)을 지원하므로, 코드를 수정할 때마다 브라우저가 자동으로 갱신됩니다.

### **3. 생성된 프로젝트 구조 및 TypeScript 파일 확인**

TypeScript 템플릿으로 생성된 React 프로젝트에서는 `.ts` 및 `.tsx` 확장자를 가진 파일들이 기본적으로 포함되어 있습니다.

1. **주요 파일들**:
   - `src/index.tsx`: 애플리케이션의 진입점 파일입니다. ReactDOM이 루트 컴포넌트인 `<App />`를 렌더링합니다.
   - `src/App.tsx`: 기본 컴포넌트 파일입니다. TypeScript를 사용하여 작성된 React 컴포넌트의 예시입니다.
   - `src/react-app-env.d.ts`: TypeScript 환경을 위한 선언 파일입니다.
   - `tsconfig.json`: TypeScript 컴파일러의 설정 파일입니다. 여기서 프로젝트의 TypeScript 설정을 커스터마이징할 수 있습니다.

2. **타입스크립트 파일 작성**:

   TypeScript를 사용하여 React 컴포넌트를 작성할 때, 컴포넌트 파일의 확장자는 `.tsx`를 사용합니다. 예를 들어, 새로운 컴포넌트를 추가하려면 `MyComponent.tsx`와 같은 파일을 생성할 수 있습니다.

   ```tsx
   import React from 'react';

   type MyComponentProps = {
     name: string;
   };

   const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
     return <div>Hello, {name}!</div>;
   };

   export default MyComponent;
   ```

### **4. TypeScript 설정 수정 (선택 사항)**

TypeScript 설정을 수정하고 싶다면, `tsconfig.json` 파일을 열어 원하는 옵션을 추가하거나 수정할 수 있습니다. 이 파일은 TypeScript 컴파일러의 동작 방식을 제어합니다.

예를 들어, `strict` 모드를 활성화하거나, `noImplicitAny` 옵션을 추가하여 암시적인 `any` 타입 사용을 금지할 수 있습니다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### **5. 리덕스 설치 **
```shell
npm install @reduxjs/toolkit react-redux
npm install @types/react-redux
```