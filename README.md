
# 婚礼邀请函

> 体验二维码
婚礼小程序转化版：

![小程序效果](./qr.jpg)


> 开发参考 [掘金文章](https://juejin.im/post/5c341e1d6fb9a049f66c4876#heading-5)
> 可加原作者微信(huangbin910419）备注（‘掘金’或者‘码云’）进群讨论



## 开发前须知

- 审核：
  由于这类小程序特别多且小程序是不支持个人内容，除了第一批开发者可以轻松上线，后面的人很难通过。可以通过云数据库动态调整渲染逻辑。
  我的方案是将首屏做成工具，任何人都可以做邀请函，审核时开起这个功能，审核通过后关闭。文件参考[Introduce.vue](src/components/Introduce.vue)

- 云开发：
  需要提前创建一个云数据库并建好字段，字段截图参考
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
