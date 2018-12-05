function checkAnswers()
{
    var score = 0;
    var feedback = [];

    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'beedle')
    {
        score++;
        feedback.push("Question 1 is correct!!");
    }
    else if (Q1Answer === 'beatle')
    {
        feedback.push("Question 1 was incorrect!! No, not those beatles...");
    }
    else if (Q1Answer === 'beetle')
    {
        feedback.push("Question 1 was incorrect!! No, not those beatles...");
    }
    else if (Q1Answer === 'ganondorf')
    {
        feedback.push("Question 1 was incorrect!! But with a face of terror like that, you might think...");
    }
    else
    {
        feedback.push("Question 1 was incorrect!! Beedle was the answer!");
    }

    if (document.quiz.a2A.checked === false && document.quiz.a2B.checked === true && document.quiz.a2C.checked === true && document.quiz.a2D.checked === true && document.quiz.a2E.checked === false && document.quiz.a2F.checked === true)
    {
        score++;
        feedback.push("Question 2 is correct!!");
    }
    else
    {
        feedback.push("Question 2 was incorrect!! It was = SS,ST,WW,BotW!")
    }

    if (document.quiz.a3.value === 'mer')
    {
        score++;
        feedback.push("Question 3 is correct!!");
    }
    else
    {
        feedback.push("Question 3 was incorrect!! He's a merchant!")
    }

    if (document.quiz.a4.value === 'hc')
    {
        score++;
        feedback.push("Question 4 is correct!!");
    }
    else
    {
        feedback.push("Question 4 was incorrect!! His favorite animal was the Horned Colossus Beetle!")
    }

    var Q5Answer = document.quiz.a5.value.toLowerCase();
    if (Q5Answer === 'link')
    {
        score++;
        feedback.push("Question 5 is correct!!");
    }
    else
    {
        feedback.push("Question 5 was incorrect!! It's LINK!");
    }

    if (document.quiz.a6A.checked === true && document.quiz.a6B.checked === true && document.quiz.a6C.checked === false && document.quiz.a6D.checked === true && document.quiz.a6E.checked === false )
    {
        score++;
        feedback.push("Question 6 is correct!!");
    }
    else
    {
        feedback.push("Question 6 was incorrect!! You could obtain arrows, insects, and potions from him!")
    }


    if (score <= 2)
    {
        alert("Your score was... " + score + ". Pathetic.");
        alert(feedback[0]);
        alert(feedback[1]);
        alert(feedback[2]);
        alert(feedback[3]);
        alert(feedback[4]);
        alert(feedback[5]);
        alert("...is that even possible? Try harder!")
    }
    else if (score <= 4)
    {
        alert("Your score was... " + score + ".");
        alert(feedback[0]);
        alert(feedback[1]);
        alert(feedback[2]);
        alert(feedback[3]);
        alert(feedback[4]);
        alert(feedback[5]);
    }
    else if (score === 5)
    {
        alert("Your score was... " + score + "!");
        alert(feedback[0]);
        alert(feedback[1]);
        alert(feedback[2]);
        alert(feedback[3]);
        alert(feedback[4]);
        alert(feedback[5]);
        alert("That's a pretty good score!")
    }
    else
    {
        alert("Your score was... " + score + "! Nice job!");
        alert(feedback[0]);
        alert(feedback[1]);
        alert(feedback[2]);
        alert(feedback[3]);
        alert(feedback[4]);
        alert(feedback[5]);
        alert("You're a Beetle loving legend! (Or maybe you cheated by looking at the code, or took the quiz twice?.. Eh, Whatever.)")
    }



}
