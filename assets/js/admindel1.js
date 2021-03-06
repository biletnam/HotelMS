$(function(){
	
	$.ajax({
		type: 'post',
		url: '../../controlers/adminAction/adminList.php',
		cache: false,
		dateType:'json',
		success: function(data) {
			var html = "";
            var data = $.parseJSON(data);
  
            for( var i = 0; i < data.length; i++ ) 
            {


                    var target_reset="#"+data[i].user_id+"_reset";
                    var id_reset=data[i].user_id+"_reset";

                    var target_del="#"+data[i].user_id+"_del";
                    var id_del=data[i].user_id+"_del";

                    var register_time_id="register_time_"+data[i].user_id;
                    var password_id="password_"+data[i].user_id;
                    var account_id="account_"+data[i].user_id;
                    var truename_id="truename_"+data[i].user_id;
                    var point_id="point_"+data[i].user_id;
                    var member_type_id_id="member_type_id_"+data[i].user_id;
                     html += "<tr>";
                     html +=     "<td>" + data[i].register_time + "</td>";
                     html +=     "<td>" + data[i].user_account + "</td>";
                     html +=     "<td>" + data[i].user_password + "</td>";
                     html +=     "<td>" + data[i].truename + "</td>";
                     html +=     "<td>" + data[i].total_point + "</td>";
                     // html +=     "<td>" + data[i].member_type_id + "</td>";
               
                     html +=     "<td>";
                     html +=     "<button class='btn btn-small btn-success comment' data-toggle='modal' data-target='" +target_reset+ "'>修改</button>";
                     html +=        "<div class='modal fade' id='" +id_reset+ "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>";
                     html +=            "<div class='modal-dialog'>";
                     html +=                "<div class='modal-content'>";
                     html +=                     "<form role='form' action='' method='POST' name='"+data[i].user_id+"'>";//通过表单，POST evaluate,提交评论
                     html +=                        "<div class='modal-body'>";
                     html +=                            "<div class='form-group'>"; //textarea显示评论，用户可查看自己之前的评论或者更新评论
                    html +=                                "<label for='name'>密码</label>";
                     html +=                                " <input type='text' class='form-control' id='"+password_id+"' size='5' value='"+data[i].user_password+"'>";
                     html +=                                "<label for='name'>真名</label>";
                     html +=                                " <input type='text' class='form-control' id='"+truename_id+"' size='5' value='"+data[i].truename+"'>";
                     html +=                                "<label for='name'>积分</label>";
                     html +=                                " <input type='text' class='form-control' id='"+point_id+"' size='5' value='"+data[i].total_point+"'>";
                     // html +=                                "<label for='name'>用户类型</label>";
                     // html +=                                " <input type='text' class='form-control' id='"+member_type_id_id+"' size='5' value='"+data[i].member_type_id+"'>";
                     html +=                            "</div>";
                     html +=                        "</div>";
                     html +=                        "<div class='modal-footer'>";
                     html +=                            "<button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>";
                     html +=                            "<button type='button' class='btn btn-default update' data-dismiss='modal' id='"+data[i].user_id+"'>提交</button>";
                     html +=                        "</div>";
                     html +=                    "</form>";
                     html +=                "</div>";
                     html +=            "</div>"
                     html +=        "</div>";
                     html +=     "</td>";

                     html +=     "<td>";
                     html +=     "<button class='btn btn-small btn-primary' data-toggle='modal' data-target='" +target_del+ "'>删除</button>";
                     html +=        "<div class='modal fade' id='" +id_del+ "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>";
                     html +=            "<div class='modal-dialog'>";
                     html +=                "<div class='modal-content'>";
                     html +=                    "<form role='form' action='' method='POST' name='"+data[i].user_id+"'>";//通过表单,POST bill_id到后端文件,删除订单
                     html +=                        "<div class='modal-body'>";
                     html +=                            "<div class='form-group'>"; 
                     html +=                                "<label for='name'>删除</label>";
                     html +=                                "<p >确定删除该管理员吗?</p>";
                     html +=                            "</div>";
                     html +=                        "</div>";
                     html +=                        "<div class='modal-footer'>";
                     html +=                            "<button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>";
                     html +=                            "<button type='submit' class='btn btn-default confirmDelete' data-dismiss='modal' id='"+data[i].user_id+"'>删除</button>";
                     html +=                        "</div>";
                     html +=                    "</form>";
                     html +=                "</div>";
                     html +=            "</div>"
                     html +=        "</div>";
                     html +=     "</td>";
           
                     
                      html += "</tr>";
              }
              $("#J_TbData").html(html);
		},
		error: function(error) {
			// console.log(error);
		}
	});

$(document).on('click', 'button.update', function(){
    
                var getId = $(this).attr("id"); 
                

                var password_id="#password_"+getId;
                var password=$(password_id).val();



                var truename_id="#truename_"+getId;
                var truename=$(truename_id).val();

                var point_id="#point_"+getId;
                var point=$(point_id).val();

                var member_type_id_id="#member_type_id_"+getId;
                var member_type_id=$(member_type_id_id).val();
                
                
                
                $.ajax({
                    type: 'post',
                    url: '../../controlers/adminAction/resetAdminAction.php',
                    cache: false,
                    data: {
                         getId:getId,
                        password:password,
                        truename:truename,
                        point:point,
                        member_type_id:member_type_id
                    
                    },
                    dateType:'json',
                    success: function(data){

                  window.location.href="../../views/admin/admindel.php";
                    },
                    error:function(){

                    }
                });
});
            
            $(document).on('click', 'button.confirmDelete', function(){
    
             var getId = $(this).attr("id"); 
                
                $.post('../../controlers/adminAction/deleteAdminAction.php',
                    {
                        getId:getId
                    },
                    function()
                    {


                        window.location.href="../../views/admin/admindel.php";
                    }
                );
                 });

                
            
            
});