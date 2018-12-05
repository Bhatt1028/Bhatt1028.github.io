function checkAnswers()
{
    var score = 0;
    var feedback = [];

    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'beedle')
    {
        // increase score by one
        score++; // same as score = score +1
        //push some feedback
        feedback.push("Question 1 is correct!!");
    }
    else if (Q1Answer === 'beadle')
    {
        feedback.push("Almost, but that's just his favorite animal");
    }
    else if (Q1Answer === 'beatle')
    {
        feedback.push("No, not that kind...");
    }
    else if (Q1Answer === 'ganondorf')
    {
        feedback.push("With a face of terror like that you might think...");
    }
    else
    {
        feedback.push("Incorrect!! Question 1 was Beedle!");
    }

    if (document.quiz.a2A.checked === false && document.quiz.a2B.checked === true && document.quiz.a2C.checked === true && document.quiz.a2D.checked === true && document.quiz.a2E.checked === false && document.quiz.a2F.checked === true)
    {
        score++;
        feedback.push("Question 2 is correct!!");
    }
    else
    {
        feedback.push("Incorrect! It was = SS,ST,WW,BotW!")
    }

    if (document.quiz.a3.value === 'mer')
    {
        score++;
        feedback.push("Question 3 is correct!!");
    }
    else
    {
        feedback.push("Incorrect!")
    }

    if (document.quiz.a4.value === 'hc')
    {
        score++;
        feedback.push("Question 4 is correct!!");
    }
    else
    {
        feedback.push("Incorrect!")
    }

    var Q5Answer = document.quiz.a5.value.toLowerCase();
    if (Q5Answer === 'link')
    {
        score++;
        feedback.push("Question 5 is correct!!");
    }
    else
    {
        feedback.push("Incorrect!! ");
    }

    if (document.quiz.a6A.checked === true && document.quiz.a6B.checked === true && document.quiz.a6C.checked === true && document.quiz.a6D.checked === true && document.quiz.a6E.checked === true )
    {
        score++;
        feedback.push("Question 3 is correct!!");
    }
    else
    {
        feedback.push("Incorrect!")
    }


    alert("Your score was... " + score + "!");
    alert(feedback);

}
