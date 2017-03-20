//ExampleView Object constructor
var DishDetailsScreen = function (container,model) {
	
	var backButton = this.backButton = container.find("#backButton");
	var dishImage = this.dishImage = container.find("#dishImage");
	var dishDescription = this.dishDescription = container.find("#dishDescription");
	var totalIngredientPrice = this.totalIngredientPrice = container.find("#totalingredientprice");
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var ingredients= this.ingredients= container.find("#ingredients");

	var totalDishPrice = this.totalDishPrice = container.find("#totaldishprice");
	var confirmDishButton = this.confirmDishButton = container.find("#confirmdish");



}
 

