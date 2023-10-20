const btnClick = document.querySelector('button');
btnClick.addEventListener('click', function(e){
    var rndNumber1 = Math.floor(Math.random() * 6) + 1;
    var rndNumber2 = Math.floor(Math.random() * 6) + 1;
    var rndImage1 = "dice" + rndNumber1 + ".png";
    var imageSRC1 = "images/" + rndImage1;

    var rndNumber2 = Math.floor(Math.random() * 6) + 1;
    var rndImage2 = "dice" + rndNumber2 + ".png";
    var imageSRC2 = "images/" + rndImage2;

    var leftDice = document.querySelectorAll('img')[0];
    leftDice.setAttribute('src',imageSRC1)
    var rightDice = document.querySelectorAll('img')[1];
    rightDice.setAttribute('src',imageSRC2)
    if(rndNumber1 > rndNumber2){
        document.querySelector('.header h1').innerHTML = "Player 1 win"
    }else if(rndNumber1 < rndNumber2){
        document.querySelector('.header h1').innerHTML = "Player 2 win"
    }else{
        document.querySelector('.header h1').innerHTML = "It's a Draw"
    }
})
