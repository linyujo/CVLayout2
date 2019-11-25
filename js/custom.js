// $(document).ready(function(){
//     $(window).on("scroll",function(){
//         var scrollDistance = $(window).scrollTop();
//         var header = $(".js-header");
//         if(scrollDistance > 80){

//         }
//     })
// });

(function() {
    // the DOM will be available here
    /**
     * 滑鼠scroll
     */
    window.onscroll = function(){
        const _header = document.getElementById("js-header");
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            _header.classList.add("header__colored");
        } else {
            _header.classList.remove("header__colored");
        }
    };

    /**
     * 初始化WOW
     * 行動裝置不仔載入動畫
     */
    if(window.screen.width > 768){
        new WOW().init();
    }
    
    /**
     * 初始化FancyBox
     */
    $("[data-fancybox]").fancybox({
        loop : true
    });

    /**
     * 初始化stellar
     * 行動裝置不仔載入動畫
     */
    if(window.screen.width > 768){
        $(window).stellar();
    }
 })();