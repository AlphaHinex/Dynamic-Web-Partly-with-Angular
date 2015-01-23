cms-angular-web-seed
====================


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


js 代码质量监控辅助工具
-----------------------

### 准备工作

* 需要 [node.js](http://nodejs.org/) 环境

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
        
        
        Running "newer-postrun:jshint:all:1:d:\workspace\cms-angular-web-seed\node_modules\grunt-newer\.cache" (newer-postrun) task
        
        Done, without errors.
        
        
        Execution Time (2015-01-23 06:11:10 UTC)
        loading tasks                     7ms  ■ 3%
        newer:jshint:all                192ms  ■■■■■■■■■■■■■■■■■■■■■■■ 75%
        jshint:all                       47ms  ■■■■■■ 18%
        newer-postrun:...-newer\.cache    7ms  ■ 3%
        Total 255ms
        
        Completed in 1.758s at Fri Jan 23 2015 14:11:11 GMT+0800 (中国标准时间) - Waiting...
