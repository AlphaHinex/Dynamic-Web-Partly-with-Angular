dynamic-web-partly-with-angular-seed
====================================


概述
----

本项目为在普通的 `jsp` 动态 `web` 项目中，部分结合 `AngularJS` 及其相关类库进行开发的样板项目

不同于典型的单页面应用，每个开发（业务）模块可以作为一个小的单页面应用，且入口页面为 `jsp` 页面，通过 `jsp:include` 的方式将使用 `AngularJS` 开发的 `html` 页面并入其中

入口页面上，除了引入必须的几个 `js` 类库（`angular.js`、`require.js`、`domReady.js`）外，其余应用所需的 `js` 脚本采用 `require.js` 按模块开发及加载

[main.js](WebContent/ngapp/scripts/main.js) 为 `require.js` 总入口点，定义了 `web` 应用的 `contextPath` 和 `require.js` 加载 `js` 的根路径

`bootstrap.js` （不是 `twitter bootstrap` 框架）是每个模块的入口点，负责在入口页面加载完成后，bootstrap 页面元素和 angular module，并设定 `js` 的加载顺序

前端代码构建时，会将各模块开发的 `js` 连接并压缩为一个文件。整体打包时，会根据打包脚本中的配置，自动修改 [main.js](WebContent/ngapp/scripts/main.js) 中的 `contextPath`，可将构建出的 `war` 包直接发布到 `web` 容器内


准备工作
-------

