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

	function viewThis(){
		var ingredientsList = "";
		var price = 0;
		for (i in model.getDish(1).ingredients){
				ingredientsList += '<p><div class="col-md-8">' + model.getDish(1).ingredients[i].name + '</div><div class="col-md-4">' + model.getDish(1).ingredients[i].price * model.getNumberOfGuests() + ' kr </div></p>';
			};
		for (i in model.getDish(1).ingredients){
				price += model.getDish(1).ingredients[i].price * model.getNumberOfGuests();
			};
		dishImage.html(model.getDish(1).image); 
		dishDescription.html(model.getDish(1).description);
		ingredients.html(ingredientsList);
		totalDishPrice.html(price + " kr");
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);
	
	viewThis();
	console.log('Updated' + model.getNumberOfGuests()); 

}
 

