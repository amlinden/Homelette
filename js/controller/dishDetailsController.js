//Controller constructor
var DishDetailsController = function (view, model) {

	view.backButton.click(function(){

		$("#DishDetailsScreen").hide();
		$("#SelectDishScreen").show();


	});

	view.confirmDishButton.click(function(){

		//lägg till rätt i menyn

		$("#DishDetailsScreen").hide();
		$("#SelectDishScreen").show();
		

	});
}
