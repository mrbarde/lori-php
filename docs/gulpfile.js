const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const util = require('gulp-util');

const paths = {
    sass: {
        watchlist: [
            'assets/sass/*', 
            'assets/sass/**/*',
            'assets/sass/**/**/*',
        ],
        source: 'assets/sass/style.scss',
        dest: 'assets/dist'
    },
    js: {
        watchlist: [
            'assets/js/*.js',
        ],
        source: [
            'assets/js/*.js'
        ],
        dest: 'assets/dist'
    }
}

gulp.task('sass', function(){
    return sass(paths.sass.source)
               .pipe(autoprefixer())
               .pipe(cssnano())
               .pipe(rename('style.css'))
               .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('js', function(){
    return gulp.src(paths.js.source)
               .pipe(concat('scripts.js'))
               .pipe(uglify({preserveComments:'none'}).on("error", function(){util.log();}))
               .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch', function(){
    gulp.watch(paths.js.watchlist, ['js']);
    gulp.watch(paths.sass.watchlist, ['sass']);
});