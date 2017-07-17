/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */
/* eslint-disable valid-jsdoc, no-console */

'use strict';

const gulp = require('gulp');
const mergeStream = require('merge-stream');
const plugins = require('gulp-load-plugins')();

/**
 * Loads external gulp task script functions by filename.
 */
function getTask(filename) {
  return require('./gulp-tasks/' + filename);
}

/**
 * Polymer build.
 */
gulp.task('build', getTask('build')(gulp, mergeStream, plugins));

/**
 * Convert JSON5 files to strict JSON.
 */
gulp.task('json5', getTask('json5')(gulp, plugins));

/**
 * Minify PNG, JPEG, GIF and SVG images.
 */
gulp.task('min:img', getTask('min-img')(gulp, plugins));
