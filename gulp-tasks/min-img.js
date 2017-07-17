/* eslint-env node */
/* eslint-disable valid-jsdoc, no-console */

'use strict';

/**
 * Minify PNG, JPEG, GIF and SVG images.
 */
module.exports = (gulp, plugins) => {
  return () => {
    return (
      gulp
        .src('images-original/**/*')
        .pipe(plugins.imagemin())
        // .pipe(plugins.imagemin([
        //   plugins.imagemin.gifsicle({interlaced: true}),
        //   plugins.imagemin.jpegtran({progressive: true}),
        //   plugins.imagemin.optipng({optimizationLevel: 5}),
        //   plugins.imagemin.svgo({plugins: [{removeViewBox: true}]})
        // ]))
        .pipe(gulp.dest('images'))
        .pipe(plugins.webp({quality: 50}))
        .pipe(gulp.dest('images'))
    );
  };
};
