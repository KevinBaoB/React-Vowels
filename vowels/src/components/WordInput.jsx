import {useState} from 'react';

const myInput = "input-word"

function WordInput(props) {

  function clickhandler(){
     // the button being clicked
    let inputElement = document.getElementById(myInput)
    if (inputElement) {
      let userWord = inputElement.value

      props.onClick(userWord)
    }
   
  }

  return (
    <div className="App">
      <h1>My Vowels</h1>
      <input id={myInput} type="text" placeholder="enter word here" />
      <button onClick={clickhandler}>Submit Word</button>
    </div>
  );
}

export default WordInput;
