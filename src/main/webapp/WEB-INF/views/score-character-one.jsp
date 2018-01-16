<%@ include file="common/header.jsp"%>
<%@ include file="common/nav.jsp"%>


<!-- Main container -->
<main>

<div class="main-content">
	<div class="container">
		<div class="row">

		<div class="col-sm-12">
				<div class="card text-center">
					<h4 class="card-title card-title-bold">Game With Characters Score Sheet - 
					<span class="players-num">1</span> Player 
					 </h4>
				</div>
		</div>
		
		<%@ include file="player-boards/character-abilities.jsp"%>

			<div class="col-sm-3"></div>
			<%@ include file="player-boards/player-character-1.jsp"%>			
			<div class="col-sm-3"></div>

			

		</div>
	</div>
</div>


<!-- Footer --> <footer class="site-footer">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<p class="text-center text-sm-left">
					Qwixx Score Sheet - Created by Pasko</a>
				</p>
			</div>

			<div class="col-md-6"></div>
		</div>
	</div>
</footer> <!-- END Footer --> </main>


<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="js/calculate-board-1.js"></script>
	<script src="js/randomize-characters.js"></script>


<%@ include file="common/footer.jsp"%>