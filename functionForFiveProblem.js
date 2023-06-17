// Problem 1: Let's play a mind game.
/* This function return a number after some calculation.
This calculation follow some rules.
1. get input positive number .
2. Multiplication this number by 3 and add 10.
3. Again divided by 2. and subtraction by 5.
return this value. 
*/
function mindGame(number){
    if(number < 0 || typeof(number)== 'string'){
        console.log("Please Enter Positive Number.");
    }
    else{
        const mindNumber = (number*3+10)/2-5;
        return mindNumber;
    }
}



// Problem 2: Finding even or odd.
// This Function return even or odd for the number of character of string.
function evenOdd(string){
    const numberOfChar = string.length;
    if(typeof(string)!= 'string'){
        console.log("Please Enter a String.");
    }
    else{
        if(numberOfChar%2==0){
            return 'even';
        }
        else{
            return 'odd';
        }   
    }
}


//Problem 3: Is Less Or Greater than seven.
/*This Function get a number and subtraction this number by 7.
After subtraction if this result is less than 7 then return this result.
Other wise return double of the input. */ 
function isLGSeven(number){
    const difference = number - 7;
    if(typeof(number) != 'number'){
        console.log("Please Enter a Number");
    }
    else{
        if(difference < 7){
            return difference;
        }
        else{
            return number*2;
        }
    }
}



//Problem 4: Find Bad data.
// This function Accept a Array as input. And return the number of negative number in array.
function findingBadData(aArray){
    let dadData = 0;
    if(Array.isArray(aArray) == 'false'){
        console.log("Please Enter a valid Input.");
    }
    else{
        for(let i=0; i<aArray.length; i++){
            if(aArray[i] < 0){
                dadData++ ;
            }
        }
        return dadData;
    }
}



//Problem 5: Convert your gems into diamond.
/*This function calculate total Diamond number for three friend gems.
 If total Diamond gether than 2000 then subtract 2000 from total Diamond.*/
function gemsToDiamond(first, second, third){
    if(typeof(first) != 'number' || typeof(second) != 'number' || typeof(third) != 'number'){
        console.log("Please Enter all valid Number.");
    }
    else{
        const firstGems = 21;
        const secondGems = 32;
        const thirdGems = 43;
        const totalDiamond = ((first*firstGems) + (second*secondGems) + (third*thirdGems));
        if(totalDiamond>2000){
            return (totalDiamond-2000)
         }
         else{
            return totalDiamond;
         }

    }
}
