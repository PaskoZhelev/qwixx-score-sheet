<%@ include file="common/header.jsp"%>
<%@ include file="common/nav.jsp"%>


<!-- Main container -->
<main>

<div class="main-content">
	<div class="container">
		<div class="row">

			<div class="col-md-4"></div>

			<div class="col-md-4">
				<div class="card">
					<h4 class="card-title card-title-bold">Game With Characters</h4>
					<div class="card-body">
						<div class="form-group">
							<form:form method="POST" action="/score-character"
								modelAttribute="game">
								<table>
									<tr>										
										<form:select class="form-control" path="players">
											<form:option value="1">1</form:option>
											<form:option selected="2" value="2">2</form:option>
											<form:option value="3">3</form:option>
											<form:option value="4">4</form:option>
											<form:option value="5">5</form:option>
										</form:select>																			
									</tr>
									<br />
									<tr>
										<td><input class="btn btn-round btn-lg btn-warning text-center" 
													type="submit" value="Submit" ></td>								
									</tr>
								</table>
							</form:form>

						</div>

					</div>
				</div>
			</div>

			<div class="col-md-4"></div>

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

<%@ include file="common/footer.jsp"%>