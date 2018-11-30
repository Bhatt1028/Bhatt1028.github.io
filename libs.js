function reveals()
{
    var words = [];
    words.push(document.getElementById("1").value);
    words.push(document.getElementById("2").value);
    words.push(document.getElementById("3").value);
    words.push(document.getElementById("4").value);
    words.push(document.getElementById("5").value);
    words.push(document.getElementById("6").value);
    words.push(document.getElementById("7").value);
    words.push(document.getElementById("8").value);
    words.push(document.getElementById("9").value);
    words.push(document.getElementById("10").value);
    words.push(document.getElementById("11").value);
    words.push(document.getElementById("12").value);
    words.push(document.getElementById("13").value);
    words.push(document.getElementById("14").value);
    return "CUSTOMER: Oh, waiter! Would you please bring me a " + words[5] + "?\n" +
        " I want to see what today's specials are.\n" +
        "\n" +
        "<br> WAITER: Today's specials are cream of " + words[6] + " soup and\n" +
        " T-bone " + words[12] + ". Does that sound good?\n " +
        "\n" +
        "<br> CUSTOMER: Yes, but I'll have the roast prime " + words[7] + " of\n" +
        " beef with the " + words[0] + " pudding.\n" +
        "\n" +
        "<br> WAITER: We're out of that. How about a sizzling sirloin "
        + words[8] + " and a " + words[1] + " green salad?\n" +
        "\n" +
        "<br> CUSTOMER: No, thanks, I'd rather have the " + words[2] + " fried chicken.\n" +
        "\n" +
        "<br> WAITER: Sorry, but we're out of that, too. How about soft-shell " + words[11] + ". <br>CUSTOMER: No, thanks. Do you have any roast Long Island " + words[9] + "?\n" +
        "\n" +
        "<br> WAITER: Sorry, no. Why don't you try our " + words[3] + " goulash\n" +
        " with homemade " + words[10] + " sauce?\n" +
        "\n" +
        "<br> CUSTOMER: No, thanks. Just bring me a " + words[4] + " egg\n" +
        " sandwich and a cup of black " + words[13] + ".";
}

// Thanks to RedKid.net for story.