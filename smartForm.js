// Your jQuery goes here
var userData={};
if(localStorage.getItem('userData')){
  userData=JSON.parse(localStorage.getItem('userData'));
  $('.question').hide();
  $('#'+userData.currentQuestion).show();
}
else {
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
  localStorage.setItem('userData',JSON.stringify(userData));
}
$("#startbtn").click(function(event){
  $("#welcome").hide();
  $("#q1").show();
  userData.currentQuestion = "q1";
  localStorage.setItem('userData',JSON.stringify(userData));
});

$("#name").change(function(event){
});
$("#email").change(function(event){
});

$("#nextbtn").click(function(event){

  if(!$("#name").val())
  {
    alert("Name Is Empty");
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
  userData.currentQuestion = "q2";
  localStorage.setItem('userData',JSON.stringify(userData));

});

$("#htmlbtn").click(function(event){
  $("#q2").hide();
  $("#q2a").show();
  $("#htmlbtn").prop("disabled",true);
  userData.currentQuestion = "q2a";
  localStorage.setItem('userData',JSON.stringify(userData));

});

$("#cssbtn").click(function(event){
  $("#q2").hide();
  $("#q2b").show();
  $("#cssbtn").prop("disabled",true);
  userData.currentQuestion = "q2b";
  localStorage.setItem('userData',JSON.stringify(userData));

});

$("#jsbtn").click(function(event){
  $("#q2").hide();
  $("#q2c").show();
  $("#jsbtn").prop("disabled",true);
  userData.currentQuestion = "q2c";
  localStorage.setItem('userData',JSON.stringify(userData));

});

//////////////////////////////////////html likes and dislikes/////////////////////////////
$(".checkbox").click(function(event){
  userData.html.likes=[];
  $.each($("input[name='likesHTML']:checked"), function(){
      userData.html.likes.push(this.id);
  });
  $.each($("input[name='DislikesHTML']:checked"), function(){
      userData.html.dislikes.push(this.id);
  });
  userData.currentQuestion = "q2a";
	localStorage.setItem('userData',JSON.stringify(userData));
	userData=JSON.parse(localStorage.getItem('userData'));
});

$("#htmlnxtbtn").click(function(event){
  if($("#cssbtn").prop("disabled") && $("#jsbtn").prop("disabled")){
    $("#q2a").hide();
    $("#q3").show();
    userData.currentQuestion = "q3";
    localStorage.setItem('userData',JSON.stringify(userData));

  }
  else {
    $("#q2a").hide();
    $("#q2").show();
    userData.currentQuestion = "q2";
    localStorage.setItem('userData',JSON.stringify(userData));
    userData=JSON.parse(localStorage.getItem('userData'));
  }
});

///////////////////////////////CSS LIkes and Dislikes//////////////////////////
$(".checkbox").click(function(event){
  $.each($("input[name='likesCSS']:checked"), function(){
      userData.css.likes.push(this.id);
  });
  $.each($("input[name='DislikesCSS']:checked"), function(){
      userData.css.dislikes.push(this.id);
  });
  userData.currentQuestion = "q2b";
  localStorage.setItem('userData',JSON.stringify(userData));
  userData=JSON.parse(localStorage.getItem('userData'));
});

$("#cssnxtbtn").click(function(event){
  if($("#htmlbtn").prop("disabled") && $("#jsbtn").prop("disabled")){
    $("#q2b").hide();
    $("#q3").show();
    userData.currentQuestion = "q3";
    localStorage.setItem('userData',JSON.stringify(userData));

  }
  else {
    $("#q2b").hide();
    $("#q2").show();
    userData.currentQuestion = "q2";
    localStorage.setItem('userData',JSON.stringify(userData));
    userData=JSON.parse(localStorage.getItem('userData'));
  }
});

//////////////////////////////////////////////////JS likes and dislikes///////////////////////////
$(".checkbox").click(function(event){
  $.each($("input[name='likesJS']:checked"), function(){
      userData.js.likes.push(this.id);
  });
  $.each($("input[name='DislikesJS']:checked"), function(){
      userData.js.dislikes.push(this.id);
  });
  userData.currentQuestion = "q2c";
	localStorage.setItem('userData',JSON.stringify(userData));
	userData=JSON.parse(localStorage.getItem('userData'));
});

$("#jsnxtbtn").click(function(event){
  if($("#cssbtn").prop("disabled") && $("#htmlbtn").prop("disabled")){

    $("#q2c").hide();
    $("#q3").show();
    userData.currentQuestion = "q3";
    localStorage.setItem('userData',JSON.stringify(userData));

  }
  else {
    $("#q2c").hide();
    $("#q2").show();
    userData.currentQuestion = "q2";
    localStorage.setItem('userData',JSON.stringify(userData));
    userData=JSON.parse(localStorage.getItem('userData'));
    }
});

////////////////working with strengths quesitons///////////
/*$(".radio").click(function(event){
	$.each($("input[name='HTMLRadioOptions']:checked"), function(){
		userData.strengths.html="#"+this.id;
});
$.each($("input[name='CSSRadioOptions']:checked"), function(){
	userData.strengths.css="#"+this.id;
});
$.each($("input[name='JSRadioOptions']:checked"), function(){
	userData.strengths.js="#"+this.id;
});

userData.currentQuestion = "q3";
localStorage.setItem('userData',JSON.stringify(userData));
userData=JSON.parse(localStorage.getItem('userData'));
});*/


$("#strengthPrebtn").click(function(event){
  $("#q3").hide();
  $("#q2").show();
  userData.currentQuestion = "q2";
  localStorage.setItem('userData',JSON.stringify(userData));
  $("#htmlbtn").prop("disabled",false);
  $("#cssbtn").prop("disabled",false);
  $("#jsbtn").prop("disabled",false);
});

/*$("#strengthNxtbtn").click(function(event){
	if(userData.strengths.js=="" || userData.strengths.html==""||userData.strengths.css==""){
		alert("Please choose all strength options...");
	}
	else{
  $("#q3").fadeOut(500);
  $("#thanks").show();
	userData.currentQuestion = "thanks";
	localStorage.setItem('userData',JSON.stringify(userData));
	}
});*/

$("#strengthNxtbtn").click(function(event){
  $("#q3").hide();
  $("#thanks").show();
  userData.currentQuestion = "thanks";
  localStorage.setItem('userData',JSON.stringify(userData));

});

/////////////////////////////////Answers//////////////////////

$("#Showanswer").click(function(event){
  $("#thanks").hide();
  $("#answer").show();
//  userData.currentQuestion = "answer";
//  localStorage.setItem('userData',JSON.stringify(userData));

  document.write("Name: "+ userData.name+"<br>");
  document.write("Email: "+ userData.email+"<br>");

  //////////html likes display/////////////////
/*  var temp="";var temp2;
		if(userData.html.likes.length===0){
			 temp="No possible likes";
		}
		else{
			for(var i=0; i<userData.html.likes.length; i++){
				temp2= "#"+userData.html.likes[i];
			 temp = $(temp2).val();
       document.getElementById('ansHTMLlikes').innerHTML = "<strong>HTML Likes: </strong></br>"+ temp;

			}
		}
	var htmlLikes;
	if(userData.html.likes.length==0){
		 document.write("No HTML liked Attributes"+"<br>")
	}
	else{
		for(var i=0; i<userData.html.likes.length; i++){
			htmlLikes="#"+userData.html.likes[i];
		  document.write("HTML Likes: "+ $(htmlLikes).val()+"<br>");
		}
	}

  //////////html dislikes display/////////////////
  var htmldisLikes;
	if(userData.html.dislikes.length==0){
		 document.write("No HTML disliked Attributes"+"<br>")
	}
	else{
		for(var i=0; i<userData.html.dislikes.length; i++){
			htmldisLikes="#"+userData.html.dislikes[i];
		  document.write("HTML Disikes: "+ $(htmldisLikes).val()+"<br>");
		}
	}
  //////////css likes display/////////////////
  var cssLikes;
	if(userData.css.likes.length==0){
		 document.write("No CSS liked Attributes"+"<br>")
	}
	else{
		for(var i=0; i<userData.css.likes.length; i++){
			cssLikes="#"+userData.css.likes[i];
		  document.write("CSS Likes: "+$(cssLikes).val()+"<br>");
		}
	}
  //////////CSS dislikes display/////////////////
  var cssdisLikes;
	if(userData.css.dislikes.length==0){
		 document.write("No CSS disliked Attributes"+"<br>")
	}
	else{
		for(var i=0; i<userData.css.dislikes.length; i++){
			cssdisLikes="#"+userData.css.dislikes[i];
		  document.write("CSS Disikes: "+$(cssdisLikes).val()+"<br>");
		}
	}
  //////////Js likes display/////////////////
  var jsLikes;
  if(userData.js.likes.length==0){
     document.write("No JS liked Attributes"+"<br>")
  }
  else{
    for(var i=0; i<userData.js.likes.length; i++){
      jsLikes="#"+userData.js.likes[i];
      document.write("JS Likes: "+$(jsLikes).val()+"<br>");
    }
  }
  //////////JS dislikes display/////////////////
  var jsdisLikes;
	if(userData.js.dislikes.length==0){
		 document.write("No JS disliked Attributes"+"<br>")
	}
	else{
		for(var i=0; i<userData.js.dislikes.length; i++){
			jsdisLikes="#"+userData.js.dislikes[i];
		  document.write("JS Disikes: "+$(jsdisLikes).val()+"<br>");
		}
	}*/
});

$(".previousbtn").click(function(event){
  $("#q2").show();
  userData.currentQuestion = "q2";
  localStorage.setItem('userData',JSON.stringify(userData));
  $(this).parent().parent().parent().hide();
});

$(".delete").click(function(event){
  delete userData;
  $("answer").hide();
  $("welcome").show();
});
