
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

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Convert Number Bases</title>
    <script src="myscriptx.js"></script>
</head>
<body>




</form>
<form name="toBinary">
    <input type="text" id="result">
    <button type="button" onclick="document.toBinary.result.value=smallToTen()">toBinary</button>


</form>
</body>
</html>*/