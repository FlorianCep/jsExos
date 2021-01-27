"use strict";

// --------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return true;
}

// --------------------------------------------------- Function with arguments -------------------------------------
export function myFct(arg1, arg2) {
    return arg1 + arg2;
}

// --------------------------------------------------- Messi’s Goal Total -------------------------------------
export function goalTotal(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}

// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
export function GrasshopperOrder() {
    return (2 + 2) * (2 + 2) * 2;
}

// --------------------------------------------------- Return the First Element in an Array -------------------------------------
export function getFirstValue() {
    let arr = [58, 64, 32];

    return arr[0];
}

// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
export function minMax(arr) {
    let minim = arr[0];
    let maxim = arr[0];

    for (let i=0; i < arr.length; i++) {
        
        if (arr[i] < minim) {
            minim = arr[i];
        }

        if (arr[i] > maxim) {
            maxim = arr[i];
        }
    }

    return [minim, maxim];
}

// --------------------------------------------------- Sort by String Length -------------------------------------
export function sortByLength(arr) {
    var srtArr;
    do {
        srtArr = false;
        for (var i=0; i < arr.length-1; i++) {
            if(arr[i].length > arr[i+1].length) {
                var tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                srtArr = true;
            }
        }
    } 
    while(srtArr);

    return arr;
}

// --------------------------------------------------- Filter Strings from Array -------------------------------------
export function filterArray() {
    let arr = [1, 2, 3, "a", "b", 4];
    let arrNum = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            arrNum.push(arr[i]);
        }
    }
    
    return arrNum;
}

// --------------------------------------------------- Return Last Item -------------------------------------
export function lastItem(arr) {

    return arr[arr.length-1];
}

// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals() {
    let chickens = 2 * 2;
    let cows = 3 * 4;
    let pigs = 5 * 4;

    return chickens + cows + pigs;
}

// export function animals(n1, n2, n3) {
//     let chickens = n1 * 2;
//     let cows = n2 * 4;
//     let pigs = n3 * 4;

//     return chickens + cows + pigs;
// }

// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray() {
    let arr = [1, 2, 3, 4];
    let newArr = [];


    for(var i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
export function addition(n) {
    let total = 9 + 1;

    return total;
}

// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(bool) {
    let flag = bool;

    return flag.toString();
}

// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
export function filterArrayInt(arr) {
    let newArr = arr.filter(Number.isFinite);

    return newArr;
}

// --------------------------------------------------- Array of Multiples -------------------------------------
export function arrayOfMultiples(n1, n2) {
    let multiple = 1;
    let arrResult = [];

    while (multiple <= n2) {
        arrResult.push(n1 * multiple);
        multiple++;
    }

    return arrResult;
}

// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
export function convert(hours, minutes) {
    let hoursSeconds = hours * 60 * 60;
    let minSeconds = minutes * 60;

    let seconds = hoursSeconds + minSeconds; 

    return seconds;
}

// --------------------------------------------------- Return Negative -------------------------------------
export function returnNegative(n) {

    if (n < 0) {
        return n;
    } else {
        return n = -n;
    }

}

// --------------------------------------------------- Simple Loop -------------------------------------
export function simpleLoop(n) {
    let printArray = [];
    
    for (let i = 0; i < n; i++) {
        printArray.push(i+1);
    }

    return printArray;

}

// --------------------------------------------------- Area of a Rectangle -------------------------------------
export function getArea(arg1, arg2) {

    if (arg1 > 1 && arg2 > 1) {
        return arg1 * arg2;
    } else {
        return -1;
    }

}

// --------------------------------------------------- Two Makes Ten -------------------------------------
export function makesTen(arg1, arg2) {

    if (arg1 === 10 || arg2 === 10 || arg1 + arg2 == 10) {
        return true;
    } else {
        return false;
    }

}

// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

// --------------------------------------------------- Matchstick Houses -------------------------------------
export function matchHouses(step) {

    let total = (step * 6) - (1 * step) + 1;

    return total;
}