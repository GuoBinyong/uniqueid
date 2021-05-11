[GitHub仓库]: https://github.com/GuoBinyong/uniqueid
[发行地址]: https://github.com/GuoBinyong/uniqueid/releases
[issues]: https://github.com/GuoBinyong/uniqueid/issues

[码云仓库]: https://gitee.com/guobinyong/uniqueid



目录
=========

<!-- TOC -->

- [1. 简介](#1-简介)
- [2. 安装方式](#2-安装方式)
    - [2.1. 方式1：通过 npm 安装](#21-方式1通过-npm-安装)
    - [2.2. 方式2：直接下载原代码](#22-方式2直接下载原代码)
    - [2.3. 方式3：通过`<script>`标签引入](#23-方式3通过script标签引入)
- [3. API接口](#3-api接口)

<!-- /TOC -->


内容
=====



# 1. 简介
uniqueid 提供了获取唯一标识相关的工具，比如：UUID、UCID、Fingerprint、浏览器指纹、唯一标识符 等等。

**具有以下功能：**  
- 获取浏览器指纹
- 获取 UUID、UCID
- 获取唯一字符串
- 等等

**详情请看：**  
- 主页：<https://github.com/GuoBinyong/uniqueid>
- [GitHub仓库][]
- [码云仓库][]


**如果您在使用的过程中遇到了问题，或者有好的建议和想法，您都可以通过以下方式联系我，期待与您的交流：**
- 给该仓库提交 [issues][]
- 给我 Pull requests
- 邮箱：<guobinyong@qq.com>
- QQ：guobinyong@qq.com
- 微信：keyanzhe





# 2. 安装方式
目前，安装方式有以下几种：


## 2.1. 方式1：通过 npm 安装
```
npm install --save-prod @gby/uniqueid
```

## 2.2. 方式2：直接下载原代码
您可直接从项目的 [发行地址][] 下载 源码 或 构建后包文件；

您可以直接把 源码 或 构建后 的包拷贝到您的项目中去；然后使用如下代码在您的项目中引入 `uniqueid`：
```
import { getUUID,getUCID } from "path/to/package/uniqueid";
```




## 2.3. 方式3：通过`<script>`标签引入
您可直接从项目的 [发行地址][] 中下载以 `.iife.js` 作为缀的文件，然后使用如下代码引用 和 使用 uniqueid：


1. 引用 uniqueid
   ```
   <script src="path/to/package/uniqueid.iife.js"></script>
   ```
   
2. 使用全局的 `uniqueid`
   ```
   <script>
   // 使用全局的 uniqueid
       const uuid = uniqueid.getUUID();
   </script>
   ```

# 3. API接口
+ `setKeyPrefix(keyPrefix:string)`：设置 用于存储 id 的 key 的前缀
+ `getUUID():string`: 获取 UUID 通用唯一识别码，用于标识浏览器，对于不同电脑实体的不同浏览器 会有不同的值
+ `getUCID():string`：获取 UCID，如果不重置，则对于每个浏览器中的同一个域名，每次获取的值都一样
+ `setUCID(id:string)`：设置 UCID
+ `createUniqueIdentifier():string`：生成唯一的标识符，每次调用生成的都不一样
+ `getCanvasFingerprint():string`：获取浏览器的Canvas指纹，用来标识设备上的浏览器，理论上，对于 不同计算机实体的不同浏览器会生成不同的指纹标识





--------------------

> 有您的支持，我会在开源的道路上，越走越远

![赞赏码](https://i.loli.net/2020/04/08/PGsAEqdJCin1oQL.jpg)