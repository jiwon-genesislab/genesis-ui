This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

and I ejected it using for Genesis-UI project.

## Available Scripts

In the project directory, you can run:

### `yarn start`

UI Component를 만들기 위한 local 환경.

/example 하위의 소스가 실행됨

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Genesis-UI를 builld하기 위한 bundling.

rollup에 의해 수행된다.

### `yarn publish`

[Github packages](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages)가 익숙하지 않다면 참고
[genesis-ui packages](https://github.com/jiwon-genesislab/genesis-ui/packages)에 배포


## How to use

사용하고자 하는 환경에서 .npmrc 파일을 생성한 후 아래와 같이 등록해준다.
```
@jiwon-genesislab:registry=https://npm.pkg.github.com/
```
Install from command line
```
npm install @jiwon-genesislab/genesis-ui@0.2.2
```
Install vi package.json
```
"@jiwon-genesislab/genesis-ui": "0.2.2"
```
yarn install을 할 경우 npm registry가 달라서 설치가 안될 수 있다.

[이슈](https://stackoverflow.com/questions/49501749/yarn-is-it-possible-to-ignore-the-dependency-hash-validation-of-just-one-module/49908419#49908419)를 참고하여 아래와 같이 수행하면 된다.
```
yarn install --update-checksums
```

### caveat
만약 **Hooks can only be called inside the body of a function component.** 의 경고가 나타나면
[invalid-hook-call-warning](https://reactjs.org/warnings/invalid-hook-call-warning.html)를 참고한다.
genesis-ui의 react peerdependency의 version과 사용하는 프로젝트의 react version을 맞춰주도록 한다.