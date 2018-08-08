# gulp 自动合成雪碧图

> 把多张png格式的icon自动合成到同一张png大图上，减少浏览器多次请求服务器

## features

* 合成雪碧图
* 优化图片体积
* 压缩css文件

## 基本命令

```bash
## 下载依赖
$ npm install
## 使用
$ npm start
```

现有目录结构如下：

```bash
└── images/
    ├── deposit-reviewed.png
    ├── dialog-info.png
    └── dialog-warning.png
```

代码执行后文件结构

```bash
└── dist/
  ├── css
  │   └── sprite.css // css文件，根据icon尺寸自动生成了对应的 .icon-{{name}}
  └── image
      └── sprite.png // 合成的雪碧图
```

## 插件列表

* 合成雪碧图 [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)
* 优化图片大小 [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
* 压缩css文件 [gulp-csso](https://github.com/ben-eb/gulp-csso)
