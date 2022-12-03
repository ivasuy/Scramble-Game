
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let randWords = "";

let sWords = ['python','javascript','java','php','c++','c#','ruby','reactsjs','angular',
'android','sql','swift','css','nodejs','expressjs','perl'];

const createNewWords = ()=>{
  let randomNumber = Math.floor(Math.random() * sWords.length);
  let newTempWords = sWords[randomNumber];
  return newTempWords;
}

const scramble = (arr) =>{

  for ( let i = arr.length - 1; i > 0; i--){
    let temp = arr[i];
    // console.log(temp);
    let j = Math.floor(Math.random()*(i+1));
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(i);
    // console.log(j);
  }
  return arr;
}

btn.addEventListener('click',function(){
  if(!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    randWords = scramble(newWords.split("")).join("");
    msg.innerHTML = `Guess the Word: ${randWords}`;
  }else{
    let tempWords = guess.value;
    if ( tempWords === newWords ){
      // console.log('correct');
      play = false;
      msg.innerHTML = `GREAT !!! Your Guess is Correct ${newWords}`;
      btn.innerHTML = "Continue";
      guess.classList.toggle('hidden');
      guess.value = "";
    }else{
      // console.log('incorrect');
        msg.innerHTML = `SORRY !!! Your Guess is Incorrect.
        TRY AGAIN
        ${randWords}`;
    }
  }
});
