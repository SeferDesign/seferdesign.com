var gulp          = require('gulp'),
    sourcemaps    = require('gulp-sourcemaps'),
    sass          = require('gulp-sass'),
    scsslint      = require('gulp-scss-lint'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    jshint        = require('gulp-jshint'),
    uglify        = require('gulp-uglify'),
    filter        = require('gulp-filter'),
    imagemin      = require('gulp-imagemin'),
    pngquant      = require('imagemin-pngquant'),
    browserSync   = require('browser-sync'),
    sourcemaps    = require('gulp-sourcemaps'),
    cp            = require('child_process');

var paths = {
  src: '_src/assets/',
  build: '_src/dist/',
  site: '_site/',
  jekyllDestinationPrefix: ''
};

gulp.task('jekyll-build', function (done) {
  return cp.spawn('jekyll', ['build'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: paths.site
    },
    open: false
  });
});

gulp.task('sass', function() {
  gulp.src(paths.src + 'style/*/**.scss')
    .pipe(scsslint());
  return gulp.src(paths.src + 'style/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      browsers: ['last 10 versions', 'ie 9'],
      errLogToConsole: true,
      sync: true
    }))
    .on('error', function(error) { console.log(error.message); })
    .pipe(gulp.dest('_src/_includes/'))
    .pipe(browserSync.stream({ match: ['**/*.css'] }));
});

gulp.task('copy-css', ['sass'], function() {
  return gulp.src(paths.build + 'style/**/*')
    .pipe(gulp.dest(paths.site + paths.jekyllDestinationPrefix + paths.build + 'style/'))
    .pipe(filter(['**/*.css', '**/*.map']))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function() {
  return gulp.src([paths.src + 'scripts/vendor/**/*.js', paths.src + 'scripts/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.build + 'scripts'));
});

gulp.task('images', function() {
  return gulp.src(paths.src + 'images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.build + 'images'));
});

gulp.task('default', ['sass', 'js', 'images', 'jekyll-build', 'browser-sync'], function() {
  gulp.watch(paths.src + 'style/**/*.scss', ['copy-css']);
  gulp.watch(paths.src + 'scripts/*.js', ['js', 'jekyll-rebuild']);
  gulp.watch(paths.src + 'images/**/*', ['images']);
  gulp.watch(['*', '_src/_includes/*.html', '_src/_layouts/*.html', paths.src + 'images/**/*'], ['jekyll-rebuild']);
});
