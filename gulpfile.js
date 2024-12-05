// npm install --save-dev gulp-cli gulp gulp-sass node-sass gulp-minify-css gulp-rename gulp-uglify gulp-plumber

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

function adminCss() {
    return gulp
        .src('admin/sass/*.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('admin/web/css/'))
        .pipe(minifycss())
        .pipe(
            rename(function(path) {
                path.basename += '.min';
                path.extname = '.css';
            })
        )
        .pipe(gulp.dest('admin/web/css/'));
}

function adminJs() {
    return gulp
        .src('admin/js/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('admin/web/js/'))
        .pipe(uglify())
        .pipe(
            rename(function(path) {
                path.basename += '.min';
                path.extname = '.js';
            })
        )
        .pipe(gulp.dest('admin/web/js/'));
}

function mailCss() {
    return gulp
        .src('common/mail/assets/sass/*.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('common/mail/assets/css/'))
        .pipe(minifycss())
        .pipe(
            rename(function(path) {
                path.basename += '.min';
                path.extname = '.css';
            })
        )
        .pipe(gulp.dest('common/mail/assets/css/'));
}

function siteCss() {
    return gulp
        .src('site/src/sass/build/**/*.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('site/src/static/css/'))
        .pipe(
            rename(function(path) {
                path.basename += '.module';
                path.extname = '.css';
            })
        )
        .pipe(gulp.dest('site/src/static/css/'));
}

function watch() {
    gulp.watch('common/sass/**/*', siteCss);
    gulp.watch('common/mail/assets/sass/**/*', mailCss);
    gulp.watch('site/src/sass/**/*', siteCss);
}

exports.watch = watch;
exports.adminCss = adminCss;
exports.adminJs = adminJs;
exports.mailCss = mailCss;
exports.siteCss = siteCss;
