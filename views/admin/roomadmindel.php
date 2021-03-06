<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>房间管理</title>
 <link rel="stylesheet" href="../../assets/css/bootstrap.min.css" type="text/css">
</head>
<style>
.error {color: #FF0000;}
</style>

<body body data-spy="scroll" data-target="#myScrollspy">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" style="font-family:Microsoft YaHei" href="admin.php">影子宾馆管理员端</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->

        
         <?php require 'common.php' ?>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</div>


<div class="container" style="font-family:Microsoft YaHei;">
      <div class="table-responsive" style="padding: 50px 0px;">
        <table class="table">
          <caption><h2 align="center">房间信息</h2></caption>
          <thead>
            <tr>
              <th>房间号</th>
              <th>房间名字</th>
              <th>房间类型</th>
              <th>房间楼层</th>
              <th>房间电话</th>
              <th>修改</th>
              <th>删除</th>
            </tr>
          </thead>
                <tbody id = "J_TbData">
            
                </tbody>
        </table>
      </div>

</div>



<script type="text/javascript" src="../../assets/js/jquery.min.js"></script>
  <script type="text/javascript" src="../../assets/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="../../assets/js/roomadmindel2.js"></script>
</body>
</html>
