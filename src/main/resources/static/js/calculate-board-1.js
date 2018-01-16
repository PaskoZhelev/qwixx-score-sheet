$(document).ready(function(){
    		var redCrosses = 0;
    		var yellowCrosses = 0;
    		var greenCrosses = 0;
    		var blueCrosses = 0;
    		var mistakesCrosses = 0;
    		
    		
    		var calculateResults = function() {
    		      $("#redCategory1").val(result(redCrosses));
    		      $("#yellowCategory1").val(result(yellowCrosses));
    		      $("#greenCategory1").val(result(greenCrosses));
    		      $("#blueCategory1").val(result(blueCrosses));
    		      
    		      $("#mistakesCategory1").val(resultMistakes(mistakesCrosses));
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
    		  
    		  var resultMistakes = function(mistCrosses){   			  
    			  return mistCrosses * 5;
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
    		$(".mistakes-btn").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				mistakesCrosses++;
    			}
    			else {
    				mistakesCrosses--;
    			}
    			
    			calculateResults();
    		});
    		$(".calculateTotal1").click(function(){
    			$("#totalCategory1").val(result(redCrosses) + result(yellowCrosses)
    					+ result(greenCrosses) + result(blueCrosses) - resultMistakes(mistakesCrosses));
    		});
    		
    		$(".red-lock").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".red-btn").prop('disabled', true);
    				redCrosses++;
    			}
    			else {
    				$(".red-btn").prop('disabled', false);
    				redCrosses--;
    			}
    			
    			calculateResults();
    		});
    		$(".yellow-lock").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".yellow-btn").prop('disabled', true);
    				yellowCrosses++;
    			}
    			else {
    				$(".yellow-btn").prop('disabled', false);
    				yellowCrosses--;
    			}
    			
    			calculateResults();
    		});
    		$(".green-lock").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".green-btn").prop('disabled', true);
    				greenCrosses++;
    			}
    			else {
    				$(".green-btn").prop('disabled', false);
    				greenCrosses--;
    			}
    			
    			calculateResults();
    		});
    		$(".blue-lock").click(function(){
    			if ( ! $( this ).hasClass("active") ){
    				$(".blue-btn").prop('disabled', true);
    				blueCrosses++;
    			}
    			else {
    				$(".blue-btn").prop('disabled', false);
    				blueCrosses--;
    			}
    			
    			calculateResults();
    		});

    	});