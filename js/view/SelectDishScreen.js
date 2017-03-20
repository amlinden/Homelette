//ExampleView Object constructor
var SelectDishScreen = function (container, model) {
	
	//search button
	this.search = container.find("#search");
	//option: dessert main starter
	this.coursebutton = container.find("#coursebutton");


	//search word keywords
	var searchValue= this.searchvalue = container.find("#searchvalue");
	//displayed dishes with search word
	var dishesShow = this.dishesshow = container.find("#dishesview");
	
}
 
