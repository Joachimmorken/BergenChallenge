$(document).ready(function () {
    
   
/*
* function that adds class addon to the child of .img-responsive,  which is column-text when hovering over .img-responsive(the image)

It also looks for the class "hidden-column-text", by html-tree. Therefore reffering to the children of the img-responsive. This is so the code will only execute on the image that is hovered over.
*/
    $(".img-responsive").hover(function (){
       $(this.children[0]).addClass("colorlayer2");
       $(this.children[0].children[0]).css({"display": "none"});
        $(this.children[0].children[1]).css({"display": "block"});
    
    }, function(){
       $(this.children[0].children[0]).css({"display": "block"});
        $(this.children[0].children[1]).css({"display": "none"});
       $(this.children[0]).removeClass("colorlayer2");
    }
);

    
});