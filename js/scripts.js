function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.pizzaPrice = 0;
  }
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

  $(document).ready(function(){
      $("form").submit(function(){
          $(".total").show();

          event.preventDefault();

      });
  });
