/* eslint-env node */
/* eslint-disable valid-jsdoc, no-console */

'use strict';

/**
 * Convert JSON5 files to strict JSON.
 */
module.exports = (gulp, plugins) => {
  return () => {
    return gulp
      .src(['**/*.json5', '**/.*.json5'])
      .pipe(plugins.excludeGitignore())
      .pipe(plugins.json5ToJson({beautify: false}))
      .pipe(gulp.dest('.'));
  };
};
