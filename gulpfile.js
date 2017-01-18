var gulp = require('gulp');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');

gulp.task('sass', function(){
    return gulp.src('src/sass/portfolio.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('public/css'));
});

gulp.task('portfolio', function() {
    return webpackTask(['src/js/portfolio.js'], 'portfolio.js');
});

function webpackTask(source, destFile) {
    return gulp.src(source)
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /.vue$/,
                        loader: 'vue-loader',
                    }
                ]
            },
            output: {
                filename: destFile
            },
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.common.js'
                }
            }
        }))
        .pipe(gulp.dest('public/js'));
}


gulp.task('default', function (callback) {
    runSequence(['sass', 'portfolio'],
        callback
    )
});

gulp.task('watch', function(){
    gulp.watch(['src/js/**'], ['portfolio']);
    gulp.watch('src/sass/**', ['sass']);
});
