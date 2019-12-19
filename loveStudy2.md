# React-intl
1. 后台没有，再去**正式环境**添加；一定在正式环境添加key；只添加中文；测试环境的由后端同步（李建龙）；
2. 登陆网站，请求接口获得messages数组；
3. 先写页面，实现功能，再进行国际化；
4. 问题：冗余key；代码中中文   

参考：[React-intl 实现多语言](https://www.cnblogs.com/qiaojie/p/6411199.html)

# erp项目
1. module:数据源，actions，initstate，reducer
2. antd表格，表单
3. 后期任务：
   - 后期做erp web app；antd-mobile；
   - 采购管理>>采购订单，后期可能会改造；
4. 菜单   
   - 菜单路径定义：aiqier-erp-admin-web/src/components/App/AppMenu.js
   - 菜单引用：aiqier-erp-admin-web/src/components/App/AppMainWrapper.js
      - AppLogo：左侧logo
      - AppHeader：右侧头部
      - this.renderAppMenus():菜单
      - this.renderAppContent(pathname)：右侧内容
      - Redirect to={temObject}
      - Notification
      - AnchorButton：scrollTop/scrollBottom
5. 项目操作
   1. git命令
     - git remote -v
     - git remote add root http://......git
     - git remote -v
     - git status
     - git pull root master
     - git branch -a
     - git checkout -- package.json
     - git checkout --yarn.lock
     - rm -rf package - lock.json
     - rm -rf node_modules/
     - yarn install
     - git add .
     - git commit -m'XXXXXX'
     - git push
     - git pull root master
     - git log
     - git push
   2. 项目部署
     - 地址：webpack.XX.org(Jenkins)
     - PR代码
     - yarn merge:root test
     - yarn deploy (test)
     - yarn merge:root prod
     - yarn deploy prod


## react-dropzone上传文件类型支持：
```
    <Dropzone
        onDrop={this.onDrop}
        accept={'image/jpg, image/jpeg, image/png, image/gif, application/zip, ' +
        'application/x-rar-compressed, application/msword, application/pdf,' +
        ' application/vnd.openxmlformats-officedocument.wordprocessingml.document,' +
        ' application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
        style={_styles.drop}>
        <Icon
        type='inbox'
        style={_styles.icon} />
        <p style={_styles.title}>
        Click or drag file to this area to upload
        </p>
        <p style={_styles.message}>
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
        </p>
    </Dropzone>
 ```
参考：
[office 所有后缀对应的 content-type](https://blog.csdn.net/xiaoranzhizhu/article/details/70473734)

[为什么react的组件要super(props)](https://segmentfault.com/q/1010000008340434):
>>>如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
如果你在constructor中要使用this.props,就必须给super加参数：super(props)；
（无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；）
如果没用到constructor,是可以不写的,直接：
```
class HelloMessage extends React.Component{
    render (){
        return (
            <div>nice to meet you! {this.props.name}</div>
        );
    }
}
//不过这种只是用render的情况，使用一般的ES6函数写会更简便：
const HelloMessage = (props)=>(
    <div>nice to meet you! {this.props.name}</div>
)
```

# 工具/插件/库

1. 树形展示GitHub项目代码Chrome插件：Octotree

2. iterm配置文档参考：

[Mac下终端配置（item2 + oh-my-zsh + solarized配色方案）](https://www.cnblogs.com/weixuqin/p/7029177.html)


3. [idx使用](https://github.com/facebookincubator/idx):现在多使用'?.'写法(?.是一个整体，相当于一个运算符)，可以不使用idx。新的'？.'写法：[@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)   
示例： 
   1. obj?.foo.bar?.baz
   2. obj?.['foo']?.bar?.baz
   3. 
      ```
        function test() {
          return 42;
        }
        test?.();
      ```
  4. || 和 ??区别
      ```
        let a = { b: { c: 0 } }
        console.log(a?.b?.c || 33) // 33
        console.log(a?.b?.c ?? 33) // 0
        console.log(a?.c?.c || 22) // 22
        console.log(a?.c?.c ?? 22) // 22
      ```
[idx源码链接](https://github.com/facebookincubator/idx/blob/master/packages/idx/src/idx.js)   
```
function idx<Ti, Tv>(input: Ti, accessor: (input: Ti) => Tv): ?Tv {
  try {
    return accessor(input);
  } catch (error) {
    if (error instanceof TypeError) {
      if (nullPattern.test(error)) {
        return null;
      } else if (undefinedPattern.test(error)) {
        return undefined;
      }
    }
    throw error;
  }
}

const nullPattern = /^null | null$|^[^(]* null /i;
const undefinedPattern = /^undefined | undefined$|^[^(]* undefined /i;

idx.default = idx;
module.exports = idx;
```

4. [ console-importer](https://github.com/pd4d10/console-importer):在在 Dev Tools 里面来使用 npm 插件！

5. [ Lodash-文档](https://www.lodashjs.com/)
   1. omit 忽略值：
      ```
      var object = { 'a': 1, 'b': '2', 'c': 3 };   
        _.omit(object, ['a', 'c']);   
        // => { 'b': '2' }
      ```

6. curl
>>>百科：cURL是一个利用URL语法在命令行下工作的文件传输工具，1997年首次发行。它支持文件上传和下载，所以是综合传输工具，但按传统，习惯称cURL为下载工具。cURL还包含了用于程序开发的libcurl。    
      1. [curl 的使用](https://www.jianshu.com/p/f05bbd5007d9)
      2. [Linux 命令行：cURL 的十种常见用法](https://blog.csdn.net/chenliaoyuanjv/article/details/79689028)
      3. [curl 命令详解](https://www.jianshu.com/p/07c4dddae43a)

7. [React DnD](http://react-dnd.github.io/react-dnd/about)

8. [Moment.js 文档](http://momentjs.cn/docs/)

9. [React Infinite Scroller](https://cassetterocks.github.io/react-infinite-scroller/)

10. [DropzoneJS](https://www.dropzonejs.com/#) | [Ant Motion ](https://motion.ant.design/index-cn) | [fullPage全屏滚动](https://alvarotrigo.com/fullPage/)

11. [Less 中文网](http://lesscss.cn/)

12. [TypeScript英文文档](http://www.typescriptlang.org/index.html)|[中文](https://www.tslang.cn/index.html)

13. [Next.js文档](http://nextjs.frontendx.cn/) | [Next.js英文文档](https://nextjs.org/)

# 技巧技法
## git
1. 已提交过的代码，被删除，git status会是绿色，相当于已经add过了，会被下一次commit和push带着自动提交远程
2. Git文件名大小写敏感:
   - 问题：本地代码运行ok，但是发现push上去的代码运行后报错，发现有个文件没注意大小写，于是重命名了该文件，发现git没有识别这个更改，不能提交
   - 查看git 的设置:git config --get core.ignorecase
   - git默认是不区分大小的，因此当你修改了文件名的大小写后，git并不会认为你有修改
   - 更改设置解决:git config core.ignorecase false
## JS
1. [js判断对象是否为空对象的几种方法](https://blog.csdn.net/qq_38627581/article/details/77353015)
2. [Node.js 中文文档](http://nodejs.cn/api/synopsis.html) | [Node.js 英文文档](https://nodejs.org/en/docs/)
3. 函数防抖运用:
```
A.js
// 防抖实现
export const debounce = (method, wait) => {
  let timeout
  // args为返回函数调用时传入的参数，传给method
  return function (...args) {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      // args是一个类数组，所以使用fn.apply
      // 也可写作method.call(context, ...args)
      method.apply(context, args)
    }, wait)
  }
}
```
---
```
B.js
//调用：
import { debounce } from A;
debouncedFn = debounce(this.props.getProductItems, 500)
//实际使用：
this.debouncedFn(data)
```
4. react如何产生随机不重复的key
   - `<div key={+new Date() + Math.random()}>`
   - 使用数组的索引
   - 使用uuid：https://www.npmjs.com/package/uuid
   - 使用uniqid：https://www.npmjs.com/package/uniqid
   - Date.now()
5. PureComponent使用(以选择框为例)
   - 使用PureComponent，父组件传递的props不能全是对象和不变的量，否则会导致一直不更新(如果渲染用的checked来自对象，也应该传一个每次切换会变化为true和false的checked，即便不直接使用)
   - 直接使用shouldComponentUpdate，nextProps和this.props进行对比的属性也不能来自对象(例如：return nextProps.item.checked !== this.props.item.checked，也会导致不更新)
   - 函数组件:React.memo(...)是React v16.6引进来的新属性。它的作用和React.PureComponent类似，是用来控制函数组件的重新渲染的。React.memo(...) 其实就是函数组件的React.PureComponent。
      ```
      let TestC = (props) => {
        return ( 
            <div>
            { props.count }
            </>
        )
      }
      TestC = React.memo(TestC);
      ```
  - PureComponent减少ES6的类组件的无用渲染;React.memo(...)减少函数组件的无用渲染
  - 参考阅读
     - [React v16.6.0: lazy, memo and contextType](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)
     - [react v16.6 动态 import，React.lazy()、Suspense、Error boundaries](http://www.ptbird.cn/react-lazy-suspense-error-boundaries.html)
     - [React新特性实例详解（memo、lazy、suspense、hooks）](http://react-china.org/t/react-memo-lazy-suspense-hooks/28789)
6. Modal.confirm的onOk，可以把this传进去，也可以写箭头函数
```
    Modal.confirm({
      title: messages['common_0005'],
      content: messages['prod_br_0008'],
      onOk () {
        _this.props.method()
      },
      <!-- onOk: () => {
        this.props.method()
      }, -->
      onCancel () {
      }
    })
```

7. 后端返回的 { responseType: 'blob' }数据，需要用react-file-download转化;
```
import FileDownload from 'react-file-download'
    this.props.actions.downloadPictures(this.props.selectedIds).then((res) => {
      // 不能加if(res.data.success)的判断，因为返回的数据是blob，找不到res.data.success
      FileDownload(res.data, 'images.zip')
      this.props.cancelSelected()
    })
```
下载文件时，很可能需要写responseType,否则可能打不开文件：
```
axios.put(this.url + '/zip', data, {
    responseType: 'blob',
    headers: { 'x-access-token': localStorage.token }
  })
```

8. Fetch请求可以直接在控制台调用
    ```
    let content = {some: 'content'}
    // Post request with fetch
    fetch('some-url', {
      method: 'post',
      headers: {'Content-Type': 'application/json'}
      body: JSON.stringify(content)
    }).then(status)
    .then(json)
    .then(function(data){
        console.log("请求成功，JSON解析后的响应数据为:",data);
    })
    .catch(function(err){
        console.log("Fetch错误:"+err);
    });
    ```

9. [Element.scrollIntoView() 方法让当前的元素滚动到浏览器窗口的可视区域内](https://www.jianshu.com/p/32bef36a68a0)

10. [next.js中的window is not defined](https://blog.csdn.net/qq_35087256/article/details/84963644):next.js文档中提供了一种动态导入模块的办法'next/dynamic'

11. url-loader和file-loader
   - url-loader依赖file-loader
   - 当使用url-loader加载图片，图片大小小于上限值，则将图片转base64字符串；否则使用file-loader加载图片，都是为了提高浏览器加载图片速度。
   - 使用url-loader加载图片比file-loader更优秀

12. [js实现窗口全屏示例](https://blog.csdn.net/u011500781/article/details/52896368):无URL、导航栏等

13. [如何实现图片缩放?](https://bbs.aliyun.com/read/541396.html):将图片按照要求生成缩略图，或者进行特定的缩放(阿里云)

14. 数字分割：[JavaScript之如何让数字千位分割](https://blog.csdn.net/spicyboiledfish/article/details/77776357) | [JS 数字，金额 用逗号 隔开](https://blog.csdn.net/evangel_z/article/details/12839657)

15. [arguments对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments):
>>>arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。例如，它没有 pop 方法。但是它可以被转换为一个真正的Array：
```
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

16. momentJS问题：
   - [东八区问题 moment().format() 有时间差](https://blog.csdn.net/ASZJBGD/article/details/85252658)
   - [解决Moment格式化时间出现时区差的问题](https://blog.csdn.net/littlebearGreat/article/details/80996346)

17. url出现了有+，空格，/，?，%，#，&，=等特殊符号的时候，可能在服务器端无法获得正确的参数值（当参数中含有”#”这些等对于URI而言有着特殊含义的符号时，发现“#”字符后面的信息全被裁掉了）:
   - 在拼接参数的时候，使用 encodeURIComponent() 进行手动转义：
      ```
      var url = "xxx?name=" + encodeURIComponent( "wz#aa" );
      ```
   - 用其他字符替换，如：
        ```
          var str = '少林寺3#101';
          var result = str.replace(/#/g, '%23');
        ```

18. antD Form组件中，Form.Item中有带htmlType='submit'属性的Button时，会导致在Form中回车提交表单，删除htmlType='submit'，然后给Button加一个提交的onClick事件即可；

19. JS中为什么['1','7','11'].map(parseInt)返回[1,NaN,3]?
   - map返回3个参数，item，index，Array，所以[1,7,11].map(console.log)打印：
      ```
      1 0 (3) [1, 7, 11]
      7 1 (3) [1, 7, 11]
      11 2 (3) [1, 7, 11]
      ```
   - parseInt接受两个参数：string，radix，其中radix默认为10；每次调用parseInt，相当于：parseInt(item,index,Array),map传递的第三个参数Array会被忽略,index为0时取默认值10；parseInt(7,1)中，7在1进制中不存在。
> 参考：[JS 中为啥 ['1', '7', '11'].map(parseInt) 返回 [1, NaN, 3]](https://mp.weixin.qq.com/s/h-hxPt1yN2shq-Dkq6S3dA)

20. [MessageChannel是什么，怎么使用？](https://www.jianshu.com/p/4f07ef18b5d7)：MessageChannel的postMessage传递的数据也是深拷贝的，这和web worker的postMessage一样，而且还可以拷贝undefined和循环引用的对象。
    ```
    function structuralClone(obj) {
      return new Promise(resolve => {
        const { port1, port2 } = new MessageChannel()
        port2.onmessage = ev => resolve(ev.data)
        port1.postMessage(obj)
      })
    }

    var obj = {
      a: 1,
      b: {
        c: 2
      }
    }

    obj.b.d = obj.b

    // 注意该方法是异步的
    // 可以处理 undefined 和循环引用对象
    const test = async () => {
      const clone = await structuralClone(obj)
      console.log(clone)
    }
    test()
    ```


## HTML

## CSS
1. [position: sticky粘性定位](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/):除了文章介绍的之外，左右布局，左sticky时，左边还要设置高度才可生效(如：100vh)   
```
    示例代码：
    .left-container {
      width: 200px;
      height: 100vh;
      position: sticky;
      top: 0px;
      bottom: 0;
      background-color: #ffffff;
      border-right: solid 1px rgb(233, 233, 233);
      overflow: auto;
    }
```

2. [【CSS深入理解之z-index】听课总结](https://www.cnblogs.com/benbendu/p/5811534.html)

3. [ant design Tooltip文字提示的样式设置](https://www.jianshu.com/p/27bb9a9d4f03)
   - 可以通过设置mouseLeaveDelay控制Tooltip在页面的时间，然后chrome就可以查看元素了；
   - 直接用  ant-tooltip-  在页面并无法修改它的样式；
   - 通过自定义的类名以及类名下的标签就可以修改其样式,如下所示:
   (先给Tooltip添加一个overlayClassName={styles['tooltip-custom']})
   ![ant design Tooltip文字提示的样式设置](./image/tooltip.png)   
   例： tooltip 黑色背景改成白色不透明
      ```
        .tooltip-custom {
          div {
            div {
              &:first-child {
                display: none;
              }
        
              &:last-child {
                padding: 0px;
                background-color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      ```

4. React行内calc的使用：style={{ width: 'calc(100% - 80px)' }}

## 其他
1. [Chrome浏览器百度云倍速播放](https://blog.csdn.net/u013044310/article/details/80444695)：
    ```
    videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.5)
    ```

2. [百度网盘直链下载助手](https://github.com/syhyz1990/baiduyun)(亲测有效)

3. [3个方法解决百度网盘限速 （2019-07-04 更新）](https://www.runningcheese.com/baiduyun)

4. 查看整个项目的代码行数
  - 打开终端，用cd命令定位到工程所在的目录，然后调用以下命名即可把每个源代码文件行数及总数统计出来(适用于前端项目，只要改文件后缀即可)：
    ```
    find . "(" -name "*.m" -or -name "*.mm" -or -name "*.cpp" -or -name "*.h" -or -name "*.rss" ")" -print | xargs wc -l
    ```
# 代码规范/规约
1. [EditorConfig](https://editorconfig.org/): 当多人团队进行一个项目开发时，每个人可能喜欢的编辑器不同，有人喜欢Webstrom、有人喜欢sublime、还有人喜欢Hbuilder。这个时候，问题便迎面而来，如何使使用不同编辑器的开发者能够轻松惬意的遵守最基本的代码规范呢？   
EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
2. [ESLint](https://cn.eslint.org/)+[Prettier](https://prettier.io/)

# 个人学习规划/学习视频书籍目录整理
## 通用课程(数据结构、算法、网络)
1. [快速上手Linux 玩转典型应用](https://coding.imooc.com/class/154.html)
2. [慕课Java就业班](https://class.imooc.com/newjava)
3. [专为程序员设计的线性代数课程](https://coding.imooc.com/class/260.html)
4. [学习算法思想 修炼编程内功](https://coding.imooc.com/class/71.html)
5. [玩转数据结构 从入门到进阶](https://coding.imooc.com/class/207.html)
6. [玩转算法面试 从真题到思维全面提升算法思维](https://coding.imooc.com/class/82.html)
7. [慕课算法讲师推荐：liuyubobobo](http://www.imooc.com/t/108955)
## 前端
1. Node.js:
   1. [Node.js入门到企业Web开发中的应用](https://coding.imooc.com/class/146.html)
   2. [前端晋升全栈工程师必备课程 Node.js 从零开发web server博客项目](https://coding.imooc.com/class/320.html)
2. 小程序：
   1. [微信小程序入门与实战](https://coding.imooc.com/class/chapter/75.html#Anchor)
3. Javascript:
   1. [Javascript 设计模式系统讲解与应用](https://coding.imooc.com/class/255.html)
   2. [基于TypeScript从零重构axios](https://coding.imooc.com/class/330.html)
4. HTML/CSS:
   1. [Web App用组件方式开发全站](https://coding.imooc.com/class/15.html)
   2. [全面系统讲解CSS 工作应用+面试一步搞定](https://coding.imooc.com/class/164.html)
   3. [所向披靡的响应式开发](https://coding.imooc.com/class/50.html)
   4. [前端JavaScript面试技巧](https://coding.imooc.com/class/115.html)(视情)
   5. [前端跳槽面试必备技巧](https://coding.imooc.com/class/129.html)(视情)
5. React/Vue/Angular:
   1. [React源码深度解析 高级前端工程师必备技能](https://coding.imooc.com/class/309.html)
   2. [Vue2.5开发去哪儿网App 从零基础入门到实战项目](https://coding.imooc.com/class/203.html)
6. Webpack:
   1. [从基础到实战	手把手带你掌握新版Webpack4.0](https://coding.imooc.com/class/316.html)
## 移动端
1. [新版React Native+Redux打造高质量上线App](https://coding.imooc.com/class/304.html)
2. [Flutter从入门到进阶 实战携程网App](https://coding.imooc.com/class/321.html)
3. [Socket网络编程进阶与实战](https://coding.imooc.com/class/286.html)
## 后端
1. [Google资深工程师深度讲解Go语言](https://coding.imooc.com/class/180.html)

## 文章
1. [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
2. [理解OAuth 2.0](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
3. [Service Worker](https://www.jianshu.com/p/62338c038c42)
4. [Nginx详解](https://www.cnblogs.com/ysocean/category/1289968.html)


# 个人web页面构想(非静态)
1. 登录授权隐私内容/非登录
2. 图片/游记展示
3. 文档/博客/学习笔记展示
4. 文档的增/删/改/查
5. 爱好展示
6. 访问量统计
7. 基于jekyll-now的个人博客解决方案
   - [jekyll-now](https://github.com/barryclark/jekyll-now)
   - [参考页面](https://github.com/mzlogin/mzlogin.github.io)
   - [主题选择](http://jekyllthemes.org/)