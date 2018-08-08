const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite', () => {
  const spriteData = gulp.src('images/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
    }));
  return spriteData.pipe(gulp.dest('path/to/output/'));
});
