//ExampleView Object constructor
//this är left navbar objektet
var LeftNavBar = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	 //this = view (sends listener to model array)
	
	

	this.update = function(){

	}
	
	model.addObserver(this);
	this.numberOfGuests.html(model.getNumberOfGuests());

}
 
