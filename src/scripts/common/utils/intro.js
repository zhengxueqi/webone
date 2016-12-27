var $ = require('../libs/zepto-modules/zepto.js');
var echarts=require('../libs/echarts.js');


/****************技能数据***************/
var aniArr=['rollIn','bounceIn','bounceInDown','bounceInLeft']

var intro = {
	ajaxData : function(){
		$.post('http://localhost:8000/skill',function(data){
			var skillData = data.skills;
			var str = '';
			for(var i=0; i<4; i++){
				str+='<ul class="skillUl ani" swiper-animate-effect="'+aniArr[i]+'" swiper-animate-duration="1s" swiper-animate-delay="'+i/2+'s"><li>'+skillData[i].category+'</li><li>'+skillData[i].name+'</li><li>'+skillData[i].time+'</li><li>'+skillData[i].level+'</li></ul>'
			}
			$('#slide2').append(str);
		})
	}
	
}
module.exports = intro;



/*************图标列表***************/
var myChart = echarts.init(document.getElementById('leibiao'));

        // 指定图表的配置项和数据
      var option = {
    backgroundColor: '#2c343c',

    title: {
        text: '技能',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'技能',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'HTML'},
                {value:310, name:'CSS'},
                {value:274, name:'JS'},
                {value:235, name:'类库'},
                {value:400, name:'框架'},
                {value:320, name:'插件'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
     

  myChart.setOption(option);



  /***************个人简历*********************/

  