var red=document.getElementById("redlabel")
var black=document.getElementById("blacklabel")
var doubleblack=document.getElementById("doubleblack")
var blonde=document.getElementById("blondelabel")
var gold=document.getElementById("goldlabel")
var green=document.getElementById("greenlabel")
var blue=document.getElementById("bluelabel")




 document.getElementById("red").addEventListener("mouseover", myFunction1);
    function myFunction1() {
        
        red.style.display="initial"

        black.style.display="none"
        doubleblack.style.display="none"
        blonde.style.display="none"
        gold.style.display="none"
        green.style.display="none"
        blue.style.display="none"

        $('videos').get(0).currentTime=0;

       
        

    }
    


document.getElementById("black").addEventListener("mouseover",myFunction2);
    function myFunction2(){
        

        black.style.display="initial"

        red.style.display="none"
        doubleblack.style.display="none"
        blonde.style.display="none"
        gold.style.display="none"
        green.style.display="none"
        blue.style.display="none"

        $('#videos').get(0).currentTime = 0;
        
    }


    document.getElementById("double_black").addEventListener("mouseover", myFunction3);
    function myFunction3() {
       

        doubleblack.style.display="initial"

        red.style.display="none"
        black.style.display="none"
        blonde.style.display="none"
        gold.style.display="none"
        green.style.display="none"
        blue.style.display="none"

        $('#videos').get(0).currentTime = 0;
    }

    document.getElementById("blonde").addEventListener("mouseover", myFunction4);
    function myFunction4() {
        

        blonde.style.display="initial"

        black.style.display="none"
        doubleblack.style.display="none"
        red.style.display="none"
        gold.style.display="none"
        green.style.display="none"
        blue.style.display="none"

        $('#videos').get(0).currentTime = 0;
    }

    document.getElementById("gold").addEventListener("mouseover", myFunction5);
    function myFunction5() {
        

        gold.style.display="initial"

        black.style.display="none"
        doubleblack.style.display="none"
        blonde.style.display="none"
        red.style.display="none"
        green.style.display="none"
        blue.style.display="none"

        $('#videos').get(0).currentTime = 0;
    }

    document.getElementById("green").addEventListener("mouseover", myFunction6);
    function myFunction6() {
   

        green.style.display="initial"

        black.style.display="none"
        doubleblack.style.display="none"
        blonde.style.display="none"
        red.style.display="none"
        gold.style.display="none"
        blue.style.display="none"

        $('#videos').get(0).currentTime = 0;
    }

    document.getElementById("blue").addEventListener("mouseover", myFunction7);
    function myFunction7() {
       
        
        blue.style.display="initial"

        black.style.display="none"
        doubleblack.style.display="none"
        blonde.style.display="none"
        gold.style.display="none"
        green.style.display="none"
        red.style.display="none"

        $('#videos').get(0).currentTime = 0;
    }