* 使用 [node.js](http://nodejs.org/) 安装所需工具
* 使用 [bower](http://bower.io/) 管理前端依赖
* 使用 [grunt](http://gruntjs.com/) 执行前端的压缩及构建任务
* 使用 [gradle](http://gradle.org/) 构建及运行项目


安装依赖
--------

    $ npm install
    $ bower install
    $ grunt bower
    
`bower install` 指令将所需依赖下载至 `./bower_components` 路径下，`grunt bower` 将需要使用的 `js`、`css` 等文件拷贝至相应路径下

若不使用 `bower` 进行依赖管理则需要手动将需要的 `js` 类库拷贝至相应路径下，具体路径可参照 [Gruntfile.js](Gruntfile.js) 中 `bower` 任务部分，需要的 `js` 类库可参见 [bower.json](bower.json)


生成 eclipse 配置文件
-------------------

    $ gradle forEclipse

针对非 `gradle` 标准项目路径结构进行了如下设置：

1. web 应用路径设置为 `WebContent`
2. java 源码路径设置为 `src`
3. 编译的 class 文件输出路径设置为 `WebContent/WEB-INF/classes`
4. java 单元测试源码路径设置为 `test` 
5. web 应用依赖的 jar 包路径设置为 `WebContent/WEB-INF/lib`
6. `forEclipse` 任务包含生成 `Eclipse IDE` 使用的文件，并将 [build.gradle](build.gradle) 中设置的依赖拷贝至 `WebContent/WEB-INF/lib`


发布项目
-------

通过 gradle 的 tomcat 插件 [gradle-tomcat-plugin](https://github.com/bmuschko/gradle-tomcat-plugin) 可将项目发布至 tomcat 容器内，不进行 java 代码开发时，可不使用 eclise 中的 tomcat。

> 注：`gradle-tomcat-plugin` 需要 `2.1` 以上版本 `gradle`

在 [build.gradle](build.gradle) 中设置 tomcat 发布的端口为 `9090`，`contextPath` 为 `now`。通过下面命令启动 tomcat 后即可访问 [http://localhost:9090/now](http://localhost:9090/now)

> 注意：在 `require.js` 的入口文件 [main.js](WebContent/ngapp/scripts/main.js) 中硬编码了项目的 `contextPath`，如发布路径有变化需同步修改此处内容

    $ gradle tomcatRun


前端代码构建
-----------

前端代码，指 `AngularJS` 开发的内容，可用如下方式执行构建任务：

    $ grunt build:static

或

    $ gradle buildStatic

`gradle buildStatic` 是对 `grunt build:static` 的简单调用，使用时需要在 [build.gradle](build.gradle) 中选择适当的版本（当前为 `windows` 版）


项目整体打包
-----------

    $ gradle getWar

`getWar` 任务中包含了前端代码的构建任务，之后会根据 [build.gradle](build.gradle) 中设置的 `archivesBaseName` 修改编译后的 `RequireJS` 入口文件 `main.js`，并将其打入 `war` 包中。

即，使用此方式打 `war` 包无需再手动修改 `war` 包中内容（以 `war` 包名称作为 `contextPath`），可直接发布至 `web` 容器内


监控 `js` 代码质量
-----------------

1. 使用 `grunt` 任务自动监控 `js` 文件变化并给出代码改进意见

        $ grunt watch
        Running "watch" task
        Waiting...

2. 每次修改 `js` 文件并保存后，命令行窗口会显示类似如下提示信息

        >> File "WebContent\ngapp\scripts\modules\demo\portlet.js" changed.
        Running "newer:jshint:all" (newer) task
        
        Running "jshint:all" (jshint) task
        
        WebContent\ngapp\scripts\modules\demo\portlet.js
          line 3  col 30  Missing semicolon.
        
        1 problem
        
        Warning: Task "jshint:all" failed. Use --force to continue.
        
        Aborted due to warnings.
        
        
        Execution Time (2015-01-23 06:07:35 UTC)
        loading tasks       7ms  ■ 2%
        newer:jshint:all  210ms  ■■■■■■■■■■■■■■■■■■■■■ 48%
        jshint:all        222ms  ■■■■■■■■■■■■■■■■■■■■■■■ 50%
        Total 441ms
        
        Completed in 2.036s at Fri Jan 23 2015 14:07:35 GMT+0800 (中国标准时间) - Waiting...

4. 按照提示修改代码后会得到类似如下提示

        >> File "WebContent\ngapp\scripts\modules\demo\portlet.js" changed.
        Running "newer:jshint:all" (newer) task
        
        Running "jshint:all" (jshint) task
        
        No problems
        
        
        Running "newer-postrun:jshint:all:1:d:\workspace\dynamic-web-partly-with-angular-seed\node_modules\grunt-newer\.cache" (newer-postrun) task
        
        Done, without errors.
        
        
        Execution Time (2015-01-23 06:11:10 UTC)
        loading tasks                     7ms  ■ 3%
        newer:jshint:all                192ms  ■■■■■■■■■■■■■■■■■■■■■■■ 75%
        jshint:all                       47ms  ■■■■■■ 18%
        newer-postrun:...-newer\.cache    7ms  ■ 3%
        Total 255ms
        
        Completed in 1.758s at Fri Jan 23 2015 14:11:11 GMT+0800 (中国标准时间) - Waiting...


目录结构规范
-----------

    │  .bowerrc
    │  .gitignore
    │  .jshintrc
    │  bower.json
    │  build.gradle
    │  Gruntfile.js
    │  package.json
    │  README.md
    │  
    ├─doc
    ├─src
    ├─test
    └─WebContent
        │  index.jsp
        │  
        ├─ngapp                         // AngularJS 开发根路径
        │  ├─images                     // 图片根路径
        │  ├─scripts                    // 脚本根路径
        │  │  │  main.js                // RequireJS 入口文件
        │  │  │  
        │  │  ├─apps                    // 各业务模块脚本根路径
        │  │  │  └─demo
        │  │  │      ├─main             // 如 demo/main 业务模块
        │  │  │      │  │  bootstrap.js // 具体模块根路径下必须存在该文件
        │  │  │      │  │  
        │  │  │      │  ├─controllers   // controller 层根路径
        │  │  │      │  │  │  mainCtrl.js
        │  │  │      │  │  │  
        │  │  │      │  │  └─announcement
        │  │  │      │  │          picCtrl.js
        │  │  │      │  │          thumbnailCtrl.js
        │  │  │      │  │        
        │  │  │      │  ├─directives    // 指令层根路径
        │  │  │      │  │          
        │  │  │      │  ├─modules       // modules 根路径
        │  │  │      │  │      mainModule.js
        │  │  │      │  │      
        │  │  │      │  └─services      // service 层根路径
        │  │  │      │          picPlaceholderService.js
        │  │  │      │          
        │  │  │      └─portal           // 业务模块下脚本较少时可将所有脚本放在同一目录下
        │  │  │              bootstrap.js
        │  │  │              portletCtrl.js
        │  │  │              portletModule.js
        │  │  │              
        │  │  └─vendor                  // 三方依赖类库根路径
        │  │      └─requirejs-domready-nodefine
        │  │              domReady.js
        │  │                           
        │  ├─styles                     // 样式表根路径
        │  │      bootstrap.css
        │  │      
        │  └─views                      // view 层根路径
        │      └─demo
        │          ├─main
        │          │  └─announcement
        │          │          pic.html
        │          │          thumbnail.html
        │          │          
        │          └─portal
        │                  portlet1.html
        │                  portlet2.html
        │              
        └─WEB-INF
            │  web.xml
            │
            ├─classes
            │  
            ├─conf
            │      spring-mvc-context.xml
            │  
            ├─jsp
            │   └─demo
            │      └─portal
            │               main.jsp
            │               portal.jsp
            └─lib

* `WebContent/ngapp` 为 `AngularJS` 开发根路径
* `WebContent/ngapp/scripts/main.js` 为 `RequireJS` 入口文件，其中的 `contextPath` 在发布时需根据实际情况进行修改
* `WebContent/ngapp/scripts/apps` 为各业务模块脚本根路径，可在此路径下创建具体业务模块路径，如 `./demo/main` 和 `./demo/portal`
* 每个具体业务模块根路径下必须存在 `bootstrap.js` 文件，作为驱动页面上 `AngularJS` 脚本及 `RequireJS` 依赖的入口
* `js` 脚本文件按驼峰方式命名，首字母小写
* 具体业务模块下 `js` 文件按照 `MVC` 结构划分路径，如 `./controllers` 路径下存放 `controller` 脚本（参考 `demo/main` 业务模块）；若业务模块下脚本较少，也可将 `js` 文件均放置在同一目录下（如 `demo/portal` 业务模块）
* `controller` 脚本以 `Ctrl.js` 结尾
* `service` 脚本以 `Service.js` 结尾
* `directive` 脚本以 `Directive.js` 结尾
* `module` 脚本以 `Module.js` 结尾
* `module` 命名规则按照 `ngapp/scripts/apps` 路径下的包名命名，中间以 `-` 间隔，如 [ngapp/scripts/apps/demo/portal/portletModule.js](WebContent/ngapp/scripts/apps/demo/portal/portletModule.js) 中定义的 `module` 名为 `demo-portal-portlet`
