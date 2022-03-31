const menu = {
    // 2. object of course types
    _courses: {
      // 3. 
      appetizers:[],
      mains:[],
      desserts:[],
    },
     // 5. getter for _courses
    get courses() {
      // 6. key/value pairs 
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },
    // 4.1 getter/setter for _courses.appetizers 
    get appetizers() {},
    set appetizers(appetizersCourse) {},
    // 4.2 getter/setter for _courses.mains
    get mains() {},
    set mains(mainsCourse) {},
    // 4.3 getter/setter for _courses.desserts
    get desserts() {},
    set desserts(dessertsCourse) {},
   
   // 7. method to add dishes to course types
   addDishToCourse(courseName, dishName, dishPrice) {
     // 7.1 creates a object with name and price
     const dish = {
      dishName: dishName,
      dishPrice: dishPrice,
     };
  
     // 8. . push() the objected created into the selected courseName array in _courses 
    this._courses[courseName].push(dish);
   },
  
   // 9. gets random dish from _courses[courseName]
   getRandomDishFromCourse(courseName) {
     // 10.1 save the array into dishes
     let dishes = this._courses[courseName];
    // 10.2 get a random number from 0 to the length of the array held in dishes from _courses
     let randomDish = Math.random() * dishes.length;
     // 10.3 rounds the number
     randomDish = Math.floor(randomDish);
     // 10.4 chooses one of the dishes inside the array
     return dishes[randomDish];
   },
  
   // 11. generating a meal randomly from the items in _courses[courseName]
  generateRandomMeal() {
    // 11.1 storing the random dish from appetizers in a variable
    let appetizer = this.getRandomDishFromCourse('appetizers');
    // 11.2 storing random dish from mains and desserts also in variables
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    // 11.3.1 calculating total price of meal generated
    let totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
    // 11.3.2 string with information for user
    return `Your meal will be composed of: 

  ${appetizer.dishName} to start, ${main.dishName} for main and ${dessert.dishName} for dessert.
  
  Total costs will be ${totalPrice}. 
  
  Enjoy your meal!`
    },
  };

  // 12. adding content to menu._courses[courseName] arrays
  // 12.1 appetizers
menu.addDishToCourse('appetizers','Tuna Tartar',9.50);
menu.addDishToCourse('appetizers','Thai Lolipops',9.00);
menu.addDishToCourse('appetizers','Bread and Olives',3.50);
  //12.2 mains
menu.addDishToCourse('mains','Steak Frites',13.00);
menu.addDishToCourse('mains','Sea Bass', 12.50);
menu.addDishToCourse('mains','Caeser Salad',9.00);
  // 12.3 desserts
menu.addDishToCourse('desserts','Sticky toffee pudding',4.00);
menu.addDishToCourse('desserts','Trio of ice cream',3.50);
menu.addDishToCourse('desserts','Big cheese plater',7.00);
menu.addDishToCourse('desserts','Small cheese plater',4.00);

  // 13. testing
  
let meal = menu.generateRandomMeal()
console.log(meal);
  
 
  
