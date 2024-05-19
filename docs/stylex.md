https://stylexjs.com/docs/learn/theming/defining-variables/
stylex의 공통 변수를 사용하려면, next.js에서 다음 설정이 필요하다.

- .stylex.js 파일을 만들고, 해당 파일에서 Named export로 변수를 정의해야한다.
- next.config.js 파일을 만들고, 다음과 같이 설정한다.

바벨 및 next config 설정 변경

```
Only static values are allowed inside of a stylex.create() call.
위 에러에 대응 하려면 아래 설정이 필요하다.

참조 https://stackoverflow.com/questions/78003082/stylex-error-adding-variables-to-stylex-styling-doesnt-work
```

기본적으로 styles는 빌드 타임에 컴파일 되는데,로컬 모듈 환경에 해당 값들이 존재해야한다.
공용으로 정의된 값을 사용하려면,stylex.defineVars을 통해 생성되어야 하며,import 파일 모듈을 알기 위한 바벨 및 플러그인 설정을 해줘야 한다.


참조 https://github.com/facebook/stylex/discussions/227

`babelrc.js`파일 의 별칭에 대한 프로젝트의 절대 경로를 구성합니다.

```js
module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "@stylexjs/babel-plugin",
            {
                ...other configurations
                aliases: {
                    "@/*": [path.join(__dirname, "src/*")]
                },

            }
        ]
    ]
};
```

stylexPlugin에서 프로젝트의 절대 경로를 구성합니다.`next.config`

```js
    stylexPlugin({
        rootDir: __dirname,
        aliases: {
            "@/*": [join(__dirname, "src/*")]
        }
    })
```
