$(document).ready(function(){
    		var redCrosses = 0;
    		var yellowCrosses = 0;
    		var greenCrosses = 0;
    		var blueCrosses = 0;
    		
    		var redResult = 0;
    		var yellowResult = 0;
    		var greenResult = 0;
    		var blueResult = 0;
    		
    		var calculateResults = function() {
    		      
    		   };
    		   
    		  var result = function(crosses){   			  
    			  switch(crosses){
    			  case 1:
    				  return 1;
    			  case 2:
    				  return 3;
    			  case 3:
    				  return 6;
    			  case 4:
    				  return 10;
    			  case 5:
    				  return 15;
    			  case 6:
    				  return 21;
    			  case 7:
    				  return 28;
    			  case 8:
    				  return 36;
    			  case 9:
    				  return 45;
    			  case 10:
    				  return 55;
    			  case 11:
    				  return 66;
    			  case 12:
    				  return 78;
    				  
    			  default:
    				  return 0;
    			  }
    		  }
    		
    		$(".red-btn").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				redCrosses++;
    			}
    			else {
    				redCrosses--;
    			}
    			
    			calculateResults();
    		});
    		$(".yellow-btn").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				yellowCrosses++;
    			}
    			else {
    				yellowCrosses--;
    			}
    			
    			calculateResults();
    		});
    		$(".green-btn").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				greenCrosses++;
    			}
    			else {
    				greenCrosses--;
    			}
    			
    			calculateResults();
    		});
    		$(".blue-btn").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				blueCrosses++;
    			}
    			else {
    				blueCrosses--;
    			}
    			
    			calculateResults();
    		});

    	});