var myApp = angular.module("myApp", []);

function MyController() {
  this.text;
}

myApp.controller("MyController", MyController);

$(document).ready(function(){
  $("#JQtext").keyup(function(){
    var JQstring = $(this).val();
    console.log(JQstring);
    $('#JQoutput').html(JQstring);
  });
});