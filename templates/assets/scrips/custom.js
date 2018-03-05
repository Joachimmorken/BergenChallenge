$(document).ready(function() {
    
              var userFeed = new Instafeed({
        get: 'user',
        userId: '176595535',
        limit:5,
        resolution: 'standard_resolution',
        accessToken: '176595535.1677ed0.0a71c932a6da4950b8c3f48fe1cffa52',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

 userFeed.run();
  





  
    
    // This will create a single gallery from all elements that have class "gallery-item"


});