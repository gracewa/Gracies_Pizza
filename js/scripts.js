function Pizza(size, crust){
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

$(document).ready(function(){
  $(".selectSize").click(function() {
  	event.preventDefault();
  var value = $(this).val();
  alert(value);
});
});
