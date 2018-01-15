$(document).ready(function(){
    		var redCrosses5 = 0;
    		var yellowCrosses5 = 0;
    		var greenCrosses5 = 0;
    		var blueCrosses5 = 0;
    		var mistakesCrosses5 = 0;
    		
    		
    		var calculateResults5 = function() {
    		      $("#redCategory5").val(result5(redCrosses5));
    		      $("#yellowCategory5").val(result5(yellowCrosses5));
    		      $("#greenCategory5").val(result5(greenCrosses5));
    		      $("#blueCategory5").val(result5(blueCrosses5));
    		      
    		      $("#mistakesCategory5").val(resultMistakes5(mistakesCrosses5));
    		   };
    		   
    		  var result5 = function(crosses){   			  
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
    		  
    		  var resultMistakes5 = function(mistCrosses){   			  
    			  return mistCrosses * 5;
    		  }
    		
    		$(".red-btn5").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				redCrosses5++;
    			}
    			else {
    				redCrosses5--;
    			}
    			
    			calculateResults5();
    		});
    		$(".yellow-btn5").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				yellowCrosses5++;
    			}
    			else {
    				yellowCrosses5--;
    			}
    			
    			calculateResults5();
    		});
    		$(".green-btn5").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				greenCrosses5++;
    			}
    			else {
    				greenCrosses5--;
    			}
    			
    			calculateResults5();
    		});
    		$(".blue-btn5").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				blueCrosses5++;
    			}
    			else {
    				blueCrosses5--;
    			}
    			
    			calculateResults5();
    		});
    		$(".mistakes-btn5").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				mistakesCrosses5++;
    			}
    			else {
    				mistakesCrosses5--;
    			}
    			
    			calculateResults5();
    		});
    		$(".calculateTotal5").click(function(){
    			$("#totalCategory5").val(result5(redCrosses5) + result5(yellowCrosses5)
    					+ result5(greenCrosses5) + result5(blueCrosses5) - resultMistakes5(mistakesCrosses5));
    		});

    	});