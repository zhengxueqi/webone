var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var Swiper = require('./common/libs/swiper/swiper.min.js');
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

var swiper = new Swiper('.swiper-container',{
          onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
           swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAni.swiperAnimate(swiper); //初始化完成开始动画
          }, 
          onSlideChangeEnd: function(swiper){ 
            swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
          },
          pagination: '.swiper-pagination',
          paginationType: 'progress'
    });
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




Intro.ajaxData();



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
	             		str +="<p>"+data[i][each]+"</p>"; 
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
},5);

$('.music').on('click',function(){
	degree=0;
	clearInterval(time);
	num++;
	if(num==1){		
		clearInterval(time);
		audio.pause();
	}else{		
		time=setInterval(function(){	
		degree++;
		$('.music').css('transform','rotate('+degree+'deg)');
		},5);
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



/*********点击创建div**************/
	/*$('body').on('tap',function(e){
		$.remove($('.creatDiv'));
		$('body').append('<div class="creatDiv" style="position:absolute;width:30px;height:30px;border-radius:100% 100%;background-color:rgba(51,156,211,0.5)"></div>');
		
	})*/

    