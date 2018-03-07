$(document).ready(function() {
    
              var userFeed = new Instafeed({
        get: 'user',
        userId: '422974041',
        limit:5,
        resolution: 'standard_resolution',
        accessToken: '422974041.1677ed0.a92d7f1e4279436fa267baed53abe353',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

 userFeed.run();
  


// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery').magnificPopup({
  type: 'image',
    delegate: 'a',
  gallery:{
    enabled:true
  }
});


  
    
    // This will create a single gallery from all elements that have class "gallery-item"


});