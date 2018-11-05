# negotiation-app

[![Build Status](https://travis-ci.com/jmaczan/negotiation-app.svg?token=sgNqUBkrsYN1KidWqVXT&branch=master)](https://travis-ci.com/jmaczan/negotiation-app)

VueJS Assignment - Negotiation App

## Project description

#### Sources:
1. assets - contain Sassy components structure, which is ready to extend and to customize
2. components - with main component `NegotiationWindow` contains components structure, used in this assignment. All props have their types and default values, components are quite strongly divided to small elements
3. helpers - tiny helping functions, e.g. for concatenating Vuex module names with mutations
4. mixins - reusable functionalities for components
5. store - used to simplify state management and to reduce amount of props and emitted events. Store is modularized so allows for simple extending

#### Tests:
1. Written using Vue test utils and Jest
2. Their main purpose is to test functionalities (behavior), not implementation
3. All tests placed in tests/unit
4. They are separeted on integration tests (they use Vuex) and unit tests (isolated components)

#### Continuous Integration:
1. Build on Travis, verifies code and tests

#### Linting:
1. ESLint Standard

#### Tooling:
1. npm
2. Babel

#### CSS preprocessor:
1. Sass (SCSS)

#### UX:
1. Simple, because assigment said so :)

## Customization

#### 

#### UX
You can easily modify CSS by adding your own styles to existing files in assets/scss or by creating new files. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run linter
```
npm run lint
```

### Fix lint errors
```
npm run fix
```

### Run unit tests
```
npm run test:unit
```
