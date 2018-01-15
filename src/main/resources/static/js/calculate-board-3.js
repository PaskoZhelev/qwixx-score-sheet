$(document).ready(function(){
    		var redCrosses3 = 0;
    		var yellowCrosses3 = 0;
    		var greenCrosses3 = 0;
    		var blueCrosses3 = 0;
    		var mistakesCrosses3 = 0;
    		
    		
    		var calculateResults3 = function() {
    		      $("#redCategory3").val(result3(redCrosses3));
    		      $("#yellowCategory3").val(result3(yellowCrosses3));
    		      $("#greenCategory3").val(result3(greenCrosses3));
    		      $("#blueCategory3").val(result3(blueCrosses3));
    		      
    		      $("#mistakesCategory3").val(resultMistakes3(mistakesCrosses3));
    		   };
    		   
    		  var result3 = function(crosses){   			  
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
    		  
    		  var resultMistakes3 = function(mistCrosses){   			  
    			  return mistCrosses * 5;
    		  }
    		
    		$(".red-btn3").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				redCrosses3++;
    			}
    			else {
    				redCrosses3--;
    			}
    			
    			calculateResults3();
    		});
    		$(".yellow-btn3").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				yellowCrosses3++;
    			}
    			else {
    				yellowCrosses3--;
    			}
    			
    			calculateResults3();
    		});
    		$(".green-btn3").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				greenCrosses3++;
    			}
    			else {
    				greenCrosses3--;
    			}
    			
    			calculateResults3();
    		});
    		$(".blue-btn3").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				blueCrosses3++;
    			}
    			else {
    				blueCrosses3--;
    			}
    			
    			calculateResults3();
    		});
    		$(".mistakes-btn3").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				mistakesCrosses3++;
    			}
    			else {
    				mistakesCrosses3--;
    			}
    			
    			calculateResults3();
    		});
    		$(".calculateTotal3").click(function(){
    			$("#totalCategory3").val(result3(redCrosses3) + result3(yellowCrosses3)
    					+ result3(greenCrosses3) + result3(blueCrosses3) - resultMistakes3(mistakesCrosses3));
    		});

    	});