$(document).ready(function(){
	//enable listeners
	$('#tag-search').submit(function(event){event.preventDefault();instagram_api($(this));})
	//load default page
	/*PLACE FUNCTION HERE THAT LOADS PICTURES ON PAGE LOAD */
	
});

//global variable
var animation ='';

function instagram_api(frm){
	var search = frm.find('input[name="tag_search"]').val();
	console.log(search);
	/* PLACE FUNCTION HERE */
}
var scroll_images=function(){
	$('#image-container').animate({'top':'-=1'},100,function(){
	});
}
function images_response(data){
	console.log(data);
	images = data.data;
	$('#instagram-pics').html('');
	for(image in images){
		console.log(images[image].images.standard_resolution.url);
		/* 
			WRITE THE FUNCTION THAT TAKES THE IMAGE URL AND ADDS THEM TO
			list with the id instagram-pics. You will need to know the following things:

			1. To add html to an element with jquery use this syntax $('#instagram-pics').append('html tag goes in here');
			2. To make sure all images fit in the squares available to them, use these css properties
			   background:url('image url')
			   background-size:cover
			   background-position:center center
	     */
	}
	$('#image-container').css('top','0px');
	clearInterval(animation);
	animation=setInterval(/*PLACE FUNCTION HERE */,100);
}

function ajax_call(tag){

	/* 
	complete the AJAX code block below to gather the 20 most recent photos with the tag 
	you searched for

	You can use the following client Id:
	client_id=61f8b631abd34732a3bcd8c73d0d73a9

	*/
	$.ajax({
		url:,
		type:'GET',
		dataType:'jsonp',
		success:function(data){
			/* PLACE FUNCTION HERE */
			
		},
		error:function(data){
			console.log(data);
		}
	});

}

