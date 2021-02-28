import { Visual } from "./Visual";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);
  const [text, setText] = useState('');
  const [x, setX] = useState('');
    
  const toggleTheme = () => {
      
    if(mode === false){
        document.querySelector('.header').style.backgroundColor = 'black';
        document.querySelector('.container').style.backgroundColor = '#08020d';
        document.querySelector('.text-area').style.color = '#08020d';
        document.querySelector('.text-area').style.textShadow = '#41c464 1px 1px 0, #41c464 -1px -1px 0';
        document.querySelector('.name').style.color = '#41c464';
        setText('...and rela');
        setX('x');
        setMode(true);
      }else {
        document.querySelector('.header').style.backgroundColor = 'white';
        document.querySelector('.container').style.backgroundColor = 'white';
        document.querySelector('.text-area').style.textShadow = 'none';
        document.querySelector('.text-area').style.color = 'gray';
        document.querySelector('.name').style.color = 'gray';
        setText('')
        setX('');
        setMode(false);
      }

  }

  return (
    <>
      <Visual toggleTheme={toggleTheme} text={text} x={x}/>
    </>
  );
}

export {App};
