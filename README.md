# Express JS Backend Framework

## Purpose
To provide a quick JS framework for anyone to start developing applications. We use certain packages for auth, orm, error handling, etc.

This is mainly for Backend Api development but can be extended to include FE.

## Runbook
`npm run watch`: Will hot reload everything in /src and /public. Review nodemon.json for more config

## Guidelines
[JSON API](https://jsonapi.org/)


## Packages

| Section | Package/Documentation  | Purpose |
| -------------| ------------- |:-------------:|
|Model||
|| [ObjectionJS](https://vincit.github.io/objection.js/guide/)   | ORM     |
|| [db-migrate](https://db-migrate.readthedocs.io/en/latest/)    | Migrations |
|| [Admin-js](https://docs.adminjs.co/)      | CRM/Admin Panel     |
|Controller||
|| [Http-errors](https://github.com/jshttp/http-errors)  | Error Response Objects     |
|View||
||[Handlebars](https://handlebarsjs.com/api-reference/)|Templating Engine|
||[Swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)|Api Documentation|
|Background Jobs|| |
|| [Bull](https://optimalbits.github.io/bull/)          | Background Job Processing |
|| [Bull-board](https://github.com/felixmosh/bull-board)   |  Background Job Visualization |
|Tooling||
||[Axios](https://axios-http.com/docs/intro)|HTTP Client|
||[Winston](https://github.com/winstonjs/winston)|Logger|
||[Webpack](https://webpack.js.org/concepts/)|Bundler/Hot Reload|
|Testing||
||[Mocha](https://mochajs.org/api/)| Test Framework|
||[ChaiJS](https://www.chaijs.com/api/)| Assertions |
||[SinonJs](https://sinonjs.org/releases/latest/)| Spies, Stubs, Mocks |
||[Rewire](https://github.com/jhnns/rewire)| Dependency Injection |
||[Istanbul](https://istanbul.js.org/docs/tutorials/mocha/)| Test Coverage |
|Event Messaging|||
||[KafkaJs](https://kafka.js.org/docs/introduction)|Event Messaging System|