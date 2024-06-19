const restaurants = require('./restaurants.json')

const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
};

// Add methods to prototype

// count number of restaurants stored
ScranAdvisor.prototype.countRestaurants = function () {
    return this.restaurants.length;
};

// find the restaurant by its name
ScranAdvisor.prototype.findByName = function (restaurantName) {
    return this.restaurants.find((restaurant) => restaurant.name === restaurantName);
};

// return array with eaach restaurants name
ScranAdvisor.prototype.getAllNames = function () {
    return this.restaurants.map((restaurant) => restaurant.name);
}

// find the restaurants in a given city
ScranAdvisor.prototype.findByCity = function (restaurantCity) {
    return this.restaurants.filter((restaurant) => restaurant.location.town === restaurantCity);
};

// Extensions
// most common cuisine
ScranAdvisor.prototype.mostCommonCuisine = function () {  
    // get object of number of restaurants per cuisine
    const listOfCuisines = this.restaurants.map((restaurant) => restaurant.cuisines);
    const cuisineObject = {};
    for(subarray of listOfCuisines){
        for(cuisine of subarray){
            if(cuisineObject.hasOwnProperty(cuisine)){
                cuisineObject[cuisine]++;
            } else {
                cuisineObject[cuisine] = 1;
            }
        }
    }
    // get the most common cuisine
    // not the most elegant way
    let mostCommon = Object.values(cuisineObject).sort().reverse()[0];
    return Object.keys(cuisineObject).find(key => cuisineObject[key] === mostCommon);
    
}


let scranAdvisor = new ScranAdvisor(restaurants)
console.log(scranAdvisor.mostCommonCuisine());



module.exports = ScranAdvisor;