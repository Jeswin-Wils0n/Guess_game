'use strict';
let random = getRandomInt(1,10);
let score = 10;
let highScore = 0;
document.getElementById('again-btn').disabled = true;
document.querySelector('.overlay').classList.add('hidden');

function checkValue(){
    let val = document.getElementById('userValue').value;
    if(val==random){
        let svg = document.getElementById('Capa_1');
        svg.style.display= 'none';       
        let result = document.getElementById('result-text')
        result.innerText = random+"";
        document.getElementById('userValue').disabled = true;
        toggleTheme()
        toggleButton()
        // calcScore(true)
        document.getElementById('again-btn').disabled = false;
        
        score>highScore ? highScore=score : highScore+=0;
        document.getElementById('highscore').textContent = highScore<10? "0"+highScore: highScore;

    }
    else{
        if(score==1){
            document.querySelector('.overlay').classList.remove('hidden')
        }
        else{
            score--;
            document.getElementById('score').textContent = score;
            document.querySelector('.userInput > input').classList.add('shake');
            let inputBox = document.getElementById('userValue');
            // inputBox.addEventListener('animationend', () => {
            //     inputBox.classList.remove('shake');
            // },{once:true});
            setTimeout(()=> {
                inputBox.classList.remove('shake');
            },700);
        }
    }
    // calcScore(false);
    clueMessage(Number(val));
}
function toggleButton(){

    document.getElementById('tick').style.display= 'block';
    let checkButton = document.getElementById('check-btn');
    checkButton.classList.toggle('correct');
    checkButton.disabled = true;
    document.getElementById('check-txt').textContent= '';
}
function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.trunc(Math.random() * max ) + min; 
  }

function clueMessage(guess){
    let messageElement = document.querySelector('.description-title');
    messageElement.textContent = guess>random ? 'Too high' : 'too low';
    if(guess===random){
        messageElement.textContent="🎉 That's right" 
    }
}

function resetGame(){
    score = 10;
    let result = document.getElementById('result-text')
    result.innerText = "";
    document.getElementById('Capa_1').style.display= 'block';
    document.getElementById('userValue').value=''; 
    document.getElementById('tick').style.display= 'none';
    document.getElementById('check-txt').textContent = 'Check';
    document.getElementById('check-btn').classList.toggle('correct'); 
    document.getElementById('check-btn').disabled = false;
    document.getElementById('again-btn').disabled = true;
    document.getElementById('userValue').disabled = false;
    document.querySelector('.description-title').textContent = 'Start Guessing...';
    document.getElementById('score').textContent = score
    random = getRandomInt(1,10);
    toggleTheme();
}

// function calcScore(bool){
    
//     bool ? highScore=score : score--;
//     document.getElementById('score').textContent = score;

//     if(score===0){
//         document.querySelector('.description-title').textContent = '💔 You lost!!'  ;
//         document.getElementById('check-btn').disabled = true;
//         document.getElementById('userValue').disabled = true;
//         document.getElementById('again-btn').disabled = false;
//     }
    
// }

function toggleTheme(){
    let element = document.getElementsByClassName('title')[0];
    let currentTheme = window.getComputedStyle(element).color;
    if(currentTheme==='rgb(255, 255, 255)'){
        element.style.color = "black";
        element.style.borderBottom = "10px solid black";
        document.getElementsByClassName('description')[0].style.color = "black";
        document.getElementById('userValue').style.color = 'black';
        document.getElementById('userValue').style.border = '4px solid black';
        document.body.style.background = 'linear-gradient(to top left, #28b487, #7dd56f)'
        document.getElementById('Icons').setAttribute('fill', '#000000');
        document.getElementById('Icons-1').setAttribute('fill', '#000000')
    }
    else if(currentTheme==="rgb(0, 0, 0)"){
        element.style.color = "white";
        element.style.borderBottom = "10px solid white";
        document.getElementsByClassName('description')[0].style.color = "white";
        document.getElementById('userValue').style.color = 'white';
        document.getElementById('userValue').style.border = '4px solid white';
        document.body.style.background = 'black';
        document.getElementById('Icons').setAttribute('fill', '#ffffff');
        document.getElementById('Icons-1').setAttribute('fill', '#ffffff')
    }

}

document.querySelector('.tryAgain').addEventListener('click',()=>{
    score = 10;
    document.getElementById('score').textContent = score;
    document.querySelector('.description-title').textContent = 'Start Guessing...';
    document.getElementById('userValue').value='';
    document.querySelector('.overlay').classList.add('hidden');
})