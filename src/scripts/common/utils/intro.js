var $ = require('../libs/zepto-modules/zepto.js');
var echarts = require('../libs/echarts.js');
var swiperAni = require('../libs/swiper/swiper.animate1.0.2.min.js');
var Swiper = require('../libs/swiper/swiper.min.js');

/****************技能数据***************/
var aniArr = ['rollIn', 'bounceIn', 'bounceInDown', 'bounceInLeft']

var intro = {
    ajaxData: function() {
        var that = this;
        $.post('http://localhost:8000/skill', function(data) {
            var skillData = data.skills;
            var str = '';
            for (var i = 0; i < 4; i++) {
                str += '<ul class="skillUl ani" swiper-animate-effect="' + aniArr[i] + '" swiper-animate-duration="1s" swiper-animate-delay="' + i / 2 + 's"><li>' + skillData[i].category + '</li><li>' + skillData[i].name + '</li><li>' + skillData[i].time + '</li><li>' + skillData[i].level + '</li></ul>'
            }
            $('#skill-div').html(str);
            that.swiper = new Swiper('.swiper-container', {

                onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit

                    swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
                    swiperAni.swiperAnimate(swiper); //初始化完成开始动画
                },
                onSlideChangeEnd: function(swiper) {

                    swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

                },
                pagination: '.swiper-pagination',
                paginationType: 'progress'
            });

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

    tooltip: {
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
    series: [{
        name: '技能',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
            { value: 335, name: 'HTML' },
            { value: 310, name: 'CSS' },
            { value: 274, name: 'JS' },
            { value: 235, name: '类库' },
            { value: 400, name: '框架' },
            { value: 320, name: '插件' }
        ].sort(function(a, b) {
            return a.value - b.value }),
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
    }]
};


myChart.setOption(option);



/***************个人简历*********************/
