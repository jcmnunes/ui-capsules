<img src="https://user-images.githubusercontent.com/13286745/63065062-66f6d800-befc-11e9-882a-488ab85f6a37.png" width="100px" height="100px">

# UI-Capsules - React UI Kit 👷‍♂💊🚧 wip️

<div>
    <a href="https://travis-ci.org/jcmnunes/ui-capsules"><img src="https://travis-ci.org/jcmnunes/ui-capsules.svg?branch=master" alt="build status"/></a>
    <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" /></a>
    <a href="https://github.com/styled-components/styled-components"><img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e" /></a>
    <a href="https://app.netlify.com/sites/competent-mcclintock-222a1a/deploys"><img src="https://api.netlify.com/api/v1/badges/0e3396d1-d7ea-4e54-b5b5-d33f237479d7/deploy-status" /></a>
</div>

React UI kit used by BinaryCapsule
([binarycapsule.tech](https://binarycapsule.tech)).

The Components demo (wip) can be visited [here](https://uic.binarycapsule.tech).

<img src="https://user-images.githubusercontent.com/13286745/63065658-d968b780-befe-11e9-8573-bfb3ad782312.png" alt="playgorund-screenshot" width="100%">

## Install

UI-Capsules is available at npm. To add it to your app run:

```
npm i @binarycapsule/ui-capsules
```

## Setup

UI-Capsules sets some global styles and does a CSS reset. In order for the
components to work correctly in your app import the global CSS file at the entry
point.

```
import '@binarycapsule/ui-capsules/dist/styles/global.css';
```

To improve A11y, import the focus-visible polyfill as well:

```
import 'focus-visible/dist/focus-visible';
```

## Usage

Please refer to the [Components demo](https://uic.binarycapsule.tech) to get
further instructions on how to use each component.

## Development

This repo is [commitizen-friendly](https://github.com/commitizen/cz-cli). Use
the following command to commit changes:

```
$ npm run ci
```

Note: commit messages are important since releases are automated by the
[semantic release package](https://github.com/semantic-release/semantic-release).

## Licensing

Licensed under the [MIT License](./LICENSE).
