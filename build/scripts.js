(function () {
  'use strict';

  const gulp = require('gulp');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });

  gulp.task('scripts:main', function () {
    return gulp
      .src('src/*.js')
      .pipe($.babel())
      .pipe($.jswork.pkgHeader())
      .pipe($.prettier())
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ default size ]:' }))
      .pipe($.uglify({ output: { comments: saveLicense } }));
  });

  gulp.task('scripts:esm', () => {
    return gulp
      .src('src/*.js')
      .pipe($.jswork.pkgHeader())
      .pipe($.rename({ extname: '.esm.js' }))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('scripts', gulp.series('scripts:main', 'scripts:esm'));
})();
