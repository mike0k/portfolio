// Gulp.js configuration
// npm install --save-dev gulp gulp-compass gulp-minify-css gulp-rename gulp-uglify gulp-plumber
var
    // modules
    gulp = require('gulp'),
    compass = require('gulp-compass'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify')
;

// Builds
gulp.task('default', ['watch']);
gulp.task('build', ['site-js', 'site-css']);

// Watch files
gulp.task('watch', function () {
    gulp.watch('_site/js/**/*.js', ['site-js']);
    gulp.watch('_site/sass/**/*.sass', ['site-css']);
    gulp.watch('_common/sass/**/*.sass', ['admin-css', 'site-css']);
});

gulp.task('site-js', function () {
    return gulp.src(['_site/js/**/*.js'])
        .pipe(plumber())
        .pipe(gulp.dest('_site/web/js/'))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('_site/web/js/'));
});
gulp.task('site-css', function () {
    return gulp.src('_site/sass/*.sass')
        .pipe(plumber())
        .pipe(compass({
            css: '_site/web/css',
            sass: '_site/sass',
            image: '_site/web/img'
        }))
        //.pipe(gulp.dest('web/css/dev'))
        .pipe(minifycss())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('_site/web/css/'));
});


gulp.task('yii', function () {

    //return gulp.src(['js/**/*.js', '!js/**/*.min.js'])
    return gulp.src(['vendor/yiisoft/yii2/assets/*.js'])
        .pipe(plumber())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(uglify())
        .pipe(gulp.dest('vendor/yiisoft/yii2/assets/'));

});