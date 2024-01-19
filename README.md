<img src="https://user-images.githubusercontent.com/13286745/63065062-66f6d800-befc-11e9-882a-488ab85f6a37.png" alt="BC logo" width="100px" height="100px">

# UI-Capsules - React UI Kit 👷‍♂💊🚧 wip️

<div>
    <a href="https://app.travis-ci.com/github/jcmnunes/ui-capsules"><img src="https://app.travis-ci.com/jcmnunes/ui-capsules.svg?branch=main" alt="build status"/></a>
    <a href="https://www.npmjs.com/package/@binarycapsule/ui-capsules"><img src="https://img.shields.io/npm/v/@binarycapsule/ui-capsules" alt="npm link"/></a>
    <a href="https://app.netlify.com/sites/competent-mcclintock-222a1a/deploys"><img src="https://api.netlify.com/api/v1/badges/0e3396d1-d7ea-4e54-b5b5-d33f237479d7/deploy-status" alt="netlify badge" /></a>
</div>

### 🚨 **Breakable toy - Do not use in real projects** 🚨

**This library is a breakable toy. New versions will often contain breaking
changes, even for non-major releases.**

---

React UI kit.

The Components demo (wip) can be visited [here](https://uic.josenunes.dev).

<table>
<tr>
<td>
<img src="https://user-images.githubusercontent.com/13286745/142729462-3df116d0-7dba-4c59-82c9-6c2816f24c1d.png" alt="UIC light mode" width="100%" />
</td>
<td>
<img src="https://user-images.githubusercontent.com/13286745/142729495-a89bc49a-3b40-4900-b268-2fec32a18f1a.png" alt="UIC dark mode" width="100%" />
</td>
</tr>
</table>

## Install

UI-Capsules is available at npm. To add it to your app run:

```
npm i @binarycapsule/ui-capsules
```

The following peer dependencies should also be installed:

```
npm i react@17 react-dom@17 styled-components@6
```

## Setup

Wrap your application with UiCaps:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { UiCaps } from '@binarycapsule/ui-capsules';
import { App } from './App.tsx';

ReactDOM.render(
  <React.StrictMode>
    <UiCaps>
      <App />
    </UiCaps>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## Usage

Please refer to the [Components demo](https://uic.josenunes.dev) to get
further instructions on how to use each component.

### Dark Theme

To toggle dark theme, use the `useUiCapsContext` hook:

```jsx
import React from 'react';
import { IconButton, useUiCapsContext } from '@binarycapsule/ui-capsules';

const App = () => {
  const { isDarkTheme, setTheme } = useUiCapsContext();

  return (
    <IconButton
      icon={isDarkTheme ? 'moon' : 'sun'}
      variant="ghostGray"
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
      aria-label="Change theme"
    />
  );
};
```

## Licensing

Licensed under the [MIT License](./LICENSE).
