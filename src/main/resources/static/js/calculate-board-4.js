$(document).ready(function(){
    		var redCrosses4 = 0;
    		var yellowCrosses4 = 0;
    		var greenCrosses4 = 0;
    		var blueCrosses4 = 0;
    		var mistakesCrosses4 = 0;
    		
    		
    		var calculateResults4 = function() {
    		      $("#redCategory4").val(result4(redCrosses4));
    		      $("#yellowCategory4").val(result4(yellowCrosses4));
    		      $("#greenCategory4").val(result4(greenCrosses4));
    		      $("#blueCategory4").val(result4(blueCrosses4));
    		      
    		      $("#mistakesCategory4").val(resultMistakes4(mistakesCrosses4));
    		   };
    		   
    		  var result4 = function(crosses){   			  
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
    		  
    		  var resultMistakes4 = function(mistCrosses){   			  
    			  return mistCrosses * 5;
    		  }
    		
    		$(".red-btn4").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				redCrosses4++;
    			}
    			else {
    				redCrosses4--;
    			}
    			
    			calculateResults4();
    		});
    		$(".yellow-btn4").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				yellowCrosses4++;
    			}
    			else {
    				yellowCrosses4--;
    			}
    			
    			calculateResults4();
    		});
    		$(".green-btn4").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				greenCrosses4++;
    			}
    			else {
    				greenCrosses4--;
    			}
    			
    			calculateResults4();
    		});
    		$(".blue-btn4").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				blueCrosses4++;
    			}
    			else {
    				blueCrosses4--;
    			}
    			
    			calculateResults4();
    		});
    		$(".mistakes-btn4").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				mistakesCrosses4++;
    			}
    			else {
    				mistakesCrosses4--;
    			}
    			
    			calculateResults4();
    		});
    		$(".calculateTotal4").click(function(){
    			$("#totalCategory4").val(result4(redCrosses4) + result4(yellowCrosses4)
    					+ result4(greenCrosses4) + result4(blueCrosses4) - resultMistakes4(mistakesCrosses4));
    		});

    	});