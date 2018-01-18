$(document).ready(function(){
	var redDice = [ "",
					"img/dice/red-die-1.png",
					"img/dice/red-die-2.png",
					"img/dice/red-die-3.png",
					"img/dice/red-die-4.png",
					"img/dice/red-die-5.png",
					"img/dice/red-die-6.png",];
	var yellowDice = [ "",
					"img/dice/yellow-die-1.png",
					"img/dice/yellow-die-2.png",
					"img/dice/yellow-die-3.png",
					"img/dice/yellow-die-4.png",
					"img/dice/yellow-die-5.png",
					"img/dice/yellow-die-6.png",];
	var greenDice = [ "",
					"img/dice/green-die-1.png",
					"img/dice/green-die-2.png",
					"img/dice/green-die-3.png",
					"img/dice/green-die-4.png",
					"img/dice/green-die-5.png",
					"img/dice/green-die-6.png",];
	var blueDice = [ "",
					"img/dice/blue-die-1.png",
					"img/dice/blue-die-2.png",
					"img/dice/blue-die-3.png",
					"img/dice/blue-die-4.png",
					"img/dice/blue-die-5.png",
					"img/dice/blue-die-6.png",];
	var whiteDice = [ "",
					"img/dice/white-die-1.png",
					"img/dice/white-die-2.png",
					"img/dice/white-die-3.png",
					"img/dice/white-die-4.png",
					"img/dice/white-die-5.png",
					"img/dice/white-die-6.png",];
    		
			
			
			rollDice();
	
    		 function rollDice() {
    			 var redDie = 1 + Math.floor(Math.random() * 6);
    			 var yellowDie = 1 + Math.floor(Math.random() * 6);
    			 var greenDie = 1 + Math.floor(Math.random() * 6);
    			 var blueDie = 1 + Math.floor(Math.random() * 6);
    			 var whiteDie1 = 1 + Math.floor(Math.random() * 6);
    			 var whiteDie2 = 1 + Math.floor(Math.random() * 6);
    			     		      
    		     $(".red-die").attr("src", redDice[redDie]);
    		     $(".yellow-die").attr("src", yellowDice[yellowDie]);
    		     $(".green-die").attr("src", greenDice[greenDie]);
    		     $(".blue-die").attr("src", blueDice[blueDie]);
    		     $(".white-die-1").attr("src", whiteDice[whiteDie1]);
    		     $(".white-die-2").attr("src", whiteDice[whiteDie2]);
    		    	  
    		   };
    		   
    		   $(".rollDice").click(function(){
       				rollDice();
       		   });   

    	});