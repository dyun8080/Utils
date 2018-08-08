# gulp 自动合成雪碧图图片

> 把多张png格式的icon自动合成到同一张png大图上，减少浏览器多次请求服务器

## 使用

```bash
## 下载依赖
$ npm install
## use
$ npm start
```

## 文件初始状态

现有目录结构如下：

```bash
└── images/
    ├── deposit-reviewed.png
    ├── dialog-info.png
    └── dialog-warning.png
```

## 代码执行结果

代码执行后文件结构

```bash
└── output/
    ├── sprite.css   // css文件，根据icon尺寸自动生成了对应的 .icon-{{name}}
    └── sprite.png   // 合成的雪碧图
```
