score = 0;
cross = true ;

document.onkeydown = function (e) {
   console.log("Key code is:", e.keyCode);
if (e.keyCode == 38){
   me = document.querySelector('.me');
   me.classList.add('animateme');
   setTimeout(() =>{
me.classList.remove('animateme')
   },1000);
}
if (e.keyCode == 39){
   me = document.querySelector('.me');
   meX = parseInt(window.getComputedStyle(me,null).getPropertyValue('left'));
   me.style.left = meX + 112 + "px" ;
}
if (e.keyCode == 37){
   me = document.querySelector('.me');
   meX = parseInt(window.getComputedStyle(me,null).getPropertyValue('left'));
   me.style.left = meX - 112 + "px" ;
}
}

setInterval(() => {
   me = document.querySelector('.me');
   gameOver = document.querySelector('.gameOver');
   obstacle = document.querySelector('.obstacle');

   dx = parseInt(window.getComputedStyle(me,null).getPropertyValue('left'));
   dy = parseInt(window.getComputedStyle(me,null).getPropertyValue('top'));
   ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
   oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy); 

console.log(offsetX,offsetY);

    if(offsetX < 73 && offsetY<52){
       gameOver.style.visibility= 'visible';
       obstacle.classList.remove('obstacleAni')
      }
else if(offsetX<145 && cross){
   score += 1;
   updateScore(score);
   cross = false;
   setTimeout(()=>{
      cross = true;
      },1000);
}

}, 10);

function updateScore(score){
   scoreCount.innerHTML = "Your Score: " + score;
}
