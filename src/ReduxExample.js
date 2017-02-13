// import redux from 'redux';

console.log('Starting redux example');

/** Pure Function
 * 
 * This is an example of pure function.
 * A pure function doesn't depend on and
 * doesn't modify the states of variables
 * out of it's scope.
 * Conclusively, that means a pure function always
 * returns the same result given the same parameters 
 */
function addPure(a, b) { return a + b };
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