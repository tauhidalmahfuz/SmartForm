// Your jQuery goes here
var userData={};
/*if(localStorage.getItem('userData')){
  userData=JSON.parse(localStorage.getItem('userData'));
  $('.question').hide();
  $('#'+userData.currentQuestion).show();
  $("#name").val(userData.name);
  $("#email").val(userData.email);
  $("#nextbtn").prop("disabled",false);
}
else {*/
  userData = {
  name:"",
  email:"",
  html:{likes:[], dislikes:[]},
  css: {likes:[], dislikes:[]},
  js:{likes:[], dislikes:[]},
  strengths:{html:"",css:"",js:""},
  currentQuestion:"",
  pos:[]
  };
//  localStorage.setItem('userData',JSON.stringify(userData));
//}
$("#startbtn").click(function(event){
  $("#welcome").hide();
  $("#q1").show();
});

$("#name").change(function(event){
});
$("#email").change(function(event){
});

$("#nextbtn").click(function(event){

  if(!$("#name").val())
  {
    alert("Name Is Empty");
    //$("#nextbtn").prop("disabled",true);
    return false;
  }
  var emailval = $("#email").val();
  function validateEmail(emailval) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(emailval);
  }

  if(!validateEmail(emailval)){
      alert("Please enter valid email");
      return false;
  }

  $("#q1").hide();
  $("#q2").show();

  userData.name=$("#name").val();
  userData.email = $("#email").val();
  /*userData.currentQuestion = "q1";
  localStorage.setItem('userData',JSON.stringify(userData));*/

});

/////////////////////// RUle one its a bit buggy ////////////
/*var x,y,z;

$("#htmlbtn").click(function(event){
  $("#q2").hide();
  $("#q2a").show();
  $("#htmlbtn").prop("disabled",true);
  x=1;
});

$("#cssbtn").click(function(event){
  $("#q2").hide();
  $("#q2b").show();
  $("#cssbtn").prop("disabled",true);
  y=1;
});

$("#jsbtn").click(function(event){
  $("#q2").hide();
  $("#q2c").show();
  $("#jsbtn").prop("disabled",true);
  z=1;
});

$("#htmlnxtbtn").click(function(event){
  if(y==1 && z==1){
    $("#q2a").hide();
    $("#q3").show();
  }
  else {
    $("#q2a").hide();
    $("#q2").show();
  }
});

$("#cssnxtbtn").click(function(event){
  if(x==1 && z==1){
    $("#q2b").hide();
    $("#q3").show();
  }
  else {
    $("#q2b").hide();
    $("#q2").show();
  }
});

$("#jsnxtbtn").click(function(event){
  if(x==1 && y==1){
    $("#q2c").hide();
    $("#q3").show();
  }
  else {
    $("#q2c").hide();
    $("#q2").show();
    }
});*/

////////////////////////////////rule 2////////////////////////////

$("#htmlbtn").click(function(event){
  $("#q2").hide();
  $("#q2a").show();
  $("#htmlbtn").prop("disabled",true);
});

$("#cssbtn").click(function(event){
  $("#q2").hide();
  $("#q2b").show();
  $("#cssbtn").prop("disabled",true);
});

$("#jsbtn").click(function(event){
  $("#q2").hide();
  $("#q2c").show();
  $("#jsbtn").prop("disabled",true);
});


//var checkboxarray=[];
$("#htmlnxtbtn").click(function(event){
  if($("#cssbtn").prop("disabled") && $("#jsbtn").prop("disabled")){
    /*$('#htmlLikeCHeckbox :checked').each(function() {
      userData.html.likes.push($(this).val());
    });
    $(".htmlLckeckbox:checked").each(function(){
      checkboxarray.push($(this).val());
    });
    for(var i=0;i<4;i++)
    {
      console.log(checkboxarray[i]);
    }*/

    $("#q2a").hide();
    $("#q3").show();
  }
  else {
    /* $('#htmlLikeCHeckbox :checked').each(function() {
      userData.html.likes.push($(this).val());
    });
   $(".htmlLckeckbox:checked").each(function(){
      checkboxarray.push($(this).val());
    });
    for(var i=0;i<4;i++)
    {
      console.log(checkboxarray[i]);
    }*/
    $("#q2a input[name='likesHTML']").click(function(event){
			if (this.checked) {
        userData.pos[0] = true;
        console.log($("input[name='likesHTML']").index(this));
        userData.html.likes.push($("input[name='likesHTML']").index(this));
				//userData.currentQuestion = "q2a";
        //localStorage.setItem('userData', JSON.stringify(userData));
				//console.log(JSON.stringify(userData));
			}
});

    $("#q2a").hide();
    $("#q2").show();
  }
});

$("#cssnxtbtn").click(function(event){
  if($("#htmlbtn").prop("disabled") && $("#jsbtn").prop("disabled")){
    $("#q2b").hide();
    $("#q3").show();
  }
  else {
    $("#q2b").hide();
    $("#q2").show();
  }
});

$("#jsnxtbtn").click(function(event){
  if($("#cssbtn").prop("disabled") && $("#htmlbtn").prop("disabled")){
    $("#q2c").hide();
    $("#q3").show();
  }
  else {
    $("#q2c").hide();
    $("#q2").show();
    }
});

$("#successPrebtn").click(function(event){
  $("#q3").hide();
  $("#q2").show();
  $("#htmlbtn").prop("disabled",false);
  $("#cssbtn").prop("disabled",false);
  $("#jsbtn").prop("disabled",false);
});

$("#successNxtbtn").click(function(event){
  $("#q3").hide();
  $("#thanks").show();
});

$("#Showanswer").click(function(event){
  $("#thanks").hide();
  $("#answer").show();
  document.write("Name: "+ userData.name);
  document.write("Email: "+ userData.email);

  $("#q2a input[name='likesHTML']").each(function() {
    if(this.checked){
     str = this.value;
    console.log(str);
   }
  });




});

$(".previousbtn").click(function(event){
  $("#q2").show();
  $(this).parent().parent().parent().hide();
});
