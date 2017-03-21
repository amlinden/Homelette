//ExampleView Object constructor -- this är left navbar objektet
var LeftNavBar = function (container, model) {
	
	// Missing: confim dinner button

	var numberofGuests = this.numberofGuests = container.find("#numberOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	 //this = view (sends listener to model array)
	function viewThis(){
		numberofGuests.html(model.getNumberOfGuests());
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);
	
	viewThis();
	console.log('Updated' + model.getNumberOfGuests()); 

}