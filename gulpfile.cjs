const { src, dest } = require('gulp')
const minifyJS = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')

const bundleJS = () => {
    return src(['./src/**/*.js', './src/**/*.jsx'])
        .pipe(babel({
            presets: [
                "@babel/env",
                "@babel/react"
            ]
        }))
        .pipe(sourcemaps.init())
        .pipe(minifyJS())
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/'))
}

exports.bundleJS = bundleJS
