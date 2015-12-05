//============LOGIC.JS================
//Calculate the sum of the numbers from 1 to the maximum number
function calculateSum (maxNum) {

    //If a negative number, we will not do a sum from 0 to that number.
    if (maxNum < 0) {
        return 0;
    }

    //Else compute the sum.
    else {
        return ((maxNum*(maxNum+1))/2);
    }
}
