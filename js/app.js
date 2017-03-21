//kontrollerar views och kontrollers och laddar DinnerModel
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);

	//var HomeScreen = new HomeScreen($("#HomeScreen"));
	var leftNavBar = new LeftNavBar($("#LeftNavBar"), model);
	var leftNavBarController = new LeftNavBarController(leftNavBar, model);
	var selectDishScreen = new SelectDishScreen($("#SelectDishScreen"), model);
	var dishDetailsScreen = new DishDetailsScreen($("#DishDetailsScreen"), model);
	var dinnerOverviewScreen = new DinnerOverviewScreen($("#DinnerOverviewScreen"), model);
	var preparationScreen = new PreparationScreen($("#PreparationScreen"), model);

});