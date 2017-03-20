//kontrollerar views och kontrollers och laddar DinnerModel
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

	//var HomeScreen = new HomeScreen($("#HomeScreen"));
	var leftNavBar = new LeftNavBar($("#LeftNavBar"), model);
	//var selectDishScreen = new SelectDishScreen($("#SelectDishScreen"));
	//var dishDetailsScreen = new DishDetailsScreen($("#DishDetailsScreen"));
	//var dinnerOverviewScreen = new DinnerOverviewScreen($("#DinnerOverviewScreen"));
	//var instructionsScreen = new InstructionsScreen($("#InstructionsScreen"));

});