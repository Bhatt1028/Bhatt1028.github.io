function smallToTen(num, base)
{
    num = Number(document.getElementById("batman").value); //13
    base = Number(document.getElementById("firstBase").value); //base of 'num' to convert to base 10
    tenNum = 0; //stores number to be output at the end
    var numLength = num.toString().length; //converts number to a String, then counts the number of characters in the string
    // in this case, length of '1101' is 4
    while(numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1)); //gets denominator of fraction
        // for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1.... 101/100 = 1.... 01/10 = 0.... 1/1 = 1....
        tenNum =tenNum + currentDigit*Math.pow(base, numLength-1);
        // currentDigit*2^3 ... currentDigit*2^2 ... currentDigit*2^1 ... etc
        num = num%denominator; // reduces num for the next iteration
        // 1101 101 01 1
        numLength--; //decrease the numLength value by 1 ... otherwise will loop infinitely

    }

}

function tenToSmall(num, base) // convert a base-10 number to a smaller base
{
    // this function is expecting a number (num) in base ten
    // it will convert the number (num) to value of base'
    num = tenNum; //number to convert
    base = Number(document.getElementById("homePlate").value); // destination base
    smallNum =""; //store remainders here

    while (num > 0) //continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5=2 % returns remainders
        //setup num for the next iteration of the loop
        num = Math.floor(num/Number(document.getElementById("homePlate").value));
        /*alert(smallNum);
        alert(num); */

    }


}

function baseToBase()
{
    smallToTen();
    tenToSmall();
    return smallNum
}

function smalls(num, base)
{
    var num = Number(document.getElementById("bats").value); //13
    var base = Number(document.getElementById("base1").value); //base of 'num' to convert to base 10
    var tent = 0; //stores number to be output at the end
    var numLengt = num.toString().length; //converts number to a String, then counts the number of characters in the string
    // in this case, length of '1101' is 4
    while(numLengt > 0)
    {
        var denominator = Math.pow(10,(numLengt-1)); //gets denominator of fraction
        // for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1.... 101/100 = 1.... 01/10 = 0.... 1/1 = 1....
        tent =tent + currentDigit*Math.pow(base, numLengt-1);
        // currentDigit*2^3 ... currentDigit*2^2 ... currentDigit*2^1 ... etc
        num = num%denominator; // reduces num for the next iteration
        // 1101 101 01 1
        numLengt--; //decrease the numLength value by 1 ... otherwise will loop infinitely

    }
    return tent
}

function tenz(num, base) // convert a base-10 number to a smaller base
{
    // this function is expecting a number (num) in base ten
    // it will convert the number (num) to value of base'
    var nums = document.getElementById("xd").value; //number to convert
    var basse = Number(document.getElementById("homs").value); // destination base
    var smallNums =""; //store remainders here

    while (nums > 0) //continue looping while num isn't zero
    {
        smallNums = nums%basse + smallNums; //3%5=2 % returns remainders
        //setup num for the next iteration of the loop
        nums = Math.floor(nums/Number(document.getElementById("homs").value));
        alert(smallNums);
        alert(nums);

    }
    return smallNums

}