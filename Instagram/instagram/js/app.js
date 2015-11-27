$(document).ready(function(){
	//enable listeners
	$('#tag-search').submit(function(event){event.preventDefault();instagram_api($(this));})
	ajax_call('toronto');
	//load default page
	/*PLACE FUNCTION HERE THAT LOADS PICTURES ON PAGE LOAD */
	
});

//global variable
var animation ='';

function instagram_api(frm){
	var search = frm.find('input[name="tag_search"]').val();
	console.log(search);
	var data = ajax_call(search);
}
var scroll_images=function(){
	$('#image-container').animate({'top':'-=1'},100,function(){});
}
function images_response(data){
	console.log(data);
	images = data.data;
	$('#instagram-pics').html('');
	for(image in images){
		console.log(images[image].images.standard_resolution.url);
		html = '<a href="'+images[image].link+'" target="blank"><li style="background:url(\''+images[image].images.standard_resolution.url+'\'); background-size:cover; background-position:center center"></li></a>';
		$('#instagram-pics').append(html);
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
	
	clearInterval(animation);
	$('#image-container').css('top','0');
	animation=setInterval(scroll_images,100);

}

function ajax_call(tag){

	/* 
	complete the AJAX code block below to gather the 20 most recent photos with the tag 
	you searched for

	You can use the following client Id:
	client_id=61f8b631abd34732a3bcd8c73d0d73a9

	*/
	$.ajax({
		url:'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id=62d3f4f05b3347629007d9f94db977fa',
		type:'GET',
		dataType:'jsonp',
		success:function(data){
			console.log(data);
			images_response(data);
			return data;
			
		},
		error:function(data){
			console.log(data);
		}
	});

}



