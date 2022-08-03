const {src, dest, watch, parallel, series} = require('gulp')

//Plagins
const sass          = require('gulp-sass')(require('sass'))
const concat        = require('gulp-concat')
const browserSync   = require('browser-sync').create()
const autoprefixer  = require('gulp-autoprefixer')
const del           = require('del')

function styles() {
    return src('src/scss/styles.scss')

    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
    }))
    .pipe(dest('src'))
    .pipe(browserSync.stream())
}

function liveServer() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
}

function watching() {
    watch(['src/scss/**/*.scss'], styles)
    watch('src/index.html').on('change', browserSync.reload)
}

function cleanDist() {
    return del('dist')
}

function build() {
    return src([
        'src/index.html',
        'src/style.min.css',
        'src/js/*.js',
        'src/assets/**/*.*'
    ], {base: 'src'})

    .pipe(dest('dist'))
}

exports.watching = watching
exports.liveServer = liveServer

exports.default = parallel(watching, liveServer)

exports.build = series(cleanDist, build)