dynamic-web-partly-with-angular-seed
====================================


概述
----


准备工作
-------

* 【可选】可通过 [gradle](http://gradle.org/) 构建及运行项目
* 【可选】可通过 [node.js](http://nodejs.org/) 
* 【可选】可通过 [bower](http://bower.io/) 管理前端依赖
* 【可选】可通过 [grunt](http://gruntjs.com/) 监控 `js` 代码质量
* 通过 [grunt](http://gruntjs.com/) 执行前端的压缩及构建任务


安装依赖
--------

    $ bower install

若不使用 `bower` 进行依赖管理则需要手动将需要的 `js` 类库拷贝至 `ngapp/scripts/vendor` 路径下，需要的 `js` 类库可参见 [bower.json](bower.json)


生成 eclipse 配置文件
-------------------

    $ gradle cleanEclipse eclipse

针对非 `gradle` 标准项目路径结构进行了如下设置：

1. web 应用路径设置为 `WebContent`
2. java 源码路径设置为 `src`
3. 编译的 class 文件输出路径设置为 `WebContent/WEB-INF/classes`
4. java 单元测试源码路径设置为 `test` 
5. web 应用依赖的 jar 包路径设置为 `WebContent/WEB-INF/lib`


发布项目
-------

通过 gradle 的 tomcat 插件 [gradle-tomcat-plugin](https://github.com/bmuschko/gradle-tomcat-plugin) 可将项目发布至 tomcat 容器内，不进行 java 代码开发时，可不使用 eclise 中的 tomcat。

在 [build.gradle](build.gradle) 中设置 tomcat 发布的端口为 `9090`，`contextPath` 为 `now`。通过下面命令启动 tomcat 后即可访问 [http://localhost:9090/now](http://localhost:9090/now)
> 注意：在 `require.js` 的入口文件 [main.js](WebContent/ngapp/scripts/main.js) 中硬编码了项目的 `contextPath`，如发布路径有变化需同步修改此处内容

    $ gradle tomcatRun


监控 `js` 代码质量
-----------------

### 用法

1. 在命令行窗口使用 `npm` 安装所需工具

        $ npm install

2. 使用 `grunt` 任务自动监控 `js` 文件变化并给出代码改进意见

        $ grunt watch
        Running "watch" task
        Waiting...

3. 每次修改 `js` 文件并保存后，命令行窗口会显示类似如下提示信息

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
        ├─ngapp
        │  ├─images
        │  ├─scripts
        │  │  ├─controllers
        │  │  │  └─demo
        │  │  │          portletCtrl.js
        │  │  │          
        │  │  ├─directives
        │  │  ├─modules
        │  │  │  └─demo
        │  │  │          portlet.js
        │  │  │          
        │  │  ├─services
        │  │  └─vendor
        │  │                  
        │  ├─styles
        │  └─views
        │      └─demo
        │              portlet1.html
        │              portlet2.html
        │              
        └─WEB-INF
            │  web.xml
            │  
            ├─classes
            └─lib

