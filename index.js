function random_generator(){
    var randomNumber= Math.random();
    randomNumber*=6;
    randomNumber= Math.floor(randomNumber)+1;
    return randomNumber;   
}

var randomNumber1=random_generator();
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=random_generator();
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if( randomNumber1 > randomNumber2){
    document.querySelector(".container h1").textContent="Player 1 wins!!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").textContent="Player 2 wins!!";

}
else{
    document.querySelector(".container h1").textContent="Draw!!";
}