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


3. [idx使用](https://github.com/facebookincubator/idx):现在多使用'?.'写法(?.是一个整体，相当于一个运算符)，可以不使用idx[@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)   
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
[idx源码](https://github.com/facebookincubator/idx/blob/master/packages/idx/src/idx.js)   
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

# 技巧技法
## JS

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

# 代码规范/规约
1. [EditorConfig](https://editorconfig.org/): 当多人团队进行一个项目开发时，每个人可能喜欢的编辑器不同，有人喜欢Webstrom、有人喜欢sublime、还有人喜欢Hbuilder。这个时候，问题便迎面而来，如何使使用不同编辑器的开发者能够轻松惬意的遵守最基本的代码规范呢？   
EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
2. [ESLint](https://cn.eslint.org/)+[Prettier](https://prettier.io/):