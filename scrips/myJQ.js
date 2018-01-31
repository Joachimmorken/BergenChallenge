$(document).ready(function () {
/*
* function that adds class addon to the child of .img-responsive,  which is column-text when hovering over .img-responsive(the image)

It also looks for the class "hidden-column-text", by html-tree. Therefore reffering to the children of the img-responsive. This is so the code will only execute on the image that is hovered over.
*/
    $(".img-responsive").hover(function (){
       $(this.children[0]).addClass("addon");
       $(this.children[0].children[2]).css({"display":"block"});
    }, function(){
       $(this.children[0]).removeClass("addon");
       $(this.children[0].children[2]).css({"display":"none"});
    }
);
    
 
    
});