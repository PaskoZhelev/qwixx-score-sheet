<%@ include file="common/header.jsp" %>
<%@ include file="common/nav.jsp" %>


    <!-- Main container -->
    <main>

    <div class="main-content">
       <div class="container">
        <div class="row gap-2">
			
          <div class="col-sm-6">	
			            
            <div class="card">
              <div class="card-body">
                 <p>Qwixx is a quick-playing dice game in which everyone participates, no matter whose turn it is. Each player has a scoresheet with the numbers 2-12 in rows of red and yellow and the numbers 12-2 in rows of green and blue.</p> 
                 
                 <p>To score points you want to mark off as many numbers as possible, but you can mark off a number only if it's to the right of all marked-off numbers in the same row.</p>
				 <div class="text-center"><strong>Players</strong>: 2-5 &emsp;&emsp;<strong>Playing Time</strong>: 15 Min&emsp;&emsp;<strong>Age</strong>: 8+</div>
				</div>
            </div>
          

			<div class="row">
				<div class="col-sm-6">
				<a href="/score-simple">
				<button class="btn btn-round btn-lg btn-warning">
				  <div class="flexbox">					
					<span class="fs-20 fw-400">Score - Simple Game</span>
				  </div>
				</button></a>
				</div>
				
				<div class="col-sm-6">
				<a href="/score-character">
				<button class="btn btn-round btn-lg btn-danger">				
				  <div class="flexbox">			  
					<span class="fs-20 fw-400">Score with Characters</span>					
				  </div>					
				</button>
				</a>
				</div>
			</div>
			</div>
						
            
		<div class="col-sm-6">
            
            <div class="card">
              <div class="card-body">
                	<img class="img-fluid mx-auto d-block" src="img/qwixx-image-1.png" alt="qwixx-image-1" />
              </div>
            </div>
          </div>
          
       </div>
          </div>
	    </div>

	
      <!-- Footer -->
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="text-center text-sm-left">Qwixx Score Sheet - Created by Pasko</a></p>
            </div>

            <div class="col-md-6">
              
            </div>
          </div>
        </div>
      </footer>
      <!-- END Footer -->


    </main>

<%@ include file="common/footer.jsp" %>