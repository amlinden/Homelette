//kontrollerar views och kontrollers och laddar DinnerModel
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

	var HomeScreen = new HomeScreen($("#HomeScreen"));
	var LeftNavBar = new LeftNavBar($("#LeftNavBar"));
	var SelectDishScreen = new SelectDishScreen($("#SelectDishScreen"));
	var DishDetailsScreen = new DishDetailsScreen($("#DishDetailsScreen"));
	var DinnerOverviewScreen = new DinnerOverviewScreen($("#DinnerOverviewScreen"));
	var InstructionsScreen = new InstructionsScreen($("#InstructionsScreen"));

});