import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    // sort the array
    let median = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    if ((array.length % 2) == 0) {
        let lower = array.length/2;
        let upper = lower + 1;
        median = ((array[lower] + array[upper]) / 2);
    } else {
        let middle = (array.length + 1)/2;
        median = array[middle];
    }
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    // sort the array
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    let result = "{ \n  length: " + array.length + ",\n";

    // find the sums
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
    }
    result = result + "  sum: " + sum + ",\n";

    // find the mean
    let mean = sum/array.length;
    result = result + "  mean: " + mean + ",\n";

    // find the median
    let median = 0;
    if ((array.length % 2) == 0) {
        let lower = array.length/2;
        let upper = lower + 1;
        median = ((array[lower] + array[upper]) / 2);
    } else {
        let middle = (array.length + 1)/2;
        median = array[middle];
    }
    result = result + "  median: " + median + ",\n";

    // add min and max to result
    result = result + "  min: " + array[0] + ",\n";
    result = result + "  max: " + array[array.length - 1] + ",\n";

    // find the variance
    let variance = 0;
    for (let i = 0; i < array.length; i++) {
        let diff = array[i] - mean;
        diff = diff * diff;
        variance = variance + diff;
    }
    variance = variance / array.length;
    result = result + "  variance: " + variance + ",\n";

    // find the standard deviation
    let stddev = Math.sqrt(variance);
    result = result + "  standard_deviation: " + stddev + "\n}";

    return result;
}

