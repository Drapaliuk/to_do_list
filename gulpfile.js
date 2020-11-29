var gulp = require('gulp')
var browsersync = require('browser-sync').create() //plugin + create dev environments
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var babel = require('gulp-babel')
var imageMin = require('gulp-imagemin')





const dist = function (done) {
    gulp.src('./src/js/**/*')
        .pipe(gulp.dest('./dist/src/js'));
    gulp.src('./src/css/main.css')
        .pipe(gulp.dest('./dist/src/css'));
    gulp.src('./src/css/common/**/*')
        .pipe(gulp.dest('./dist/src/css/common'));
    gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/src/img'));
    gulp.src('./**/*.html')
        .pipe(gulp.dest('./dist'));
    gulp.src('./favicon.ico')
        .pipe(gulp.dest('./dist'));
    done();
}


const optimImg = function (done) {
    gulp.src('./src/img/**/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/src/img'))

    done()
}

const css = function (done) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'uncompressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsersList: ['last 10 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest('./src/css'))
        .pipe(browsersync.stream())
    done()
}

const js = function (done) {
    gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist/src/js'))
    done()
}




function browserReload(done) {
    browsersync.reload()
    done()
}

function sync(done) {
    browsersync.init({
        server: {
            baseDir: "./"
            // index: "page-about.html"

        },
        port: 3000
    })
    done()
}


function watchFiles(done) {
    gulp.watch("./src/scss/**/*.scss", css)
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.js", browserReload);
    gulp.watch("./**/*.php", browserReload);
    done()
}

gulp.task('default', gulp.parallel(sync, css, watchFiles))
gulp.task('jsProduction', js)
gulp.task('imgProduction', optimImg)
gulp.task('toDist', dist)