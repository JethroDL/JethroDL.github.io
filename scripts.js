$(".grt-cookie").grtCookie();

$(document).ready(function(){
    $("#singlesImg").click(function(){
        $("#albumDescription").text("Singles is the first greatest hits album of singer Alison Moyet, released in 1995. The album includes two previously unreleased tracks, Moyet's version of 'The First Time Ever I Saw Your Face' and 'Solid Wood', as well as a number of hits from the singer's stint in 1980s electro-pop band Yazoo. The album was re-released by Sony the following year as a two-disc set, Singles/Live, the second disc being a live recording of Alison on tour, again in 2000 as a one-disc set under the title Best of The Best – Gold and a third time in 2001 as The Essential Alison Moyet with a slightly revised track listing.");
    });
    $("#voiceImg").click(function(){
        $("#albumDescription").text("Voice is the sixth studio album by British singer-songwriter Alison Moyet, released by Sanctuary in 2004. It is a covers album, featuring slow-tempo, classic songs from a number of different genres, designed to showcase the singer's voice, with orchestral backing. A deluxe edition of Voice was released by Cooking Vinyl on 2 October 2015.");
    });
    $("#otherImg").click(function(){
        $("#albumDescription").text("Other is the ninth studio album by English singer-songwriter Alison Moyet, released on 16 June 2017, by Cooking Vinyl. It is her first album of new material since 2013's The Minutes, which saw her returning to her electronic music roots.");
    });
    $("#minutesImg").click(function(){
        $("#albumDescription").text("The Minutes (stylised as the minutes) is the eighth studio album by English singer-songwriter Alison Moyet, released on 3 May 2013 by Cooking Vinyl. It is the first album of new material released since 2007's The Turn, and a marked return to her electronic roots. While creating the album Moyet stated that it was not aimed at the charts, though the album debuted at number five on the UK Albums Chart with first-week sales of 13,536 copies, Moyet's highest-charting studio album since Raindancing reached number two in 1987. The Minutes received overwhelmingly positive reviews from music critics, many of whom referred to the album as her 'best in decades'.");
    });
    $("#hoodooImg").click(function(){
        $("#albumDescription").text("Hoodoo is the third studio album by British singer-songwriter Alison Moyet. It was released in 1991, reached No. 11 in the UK and features the singles 'It Won't Be Long', 'Wishing You Were Here', 'Hoodoo' and 'This House'. Largely produced by Pete Glenister, the album includes contributions from Kirsty MacColl, Steve Lillywhite, Marius De Vries, and ex-Fine Young Cannibals Andy Cox and David Steele. A deluxe edition of Hoodoo was released by BMG on 25 November 2016.");
    });
    $("#alfImg").click(function(){
        $("#albumDescription").text("Alf is the debut studio album by British singer-songwriter Alison Moyet, released in 1984. The album launched Moyet's solo career following the disbanding of synthpop duo Yazoo. The album reached No. 1 in the UK and features the singles 'Love Resurrection', 'All Cried Out', 'Invisible' and 'For You Only'. A deluxe edition of Alf was released by BMG on 25 November 2016.");
    });
});

window.onload=preparePage();

function preparePage(){
    var indexSingles = document.getElementById("indexSingles");
    var indexVoice = document.getElementById("indexVoice");
    var indexOther = document.getElementById("indexOther");

    indexSingles.addEventListener("click", function(){
        var text = "Blue eyed dressed for every situation. Moving through the doorway of a nation. Pick me up and shake the doubt, baby I can't do without. Move out, don't mess around. Move out, you bring me down. Move out, how you get about, Don't make a sound just move out.  - Track 4: Situation"
        var node = document.createElement("p");
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("singlesSection").appendChild(node);
    })

    indexVoice.addEventListener("click", function(){
        var text = "Round like a circle in a spiral. Like a wheel within a wheel. Never ending or beginning, on an ever spinning reel. Like a snowball down a mountain, or a carnival baloon. Like a carousel that's turning, running rings around the moon. Like a clock whose hands are sweeping, past the minutes of it's face. And the world is like an apple, rolling silently in space. Like the circles that you find, in the windmills of your mind.  - Track 1: Windmills of Your Mind"
        var node = document.createElement("p");
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("voiceSection").appendChild(node);
    })

    indexOther.addEventListener("click", function(){
        var text = "I don't know precisely which day, coloured me other, perchance it may have been a slow bleed. So I cut out whicever shape I need. I dont sue for rescue - I'm as free as I have ever been. Don't want another rock, to hang about my neck. You see bejewelled, I see bedecked, in dead stars. And nothing, touching me, nothing, touching me.  - Track 8: Other"
        var node = document.createElement("p");
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("otherSection").appendChild(node);
    })
}



