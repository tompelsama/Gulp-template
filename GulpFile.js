var
  gulp           = require('gulp'),
  sass           = require('gulp-sass')
// WATCH
gulp.task('watch', watch);

// Compile sass files and move them to dist/styles
gulp.task('sass', compileSass);


gulp.task('build', ['sass']);

gulp.task('default', ['watch']);

function watch() {
  gulp.watch('/scss/**/*.scss', ['sass']);
}


function compileSass() {
  return gulp.src('sass/styles.scss')
             .pipe(sass())
             .pipe(gulp.dest('dist/styles'));
}


var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
});

