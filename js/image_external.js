document.addEventListener('DOMContentLoaded', function() { 
    var hiddenTexts = document.querySelectorAll('.hidden-text');  
    hiddenTexts.forEach(function(hiddenText) {  
        hiddenText.style.display = 'none';  
    });   
    
    var containers = document.querySelectorAll('.img1');  
  
    containers.forEach(function(container) {   
        var image = container.querySelector('.hoverable-image');  
        var hiddenText = container.querySelector('.hidden-text');  
  
          
        image.addEventListener('mouseover', function() {  
            hiddenText.style.display = 'block'; 
        });  
  
        image.addEventListener('mouseout', function() {  
            hiddenText.style.display = 'none';   
        });  
    });  
});