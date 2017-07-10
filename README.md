# Polymer App Toolbox - Starter Kit Plus

[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/StartPolymer/polymer-starter-kit-plus.svg)](http://isitmaintained.com/project/StartPolymer/polymer-starter-kit-plus "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/StartPolymer/polymer-starter-kit-plus.svg)](http://isitmaintained.com/project/StartPolymer/polymer-starter-kit-plus "Percentage of issues still open")
[![Build Status](https://travis-ci.org/StartPolymer/polymer-starter-kit-plus.svg?branch=master)](https://travis-ci.org/StartPolymer/polymer-starter-kit-plus)
[![devDependencies Status](https://david-dm.org/StartPolymer/polymer-starter-kit-plus/dev-status.svg)](https://david-dm.org/StartPolymer/polymer-starter-kit-plus?type=dev)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/StartPolymer/polymer-starter-kit-plus/pulls)

> Up-to-date fork of [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit).
> Only Polymer 2.0+

This template is a starting point for building apps using a drawer-based
layout. The layout is provided by `app-layout` elements.

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

### New Features :tada:

- `yarn build` using [Gulp](https://github.com/gulpjs/gulp) for automating painful or time-consuming tasks.
- `yarn lint:css` using [Prettier](https://github.com/prettier/prettier) for ensure that all outputted code conforms to a consistent style.
- `yarn lint:html` using [htmllint](https://github.com/htmllint/htmllint) for HTML5 linting and validating.
- `yarn lint:js` using [Prettier](https://github.com/prettier/prettier) and [eslint](https://github.com/eslint/eslint) for identifying and reporting on patterns in JavaScript based on [Google JavaScript style guide](https://github.com/google/eslint-config-google).
- `yarn lint:json` using [Prettier](https://github.com/prettier/prettier).
- `yarn format:css` using [Prettier](https://github.com/prettier/prettier).
- `yarn format:html` using [rehype-format](https://github.com/wooorm/rehype-format).
- `yarn format:js` using [Prettier](https://github.com/prettier/prettier).
- `yarn format:json` using [Prettier](https://github.com/prettier/prettier).
- Run formatters on git staged files using [lint-staged](https://github.com/okonet/lint-staged).
- [imagemin](https://github.com/imagemin/imagemin) for minify images.

### TODO

- [Browsersync](https://github.com/Browsersync/browser-sync) for keeping multiple browsers & devices in sync when building websites.
- [Reshape](https://github.com/reshape/reshape) for transforming HTML with JavaScript plugins.
- [JSON5](https://github.com/json5/json5) for humans.
- [gulp-rev-all](https://github.com/smysnk/gulp-rev-all) for static asset revisioning with dependency considerations, appends content hash to each filename, re-writes references.
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) for auditing, performance metrics, and best practices.
- and other [issues](https://github.com/StartPolymer/polymer-starter-kit-plus/issues) ...

### Quickstart

We've recorded a Polycast to get you up and running with PSK2 fast!

<p align="center">
  <a href="https://www.youtube.com/watch?v=HgJ0XCyBwzY&list=PLNYkxOF6rcIDdS7HWIC_BYRunV6MHs5xo&index=10">
    <img src="https://img.youtube.com/vi/HgJ0XCyBwzY/0.jpg" alt="Polymer Starter Kit 2 video">
  </a>
</p>

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    yarn global add polymer-cli

Then, install `generator-polymer-init-starter-kit-plus`.

    yarn global add generator-polymer-init-starter-kit-plus

##### Initialize project from template

    mkdir my-app
    cd my-app
    polymer init starter-kit-plus

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.
