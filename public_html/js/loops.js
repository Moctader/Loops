/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function l01() {    

    let name1 = document.getElementById("name1").value

    for (i =0; i<5; i++){
        document.getElementById("first_name").innerHTML += name1 + "<br>";

    }

    let j = 0;
    let name2 = document.getElementById("name2").value
    while (j < 5){
        document.getElementById("last_name").innerHTML += name2 + "<br>";
        j++;
    }
}

function l02() {    

    for (k = 5; k<=50; k+=5)
    document.getElementById("five").innerHTML += k +" "

    let numbers =6;
    while(numbers <=60){
        document.getElementById("six").innerHTML += numbers +" "
        numbers += 6
    }

}

function l03() {
    let amount = Number(document.getElementById("amount").value)

    let stars1 = document.getElementById("stars1");
    let stars2 = document.getElementById("stars2");

    document.getElementById("stars1").innerHTML=""
    document.getElementById("stars2").innerHTML=""

    star ="";
    for (i=0; i< amount; i++){
        star = star + "*"
        document.getElementById("stars1").innerHTML += star +"<br>";
    }


// while loop using In the first row there is one star,in the second row two stars, etc. until in the last row
    star= ""
    j = 0;
    while (j < amount){
        star += "*"
        document.getElementById("stars2").innerHTML += star +"<br>"
        j++;
    }

}


function l04() {
    //document.getElementById("numbers1").innerHTML=" "

    for (i = 10; i >=-10; i--){
        document.getElementById("numbers1").innerHTML += i + " ";
    }
    for(i=-20; i<=20; i+=2){
        document.getElementById("numbers2").innerHTML += i + " ";
    }

    for(i=29; i>=1; i-=2){
        document.getElementById("numbers3").innerHTML += i + " ";
    }

}

function l05() {
    let min = Number(document.getElementById("min").value)
    let max = Number(document.getElementById("max").value)

    for (i = min; i<=max; i++){
        if (i % 3 === 0){
            document.getElementById("divisibility3").innerHTML += i + " ";
        }

        if (i % 5 === 0){
            document.getElementById("divisibility5").innerHTML += i + " ";

        }
    }


}

// copy and paste here the random number generator function 

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// and use it in the following functions



function l06() {  
    let zeros = 0;
    let ones = 0;
    
    for (let i = 0; i < 1000; i++) {
        let digit = getRndInteger(0,1);
        if (digit === 0){
            zeros++;
        }
        else{
            ones++;
        }
    }
document.getElementById("zeros").innerHTML = zeros;
document.getElementById("ones").innerHTML = ones;


}

function l07() {
    document.getElementById("week").innerHTML = getRndInteger(1, 52);
    let result =""
    for (i = 1; i<=7; i++){
        result += getRndInteger(0,9) +" "
    }
    document.getElementById("joker").innerHTML = result;

}

function l08() {
    let multiplier = document.getElementById("multiplier").value;

    let result1 = ""
    for (i = 0; i <= 10; i++){
        amount = multiplier * i;

        result1 += multiplier + " * " + i + " = " + amount +"<br>"
    }
    document.getElementById("table").innerHTML = result1
}

function l09() {
    const space = ";&nbsp;&nbsp;";
    document.getElementById("multiplication").innerHTML = " "

    let result2 = "";
    for (i = 0; i <= 10; i++){
        for(j = 0; j <= 20; j++){
           let amount = i * j
            result2 += i + " * " + j + " = " + amount + space  
        }

        result2 += "<br>"
    }

    document.getElementById("multiplication").innerHTML = result2

}

