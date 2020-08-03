function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.pizzaPrice = 0;
  }
  $(document).ready(function(){
    $("form#buildPizza").click(function() {
      var inputtedSize = $("#size").val();
      var inputtedCrust = $("#crust").val();
      var inputtedToppings = $("#toppings").val();

      var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings);

      $("ul#orderSummary").append("<li><span class='contact'>" + newPizza.Size + "</span></li>");

      $("#size").val("");
      $("crust").val("");
      });
  });

  Pizza.prototype.totalCost = function() {
    if (this.size === "500") {
      this.pizzaPrice += parseInt(this.size);
    } else if (this.size === "750") {
      this.pizzaPrice += parseInt(this.size);
    } else if (this.size === "1000") {
      this.pizzaPrice += parseInt(this.size);
    }
    if (this.crust === "crispy") {
      this.pizzaPrice += 100;
    } else if (this.crust === "stuffed") {
      this.pizzaPrice += 200;
    } else if (this.crust === "glutenFree") {
      this.pizzaPrice += 300;
    }
    if (this.toppings === "pepperoni") {
      this.pizzaPrice += 100;
    } else if (this.toppings === "beef") {
      this.pizzaPrice += 100;
    } else if (this.toppings === "chicken") {
      this.pizzaPrice += 100;
    } else if (this.toppings === "vegeterian") {
      this.pizzaPrice += 100;
    }
  };

  $(document).ready(function(event){
    event.preventDefault();
      alert(Pizza.totalCost);
      });
  });
