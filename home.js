// counter
var loans = setInterval(loansOut, 150);
var estate = setInterval(estateProjects, 150);
var plots = setInterval(landPlots, 60);
var clients = setInterval(happyClients, 50);


let counter1 = 1
function loansOut(){
    document.getElementsByClassName("loan")[0].innerHTML = counter1++;
    if(counter1 == 151){
        clearInterval(loans)
    }
}

let counter2 = 1
function estateProjects(){
    document.getElementsByClassName("estate")[0].innerHTML = counter2++;
    if(counter1 == 99){
        clearInterval(estate)
    }
}

let counter3 = 1
function landPlots(){
    document.getElementsByClassName("plots")[0].innerHTML = counter3++;
    if(counter3 == 301){
        clearInterval(plots)
    }
}

let counter4 = 1
function happyClients(){
    document.getElementsByClassName("clients")[0].innerHTML = counter4++;
    if(counter4 == 321){
        clearInterval(clients)
    }
}