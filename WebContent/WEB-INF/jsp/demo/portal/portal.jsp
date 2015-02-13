<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Portal Page</title>
</head>
<body>

  <div id="portlet1">
    <%@ include file="/ngapp/views/demo/portal/portlet1.html" %>
  </div>

  <div id="portlet2">
    <%@ include file="/ngapp/views/demo/portal/portlet1.html" %>
  </div>

  <div>
    <%@ include file="/ngapp/views/demo/portal/portlet2.html" %>
  </div>

  <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/angular/angular.js"></script>
  <script data-main="${pageContext.request.contextPath}/ngapp/scripts/main.js" src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs/require.js"></script>
  <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs-domready-nodefine/domReady.js"></script>
  <script type="text/javascript">
  require(['apps/demo/portal/bootstrap']);
  </script>

</body>
</html>