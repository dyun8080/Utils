const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite', () => {
  // Generate our spritesheet
  /**
   * spriteData<{ img, css }>
   */
  const spriteData = gulp.src('images/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
    }));

  // Pipe image stream through image optimizer and onto disk
  const imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    // 优化图片体积
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/image/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  // 压缩css文件体积
  const cssStream = spriteData.css
    .pipe(csso())
    .pipe(gulp.dest('dist/css/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});
