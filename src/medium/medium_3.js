import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    function creatingNew(value) {
        if((value.horsepower >= minHorsepower) && (value.torque >= minTorque)) {
            return true;
        } else {
            return false;
        }
    }
    let theNew = car_data.filter(creatingNew);
    for (var i = 0; i < theNew.length; i++) {
        for (var j = i + 1; j < theNew.length; j++) {
            if (theNew[i].horsepower < theNew[j].horsepower) {
                let tmp = theNew[i];
                theNew[i] = theNew[j];
                theNew[j] = tmp;
            }
        }
    }
    return theNew;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    function creatingNew(value) {
        if((value.highway_mpg >= minHighway) && (value.city_mpg >= minCity)) {
            return true;
        } else {
            return false;
        }
    }
    let theNew = car_data.filter(creatingNew);
    for (var i = 0; i < theNew.length; i++) {
        for (var j = i + 1; j < theNew.length; j++) {
            if (theNew[i].highway_mpg < theNew[j].highway_mpg) {
                let tmp = theNew[i];
                theNew[i] = theNew[j];
                theNew[j] = tmp;
            }
        }
    }
    return theNew;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {

}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    function creatingNew(value) {
        for (let i = 0; i < years.length; i++) {
            if((value.year) == years[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
    let theNew = car_data.filter(creatingNew);
    for (var i = 0; i < theNew.length; i++) {
        for (var j = i + 1; j < theNew.length; j++) {
            if (theNew[i].year < theNew[j].year) {
                let tmp = theNew[i];
                theNew[i] = theNew[j];
                theNew[j] = tmp;
            }
        }
    }
    return theNew;
}
