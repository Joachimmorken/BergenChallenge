$(document).ready(function () {
/*
* function that adds class addon to the child of .img-responsive,  which is column-text when hovering over .img-responsive(the image)
*/
    $(".img-responsive").hover(function (){
       $(this.children[0]).addClass("addon");
    }, function(){
        $(this.children[0]).removeClass("addon");
    }
);
    
 
    
});