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
					<h4 class="card-title card-title-bold">Simple Game</h4>
					<div class="card-body">
						<div class="form-group">
							<form:form method="POST" action="/score-simple"
								modelAttribute="game">
								<form:select class="form-control" path="players">
									<form:option selected="2" value="2">2</form:option>
									<form:option value="3">3</form:option>
									<form:option value="4">4</form:option>
									<form:option value="5">5</form:option>
								</form:select>
							</form:form>

						</div>

					</div>
				</div>
			</div>

			<div class="col-md-4"></div>

		</div>
	</div>
</div>

<%@ include file="common/footer.jsp"%>