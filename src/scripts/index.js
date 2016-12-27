
var IScroll = require('./common/libs/iscroll/iscroll.js');
var Intro = require('./common/utils/intro.js');


var $ = require('./common/libs/zepto-modules/zepto.js');
require('./common/libs/zepto-modules/_custom.js')

if(localStorage.info){
	$('#intro').hide();
	$('#mainContent').show();
}else{
	$('#intro').show();
	$('#mainContent').hide();
}
Intro.ajaxData();


	tabjson("skills");
var myScroll;
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove',
	 function (e) { e.preventDefault(); }, false);

$('#moreContent').on('tap',function(){
	//localStorage.info=true;
	$('#intro').hide();
	$('#mainContent').show();
	tabjson("skills");
	myScroll.scrollTo(0,0);
	myScroll.refresh();
});








$('#footer .button').on('tap',function(){
	var apiId = $(this).attr('id');	
	$(this).addClass('active').siblings().removeClass('active');
	tabjson(apiId);
});


function tabjson(jsonname){
        $.post('http://localhost:8000/'+jsonname, function(data){
          var str="";

          for(var i=0;i<data.length;i++){  
            str+="<li>";
             for(var each in data[i]){
	             	if(each==="image"){
	             		if(jsonname==="work"){
	             			str+="<img src='"+data[i][each]+"' style='width:80px;height:80px'>"
	             		}else{
	             			str+="<img src='"+data[i][each]+"'>"
	             		}
	             	}else{
	             		str +="<p title='"+data[i][each]+"'>"+data[i][each]+"</p>"; 
	             	}
				}
              str+="</li>";
             }
console.log(data);
            $("#shill-list").html(str);
           myScroll.scrollTo(0,0);
			myScroll.refresh();
       });
      }



var degree=0;
var num=0;
var audio = document.getElementById('music');  
var time=setInterval(function(){	
	degree++;
$('.music').css('transform','rotate('+degree+'deg)');
},14);

$('.music').on('click',function(){
	
	clearInterval(time);
	num++;
	if(num==1){		
		clearInterval(time);
		audio.pause();
	}else{		
		time=setInterval(function(){	
		degree++;
		if(degree===360){
			degree=0;
		}
		$('.music').css('transform','rotate('+degree+'deg)');
		},14);
		num=0;
		if(audio!==null){
		  if(!audio.paused)  
		    {                 
		        audio.pause();// 这个就是暂停//audio.play();// 这个就是播放  
		    } 
		    else{
		    	audio.play();
		    }		  
		}			
	}	
	 event.stopPropagation(); //阻止冒泡
});





    