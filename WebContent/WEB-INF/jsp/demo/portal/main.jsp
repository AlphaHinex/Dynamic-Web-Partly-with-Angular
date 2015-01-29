<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Home Page</title>
  <link rel="stylesheet" href="${pageContext.request.contextPath}/ngapp/styles/bootstrap.css" />
</head>
<body>

  <div id="mainDiv" class="container-fluid">
    <div id="announcement" class="row">
      <div class="header">
        <h4 class="text-muted">Announcements</h4>
      </div>

      <div class="col-md-4">
        <jsp:include page="/ngapp/views/demo/main/announcement/pic.html"></jsp:include>
      </div>
      <div class="col-md-6">
        <jsp:include page="/ngapp/views/demo/main/announcement/thumbnail.html"></jsp:include>
      </div>
    </div>
  </div>

  <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/angular/angular.js"></script>
  <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/angular-bootstrap/ui-bootstrap-tpls.js"></script>
  <script data-main="${pageContext.request.contextPath}/ngapp/scripts/main.js" src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs/require.js"></script>
  <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs-domready-nodefine/domReady.js"></script>
  <script type="text/javascript">
  require(['apps/demo/main/bootstrap']);
  </script>

</body>
</html>