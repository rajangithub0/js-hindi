function one() {
    console.log('one');
    two(); // Call the next function in the chain
}
function two() {
    console.log('two');
    three(); //
}   
function three() {
    console.log('three');
}

one(); // Start the chain by calling the first function
// This will execute the functions in sequence: one -> two -> three
two(); // This will also work, but it will not call 'one' first
// If you call 'two' directly, it will not execute 'one' first
three(); // This will only execute 'three' directly
// If you call 'three' directly, it will not execute 'one' or 'two' first
// The functions are independent, but they can be chained together