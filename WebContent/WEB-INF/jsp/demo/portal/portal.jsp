<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

    <div id="portlet1">
        <jsp:include page="/ngapp/views/demo/portlet1.html"></jsp:include>
    </div>

    <div id="portlet2">
        <jsp:include page="/ngapp/views/demo/portlet1.html"></jsp:include>
    </div>

    <div>
        <jsp:include page="/ngapp/views/demo/portlet2.html"></jsp:include>
    </div>

    <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/angular/angular.js"></script>
    <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs/require.js"></script>
    <script src="${pageContext.request.contextPath}/ngapp/scripts/vendor/requirejs-domready-nodefine/domReady.js"></script>
    <script type="text/javascript">
    require(['${pageContext.request.contextPath}/ngapp/scripts/main.js'], function() {
        require(['modules/demo/bootstrap']);
    });
    </script>

</body>
</html>