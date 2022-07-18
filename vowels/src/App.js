import './App.css';
import {useState} from 'react';
import WordInput from './components/WordInput.jsx';
import VowelsFinder from './components/VowelsFinder.jsx';

function App() {
  const [word, setWord] = useState("") // one input only

  const myInput = 'input-word'

  function onSubmitWord(newWord){
     // the button being clicked

      setWord(newWord)
    console.log('New Word:', word);
    }
   
  

  return (
    <div className="App">
      <WordInput onClick={onSubmitWord} />
      <VowelsFinder word={word}/>
    </div>
  );
}

export default App;
