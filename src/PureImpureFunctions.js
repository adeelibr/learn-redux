console.log('Pure Functions & Impure Functions');

/**
 * Three Principles Of Pure Functions
 * 
 * 1- Same output with the same input
 * 2- No side effects, It can't take variable on the global state
 *    and it shouldn't be updating any variable outside it's scope.
 * 3- Avoid promises and async calls. Pure functions should be
 *    synchronous. Meaning that they don't do any i/o requests
 *    like accessing database or making an HTTP request to some
 *    third pary API.
 */

/** Pure Function
 * 
 * This is an example of pure function.
 * A pure function doesn't depend on and
 * doesn't modify the states of variables
 * out of it's scope.
 * Conclusively, that means a pure function always
 * returns the same result given the same parameters 
 */
function addPure (a, b) { return a + b };
console.log('(Pure Function) Add 4+4= ', addPure(4,4));

/**
 * Impure Function
 *  
 * This is not an pure function because variable `a` is
 * defined outside the scope of addImpure() function which can 
 * effect the output for our addImpure() function
 * */ 
let a = 3;
function addImpure (b) { return a + b };
console.log('(Impure Function) Add 3+4= ', addImpure(4));

/**
 * Impure Function Example #2
 * 
 * This is not a pure function because variable `result` is
 * defined outsite, althouth `result` variable is not declared
 * outside, but in addImpureTwo() function the `result` variable
 * value is being assigned which makes this function an impure. 
 */
let result;
function addImpureTwo (a,b) {
    result = a + b;
    return result;
}
console.log('(Impure Function Example #.2) Add 2+2= ', addImpureTwo(2,2));

/** 
 * Impure Function Example #3
 * 
 * This is not an impure function, because given
 * that we give it two variables a,b and although
 * it does not effect the scope of variables outside it's
 * block, but given that we provide a,b and the result
 * we get is a+b+(some uknown value) which is `new Date().getSeconds`
 * we don't get the output we expect
 */
function addImpureThree (a,b) {
    return a + b + new Date().getSeconds();
}
console.log('(Impure Function Example #.3) Add 5+2= ', addImpureThree(5,2));


function changeProp (obj) {
    /**
     * This will change value of startingValue variable itself
     * Avoid this method which is commented
     * The commented version of code here is an
     * example of Impure function
     * 
     * obj.name = 'Adeel';
     * return obj;
     * 
     * Instead use the uncommented method below
     * The below code is Pure function
     */
    return {
        ...obj,
        name: 'Adeel Imran'
    };
}
var startingValue = { name: 'James Bond', age: 24 };
var res = changeProp(startingValue);
console.log('changeProp() called', res);
console.log('startingValue after calling changeProp() ', startingValue);