$(function(){
    let imgData=[
        './img/1.jpg',
        './img/11.jpg',
        './img/13.jpg',
        './img/14.jpg',
        './img/15.jpg',
        './img/15.png',
        './img/16.jpg',
        './img/17.jpg',
        './img/18.jpg',
        './img/19.jpg',
        './img/2.jpg',
        './img/20.jpg'
    ]
    let baseItem=$('<div class="item"></div>').append("<img/>").append('<hr/>');

    function widthPage(){
        let item=$('div.item');
        let imgWidth=[];
        let itemWidth=item.eq(0).width()+10
        item.each((index,dom)=>{
            // let itemHeight=item.eq(index).height()+10;
            if(index<4){
                imgWidth[index]=itemWidth
                $(dom).css({
                    'left':310*index,
                    'top':10
                })
            }else{
                var minHeight=Math.min.apply(null,imgWidth);
                var minIndex=$.inArray(minHeight,imgWidth);
                $(dom).css({
                    "top":minHeight+10,
                    "left":parseInt(item.eq(minIndex).css("left"))
                })
            }
            imgWidth[minIndex]+=$(dom).height()+10
        })
    }
    function getItem(){
        for(let i=0; i<imgData.length; i++){
            baseItem.clone().hide().children("img").attr("src",imgData[i]).bind("load",function(){
                widthPage();
                $(this).parent().fadeIn(100);
            }).end().appendTo(".imgBox");
        }
    }
    function wheelListen(){
        var srollHeight = $(document).scrollTop();
        if(srollHeight+$(window).height() >= $(document).height()-100){
            console.log(srollHeight+$(window).height())
            getItem();
        }
    }
    $(window).on("load",function(){
        getItem();
        $(document).bind("mousewheel DOMMouseScroll",function(){
            wheelListen();
        });
    })
})