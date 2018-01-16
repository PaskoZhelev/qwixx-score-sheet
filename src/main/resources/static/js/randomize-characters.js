$(document).ready(function(){
	var chars = [ "img/qwixx-char-1.jpg",
					"img/qwixx-char-2.jpg",
					"img/qwixx-char-3.jpg",
					"img/qwixx-char-4.jpg",
					"img/qwixx-char-5.jpg"];
    		

			
			randomizeCharacters();
	
    		 function randomizeCharacters() {
    		      chars = shuffle(chars);
    		      var players = parseInt($(".players-num").text());
    		      
    		      switch(players){
    		      case 1:
    		    	  $(".char-1").attr("src", chars[0]);
    		    	  break;
    		      case 2:
    		    	  $(".char-1").attr("src", chars[0]);
    		    	  $(".char-2").attr("src", chars[1]);
    		    	  break;
    		      case 3:
    		    	  $(".char-1").attr("src", chars[0]);
    		    	  $(".char-2").attr("src", chars[1]);
    		    	  $(".char-3").attr("src", chars[2]);
    		    	  break;
    		      case 4:
    		    	  $(".char-1").attr("src", chars[0]);
    		    	  $(".char-2").attr("src", chars[1]);
    		    	  $(".char-3").attr("src", chars[2]);
    		    	  $(".char-4").attr("src", chars[3]);
    		    	  break;
    		      case 5:
    		    	  $(".char-1").attr("src", chars[0]);
    		    	  $(".char-2").attr("src", chars[1]);
    		    	  $(".char-3").attr("src", chars[2]);
    		    	  $(".char-4").attr("src", chars[3]);
    		    	  $(".char-5").attr("src", chars[4]);
    		    	  break;  
    		    	  
    		      default:
    		    	  $("#char-1").attr("src", chars[0]);
    		    	  break;
    		      }
    		   };
    		   
    		   function shuffle(array) {
    			   var currentIndex = array.length, temporaryValue, randomIndex;

    			   // While there remain elements to shuffle...
    			   while (0 !== currentIndex) {

    			     // Pick a remaining element...
    			     randomIndex = Math.floor(Math.random() * currentIndex);
    			     currentIndex -= 1;

    			     // And swap it with the current element.
    			     temporaryValue = array[currentIndex];
    			     array[currentIndex] = array[randomIndex];
    			     array[randomIndex] = temporaryValue;
    			   }

    			   return array;
    			 }
    		  
    		  

    	});