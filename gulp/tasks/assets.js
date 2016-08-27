'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');


const assets = done => {
  return gulp.src(config.assets)
  .pipe( gulp.dest( `${config.distFolder}/assets/misc` ) );
  done();
};

gulp.task('assets', assets);

module.exports = assets;
