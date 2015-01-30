dynamic-web-partly-with-angular-seed
====================================


概述
----


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

若不使用 `bower` 进行依赖管理则需要手动将需要的 `js` 类库拷贝至 `ngapp/scripts/vendor` 路径下，需要的 `js` 类库可参见 [bower.json](bower.json)


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

在 [build.gradle](build.gradle) 中设置 tomcat 发布的端口为 `9090`，`contextPath` 为 `now`。通过下面命令启动 tomcat 后即可访问 [http://localhost:9090/now](http://localhost:9090/now)

> 注意：在 `require.js` 的入口文件 [main.js](WebContent/ngapp/scripts/main.js) 中硬编码了项目的 `contextPath`，如发布路径有变化需同步修改此处内容

    $ gradle tomcatRun


前端代码构建
-----------

    $ grunt build:static


项目整体打包
-----------

    $ gradle getWar

`getWar` 任务中包含了前端代码（即使用 `AngularJS` 开发的内容）的构建任务。若要单独执行前端构建，可使用：

    $ grunt build:static


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
