# yarn介绍
- yarn是新一代包管理工具
   - Facebook联合其他公司开发，觉得npm有缺陷
- 为什么使用yarn：
   - 速度快
   - 安装版本统一，更安全（lock文件）
   - 更简洁的输出
   - 更好的语义化
   - 没有颠覆npm，只是修复了缺陷
- 如何使用yarn
   - yarn init 初始化项目
   - yarn add 安装包
   - yarn remove 删除包
   - yarn/yarn install 安装项目依赖

node_modules:项目的安装依赖

AntD：基于less开发（test:less,less-loder）
计算属性calc：less中可以用@定义变量
less中可以嵌套书写，css不可以
less中可以通过@import导入文件（变量、less）

vh：屏幕100等份，1份1vh，相当于1%，如定义高度height：calc（100vh）
栅格布局（Row，Col）

暴露配置：yarn eject，改webpack.config文件,use数组从后向前运行

React左右布局，点击左边，如何使内容出现在右侧：
   - 点击左侧，触发方法，改变右侧组件渲染
   - 路由匹配（this.props.children）

三角形：
```
   .three{
      width: 0;
      height: 0;
      border-width: 40px;
      border-style: solid;
      border-color: red transparent transparent transparent;
      <!-- border-color: red yellow green black; -->
   }
```

多级（不定级）菜单渲染：递归SubMenu => Menu.Item

React Router 4.0：
1. react-router-dom：web端安装
2. 4.0版 已不需要路由配置，一切皆组件
3. HashRouter（根路由）和BrowserRouter（/，/更多是接口请求）
4. Route:增加Render方法
5. Link（导航）、NavLink
6. Switch，只匹配第一个匹配的路由
7. Redirect：路由重定向
8. 混合组件化；允许一次匹配多个（加exact避免，或用Switch匹配第一个）
9. 动态路由参数获取：this.props.match.params.value
10. 不匹配任何组件：Route不配置path，只写一个component
11. 子路由：不通过component，而是通过render方法return组件，内部配置子路由，父路由不能使用精准匹配


不写bind（this），内部不能使用类似this.setState等带this的；

AntD UI组件：
1. 面向后台管理系统；
2. import {Button} from 'antd';
3. Button图形按钮：type，shape，icon；
4. Loading按钮：动态控制loading = {true/false}；
5. overflow：auto（超出部分自动滚动，而非全屏滚动，在左右布局左侧固定，右侧内容较多时可以使用）；
6. 绑定方法时，不传参，不需要箭头函数；传参，必须通过箭头函数或者bind实现，如果直接this.method(arg)会自动执行，应该写成（）=>this.method(arg)；
7. 通过传不同的参数type控制多个弹窗的显示隐藏小技巧：   
   - this.setState（{[type]:true}），此时[type]就相当于是一个变量，避免了写if语句判断给哪个值设置true；
   - Modal.confirm,Modal['confirm'],Modal.success,Modal.info等,可用Modal[type]来代替，只需传入不同的type
   - this[action](targetKey):传递参数targetKey，根据action调用相应方法
8. const，内存地址不能更改；
9. tab可编辑（添加删除）：
   - 删除的不是当前选中（激活）的tab
   - 删除的是当前激活的tab
10. map（）方法会返回新的数组，不会改变原数组
11. public下的文件会部署的服务器的根目录，所以用‘/’访问
12. 图片画廊：card，card.meta,row（gutter），col，modal实现（单行，多列，每列多个，每个图片尺寸不同，点击查看大图）
13. this.props.form、getFieldDecorator需结合Form.create进行表单验证；可以用一个值为icon的prefix（前缀）使得输入框内部前部显示图标等；
14. easy-mock：数据在线模拟
