
var selectDOM = document.getElementById('dice-select');
var selectedValue = parseInt(selectDOM.options[selectDOM.selectedIndex].text);
var amtOptions = document.getElementById('dice-select').options.length;

selectDOM.addEventListener('change', function(){
    selectedValue = parseInt(selectDOM.options[selectDOM.selectedIndex].text);  
})


document.querySelector('.roll').addEventListener('click', function(){

   var dice = [];
   var diceDOM ;
   var currentRoll =0;
   var index;
   for (i=1;i<=selectedValue;i++){
       index = i-1
       dice[index] = Math.floor(Math.random() * 6) + 1;
       diceDOM = document.getElementById('dice-' + i);
       diceDOM.style.display = 'inline-block';
       diceDOM.src = 'dice-' + dice[index] + ".png";
       currentRoll += dice[index];
   }

   for (i = selectedValue + 1; i <= amtOptions; i++){
       document.getElementById('dice-' + i).style.display = 'none';
   }
   document.getElementById('result').textContent = currentRoll;


})