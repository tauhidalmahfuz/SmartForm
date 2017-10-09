// Your jQuery goes here

var userData = {
  name:"",
  email:"",
  html:{likes:[], dislikes:[]},
  css: {likes:[], dislikes:[]},
  js:{likes:[], dislikes:[]},
  strengths:{html:"",css:"",js:""},
  currentQuestion:"welcome"
};
$("#startbtn").click(function(event){
  $("#welcome").hide();
  $("#q1").show();
});

$("#name").change(function(event){
  console.log($("#name").val());
});
$("#email").change(function(event){
  //validation of email is needed;
  console.log($("#email").val());
  //if the fields are empty button should be empty;
  $("#nextbtn").prop("disabled",false);
});
$("#nextbtn").click(function(event){
  userData.name=$("#name").val();
  userData.email = $("#email").val();
  $("#q1").hide();
  $("#q2").show();
});
$("#htmlbtn").click(function(event){
  $("#q2").hide();
  $("#q2a").show();
});
$("#cssbtn").click(function(event){
  $("#q2").hide();
  $("#q2b").show();
});
$("#jsbtn").click(function(event){
  $("#q2").hide();
  $("#q2c").show();
});

$(".previousbtn").click(function(event){
  $("#q2").show();
  $(this).parent().parent().parent().hide();
});
