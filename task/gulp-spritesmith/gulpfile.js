const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite', () => {
  /**
   * ? spriteData<{ img, css }>
   */
  const spriteData = gulp.src('images/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
    }));

  const imgStream = spriteData.img
    // 优化图片体积, 使用 imagemin 前必须先 buffer
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/image/'));

  const cssStream = spriteData.css
    // 压缩css文件体积
    .pipe(csso())
    .pipe(gulp.dest('dist/css/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});
