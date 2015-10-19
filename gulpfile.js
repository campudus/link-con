var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var del = require('del');
var ghPages = require('gulp-gh-pages');
var source = require('vinyl-source-stream');

gulp.task('build:assets', copyAssets);
gulp.task('build:js', browserifyJs);
gulp.task('build:scss', compileSass);
gulp.task('build', ['build:assets', 'build:js', 'build:scss']);

gulp.task('dev', ['build'], watcher);

gulp.task('deploy', ['build'], deploy);

gulp.task('clean', cleaner);

var outDir = 'out';

function watcher() {
  browserSync({
    server : {
      baseDir : outDir
    },
    open : false
  });

  gulp.watch('src/scss/*.scss', ['build:scss']);
  gulp.watch(['src/**/*', '!src/scss/', '!src/scss/**', '!src/js/', '!src/js/**'], ['build:assets']);
  gulp.watch(['src/js/**/*.js'], ['build:js']);
}

function copyAssets() {
  return gulp.src(['src/**', '!src/js/**', '!src/scss/**', '!src/scss'])
    .pipe(gulp.dest(outDir))
    .pipe(browserSync.stream());
}

function compileSass() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .on('error', function (err) {
      console.log('error occured:', err);
      this.emit('end');
    })
    .pipe(gulp.dest(outDir + '/css'))
    .pipe(browserSync.stream());
}

function browserifyJs() {
  return browserify('./src/js/app.js')
    .bundle()
    .on('error', function (err) {
      console.log('error occured:', err);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest(outDir + '/js'))
    .pipe(browserSync.stream());
}

function deploy() {
  return gulp.src(outDir + '/**')
    .pipe(ghPages());
}

function cleaner(cb) {
  del([outDir], cb);
}

