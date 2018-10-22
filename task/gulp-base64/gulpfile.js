/**
 * @see https://github.com/twolfson/gulp.spritesmith
 * todo 合成一倍图片。
 */

const gulp = require('gulp');
const base64 = require('gulp-base64');

// 压缩  css文件   和base64 和文件名加md5后缀
gulp.task('main', () => {
  gulp.src('./src/*.css')
    .pipe(base64())
    .pipe(gulp.dest('./dist/css'));
});
