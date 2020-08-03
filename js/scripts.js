function Pizza(size, crust){
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

Pizza.prototype.fullSizeCrust = function() {
  return this.size + " " + this.crust;
}

$(document).ready(function(){
  $("#selectOrder").click(function() {
  	event.preventDefault();
  var value = $(this).val();
  alert(value);
});
});

$(document).ready(function() {
  $("form#buildPizza").clickfunction(event) {
    event.preventDefault();

    var inputtedSize = $("#selectSize").val();
    var inputtedCrust = $("#selectCrust").val();

    var newPizza = new Pizza(inputtedSize, inputtedCrust);

    $("ul#orderList").append("<li><span class='orderItem'>" + newPizza.fullSizeCrust + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
