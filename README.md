    <img src="https://user-images.githubusercontent.com/13286745/63065062-66f6d800-befc-11e9-882a-488ab85f6a37.png" alt="BC logo" width="100px" height="100px">

# UI-Capsules - React UI Kit 👷‍♂💊🚧 wip️

<div>
    <a href="https://www.npmjs.com/package/@binarycapsule/ui-capsules"><img src="https://img.shields.io/npm/v/@binarycapsule/ui-capsules" alt="npm link"/></a>
    <a href="https://travis-ci.org/jcmnunes/ui-capsules"><img src="https://travis-ci.org/jcmnunes/ui-capsules.svg?branch=master" alt="build status"/></a>
    <a href="https://app.netlify.com/sites/competent-mcclintock-222a1a/deploys"><img src="https://api.netlify.com/api/v1/badges/0e3396d1-d7ea-4e54-b5b5-d33f237479d7/deploy-status" alt="netlify badge" /></a>
    <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="prettier badge"/></a>
</div>

React UI kit used by BinaryCapsule
([binarycapsule.tech](https://binarycapsule.tech)).

The Components demo (wip) can be visited [here](https://uic.binarycapsule.tech).

<img src="https://user-images.githubusercontent.com/13286745/79010931-de980800-7b5a-11ea-9a2c-32323ead8596.png" alt="playground-screenshot" width="100%" style="box-shadow: 0 0 10px 0 rgba(181,181,181,1);">

## Install

UI-Capsules is available at npm. To add it to your app run:

```
npm i @binarycapsule/ui-capsules
```

The following peer dependencies should also be installed:

```
npm i react react-dom @emotion/react @emotion/styled styled-system @styled-system/should-forward-prop
```

As well as the following devDependencies:

```
npm i -D @types/styled-system @types/react-modal @types/react-select
```

## Setup

UI-Capsules sets some global styles and does a CSS reset. In order for the
components to work correctly in your app import the global CSS file at the entry
point.

```jsx
import '@binarycapsule/ui-capsules/dist/styles/global.css';
```

If using the modal component, call setAppElement with a selector for the root
element:

```jsx
import { setAppElement } from '@binarycapsule/ui-capsules';

setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root'));
```

Wrap your app in the Theme and Toasts providers:

```jsx
import {
  ToastProvider,
  ThemeProvider,
  theme,
} from '@binarycapsule/ui-capsules';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
```

## Usage

Please refer to the [Components demo](https://uic.binarycapsule.tech) to get
further instructions on how to use each component.

## Licensing

Licensed under the [MIT License](./LICENSE).
