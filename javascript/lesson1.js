DATATYPES:

String  (examples: "hello" , 'hi')
Number (examples: 4, 5, 99, 1000)
Boolean (two possible values: true , false)
Undefined (value: undefined)
    Example of undefined datatype:
    let x;
    let x = undefined;
Null    (value: null)
    Example of null datatype:
    let x = null;
    
Arrays 
-lists of data with structure [ ] (empty array)
-start at position/index 0
        
Objects
- set of keys/properties & values with structure { } (empty object)




VARIABLE REASSIGNING
    Example:
        let number1 = 7;
        number1 = 8;
        number1 += 1;
        
        number1 will be equal to 9 now


FUN WITH ARRAYS

    let carParts = ["wheel", "bumper", "dash"]
    
    carParts.length
    3
    
    
    carParts.indexOf("seat")
    -1
    
    
    carParts.indexOf('bumper')
    1
    
    carParts[4]
    undefined



let sentence = "Danny is 'good' at Javascript";

console.log(sentence)  //console logging variables is the variable name without quotations

console.log("Danny is 'good' at Javascript"); //console logging strings



Q.  Define an object that describes yourself using the following keys
        pets (use array if you have multiple pets)
        overTwentyFour (set this equal to a boolean)
        hobbies (use array, you probably have multiple hobbies;


let me = {
    name: 'Darrin',
    pets: ["Autumn", 'Opus', "Blackjack", 'Simba'],
    overTwentyFour: true,
    hobbies: ["soccer", "SUP", "guitar", "coding"]
};


