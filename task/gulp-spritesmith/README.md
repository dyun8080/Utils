# gulp 自动合成雪碧图图片

> 把多张png格式的icon自动合成到同一张png大图上，减少浏览器多次请求服务器

## features

* 优化图片
* 压缩css

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
