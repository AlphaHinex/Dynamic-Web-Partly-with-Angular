<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Grid Demo</title>
  <link rel="stylesheet" href="${pageContext.request.contextPath}/ngapp/styles/vendor/angular-ui-grid/ui-grid.css" />
</head>
<body>

  <div id="gridDiv" class="container-fluid">
    <div id="basicGrid" class="row">
      <%@ include file="/ngapp/views/demo/form/grid.html" %>
    </div>
  </div>

  <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/angular/angular.js"></script>
  <script data-main="${pageContext.request.contextPath}/ngapp/scripts/main.js" src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs/require.js"></script>
  <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs-domready-nodefine/domReady.js"></script>
  <script type="text/javascript">
  require(['apps/demo/form/grid/bootstrap']);
  </script>

</body>
</html>