$(document).ready(function(){
    		var redCrosses2 = 0;
    		var yellowCrosses2 = 0;
    		var greenCrosses2 = 0;
    		var blueCrosses2 = 0;
    		var mistakesCrosses2 = 0;
    		
    		
    		var calculateResults2 = function() {
    		      $("#redCategory2").val(result2(redCrosses2));
    		      $("#yellowCategory2").val(result2(yellowCrosses2));
    		      $("#greenCategory2").val(result2(greenCrosses2));
    		      $("#blueCategory2").val(result2(blueCrosses2));
    		      
    		      $("#mistakesCategory2").val(resultMistakes2(mistakesCrosses2));
    		   };
    		   
    		  var result2 = function(crosses){   			  
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
    		  
    		  var resultMistakes2 = function(mistCrosses){   			  
    			  return mistCrosses * 5;
    		  }
    		
    		$(".red-btn2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				redCrosses2++;
    			}
    			else {
    				redCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".yellow-btn2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				yellowCrosses2++;
    			}
    			else {
    				yellowCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".green-btn2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				greenCrosses2++;
    			}
    			else {
    				greenCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".blue-btn2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				blueCrosses2++;
    			}
    			else {
    				blueCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".mistakes-btn2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				mistakesCrosses2++;
    			}
    			else {
    				mistakesCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".calculateTotal2").click(function(){
    			$("#totalCategory2").val(result2(redCrosses2) + result2(yellowCrosses2)
    					+ result2(greenCrosses2) + result2(blueCrosses2) - resultMistakes2(mistakesCrosses2));
    		});
    		
    		
    		$(".red-lock2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".red-btn2").prop('disabled', true);
    				redCrosses2++;
    			}
    			else {
    				$(".red-btn2").prop('disabled', false);
    				redCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".yellow-lock2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".yellow-btn2").prop('disabled', true);
    				yellowCrosses2++;
    			}
    			else {
    				$(".yellow-btn2").prop('disabled', false);
    				yellowCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".green-lock2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".green-btn2").prop('disabled', true);
    				greenCrosses2++;
    			}
    			else {
    				$(".green-btn2").prop('disabled', false);
    				greenCrosses2--;
    			}
    			
    			calculateResults2();
    		});
    		$(".blue-lock2").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".blue-btn2").prop('disabled', true);
    				blueCrosses2++;
    			}
    			else {
    				$(".blue-btn2").prop('disabled', false);
    				blueCrosses2--;
    			}
    			
    			calculateResults2();
    		});

    	});