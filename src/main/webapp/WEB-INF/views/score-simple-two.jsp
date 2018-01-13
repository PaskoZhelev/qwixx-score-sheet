<%@ include file="common/header.jsp"%>
<%@ include file="common/nav.jsp"%>


<!-- Main container -->
<main>

<div class="main-content">
	<div class="container">
		<div class="row">

		<div class="col-sm-12">
				<div class="card text-center">
					<h4 class="card-title card-title-bold">Simple Game Score Sheet - 2 Players</h4>
				</div>
		</div>

			<!-- PLAYER 1 -->
			<div class="col-sm-6">
				<div class="card text-center">
					<h4 class="card-title card-title-bold">Player 1</h4>
					<div class="card-body">
						
						<!-- CATEGORIES -->
						<div>
						<!-- Red Category Buttons -->
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">2</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">3</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">4</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">5</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">6</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">7</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">8</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">9</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">10</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">11</button>
						<button class="btn btn-square btn-danger red-btn" data-toggle="button">12</button>
						<!-- End Red Category Buttons -->	
						</div>
						<div>
						<!-- Yellow Category Buttons -->
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">2</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">3</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">4</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">5</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">6</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">7</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">8</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">9</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">10</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">11</button>
						<button class="btn btn-square btn-warning yellow-btn" data-toggle="button">12</button>
						<!-- End Yellow Category Buttons -->
						</div>
						<div>
						<!-- Green Category Buttons -->
						<button class="btn btn-square btn-success green-btn" data-toggle="button">2</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">3</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">4</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">5</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">6</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">7</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">8</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">9</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">10</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">11</button>
						<button class="btn btn-square btn-success green-btn" data-toggle="button">12</button>
						<!-- End Green Category Buttons -->
						</div>
						
						<div>
						<!-- Blue Category Buttons -->
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">2</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">3</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">4</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">5</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">6</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">7</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">8</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">9</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">10</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">11</button>
						<button class="btn btn-square btn-primary blue-btn" data-toggle="button">12</button>
						<!-- End Blue Category Buttons -->				
						</div>
						<br />
						<!-- END CATEGORIES -->

						<img class="img-fluid mx-auto d-block" src="img/markers.jpg"
							height=45 width=387 alt="markers" />
						
						<!-- RESULTS -->
						<div class="card-body form-type-round">
							<div class="row gap-2">
							
								<div class="col-md-2">
									<div class="form-group">
										<input id="redCategory1" type="text"
										 style="border-color: #d63535;font-weight: bold;color:#d63535;text-align: center"
										  class="form-control" readonly>
										<label for="total">Red</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="yellowCategory1" type="text"
										 style="border-color: #dc8424;font-weight: bold;color:#dc8424;text-align: center"
										  class="form-control" readonly>
										<label for="total">+ Yellow</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="greenCategory1" type="text"
										 style="border-color: #139c61;font-weight: bold;color:#139c61;text-align: center"
										  class="form-control" readonly>
										<label for="total">+ Green</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="blueCategory1" type="text"
										 style="border-color: #1d88d2;font-weight: bold;color:#1d88d2;text-align: center"
										  class="form-control" readonly>
										<label for="total">+ Blue</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="mistakesCategory1" type="text"
										 style="border-color: #d9e1e6;font-weight: bold;color:#858e94;text-align: center" 
										 class="form-control" readonly>
										<label for="total">- Errors</label>
									</div>
								</div>

								<div class="col-md-2">
									<div class="form-group">										
										<input id="totalCategory1" type="text"
										 style="border-color: #000000;font-weight: bold;color:#000000;text-align: center"
										  class="form-control" disabled>
										<label for="total">= Total</label>
									</div>
								</div>

							</div>
						</div>
						<!-- END RESULTS -->
						
						<!-- Mistakes and Calculate -->
                  		<label for="mistakes">Mistakes</label>
                		<button class="btn btn-sm btn-square btn-danger mistakes-btn" data-toggle="button">X</button>
						<button class="btn btn-sm btn-square btn-danger mistakes-btn" data-toggle="button">X</button>
						<button class="btn btn-sm btn-square btn-danger mistakes-btn" data-toggle="button">X</button>
						<button class="btn btn-sm btn-square btn-danger mistakes-btn" data-toggle="button">X</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="btn btn-lg btn-success calculateTotal1">Calculate</button>
						<!-- END Mistakes and Calculate -->
						
					</div>
				</div>
			</div>
			<!-- END PLAYER 1 -->
			
			<!-- PLAYER 2 -->
			<div class="col-sm-6">
				<div class="card text-center">
					<h4 class="card-title card-title-bold">Player 2</h4>
					<div class="card-body">
						
						<!-- CATEGORIES -->
						<div>
						<!-- Red Category Buttons -->
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">2</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">3</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">4</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">5</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">6</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">7</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">8</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">9</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">10</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">11</button>
						<button class="btn btn-square btn-danger red-btn2" data-toggle="button">12</button>
						<!-- End Red Category Buttons -->	
						</div>
						<div>
						<!-- Yellow Category Buttons -->
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">2</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">3</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">4</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">5</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">6</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">7</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">8</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">9</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">10</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">11</button>
						<button class="btn btn-square btn-warning yellow-btn2" data-toggle="button">12</button>
						<!-- End Yellow Category Buttons -->
						</div>
						<div>
						<!-- Green Category Buttons -->
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">2</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">3</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">4</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">5</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">6</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">7</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">8</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">9</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">10</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">11</button>
						<button class="btn btn-square btn-success green-btn2" data-toggle="button">12</button>
						<!-- End Green Category Buttons -->
						</div>
						
						<div>
						<!-- Blue Category Buttons -->
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">2</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">3</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">4</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">5</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">6</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">7</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">8</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">9</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">10</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">11</button>
						<button class="btn btn-square btn-primary blue-btn2" data-toggle="button">12</button>
						<!-- End Blue Category Buttons -->				
						</div>
						<br />
						<!-- END CATEGORIES -->

						<img class="img-fluid mx-auto d-block" src="img/markers.jpg"
							height=45 width=387 alt="markers" />
						
						<!-- RESULTS -->
						<div class="card-body form-type-round">
							<div class="row gap-2">
							
								<div class="col-md-2">
									<div class="form-group">
										<input id="redCategory2" type="text"
										 style="border-color: #d63535;font-weight: bold;color:#d63535;text-align: center"
										  class="form-control" readonly>
										<label for="total">Red</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="yellowCategory2" type="text"
										 style="border-color: #dc8424;font-weight: bold;color:#dc8424;text-align: center"
										  class="form-control" readonly>
										<label for="total">+ Yellow</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="greenCategory2" type="text"
										 style="border-color: #139c61;font-weight: bold;color:#139c61;text-align: center"
										  class="form-control" readonly>
										<label for="total">+ Green</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="blueCategory2" type="text"
										 style="border-color: #1d88d2;font-weight: bold;color:#1d88d2;text-align: center"
										  class="form-control" readonly>
										<label for="total">+ Blue</label>
									</div>
								</div>
								
								<div class="col-md-2">
									<div class="form-group">
										<input id="mistakesCategory2" type="text"
										 style="border-color: #d9e1e6;font-weight: bold;color:#858e94;text-align: center" 
										 class="form-control" readonly>
										<label for="total">- Errors</label>
									</div>
								</div>

								<div class="col-md-2">
									<div class="form-group">										
										<input id="totalCategory2" type="text"
										 style="border-color: #000000;font-weight: bold;color:#000000;text-align: center"
										  class="form-control" disabled>
										<label for="total">= Total</label>
									</div>
								</div>

							</div>
						</div>
						<!-- END RESULTS -->
						
						<!-- Mistakes and Calculate -->
                  		<label for="mistakes">Mistakes</label>
                		<button class="btn btn-sm btn-square btn-danger mistakes-btn2" data-toggle="button">X</button>
						<button class="btn btn-sm btn-square btn-danger mistakes-btn2" data-toggle="button">X</button>
						<button class="btn btn-sm btn-square btn-danger mistakes-btn2" data-toggle="button">X</button>
						<button class="btn btn-sm btn-square btn-danger mistakes-btn2" data-toggle="button">X</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button class="btn btn-lg btn-success calculateTotal2">Calculate</button>
						<!-- END Mistakes and Calculate -->
						
					</div>
				</div>
			</div>
			<!-- END PLAYER 2 -->
			

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
	<script src="js/calculate-board-2.js"></script>

<%@ include file="common/footer.jsp"%>