import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import { Container, Switch, withStyles } from '@material-ui/core';
import Header from './Components/header/header';
import Definition from './Components/Definitions/Definitions';
import { grey } from '@material-ui/core/colors';
import transitions from '@material-ui/core/styles/transitions';

function App() {

  const [meaning, setmeaning] = useState([])
  const [language, setLanguage]=useState("en")
  const [word, setword] = useState("")
  const [lightMode, setlightMode]=useState(false)

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

const url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
const dictionaryApi = async()=>{
 
  try{
     const data = await axios.get(url)
     setmeaning(data.data)
  }
  catch(error){
       console.log(error)
  }
}

useEffect(()=>{
  
dictionaryApi()

},[word, language]);

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:lightMode? "#fff": "#282c34", color:lightMode? "black":"white", transition:"all 0.7s linear"}}>
      <Container maxWidth="md" style={{height:"100vh", display:"flex", flexDirection:'column', justifyContent:"space-evenly"}}>
      <div style={{position:"absolute", top:0, right:15, padding:10}}>
      <span>{lightMode?"Light":"Dark"} Mode</span>
       <DarkMode
         checked={lightMode}
         onChange={()=>setlightMode(!lightMode)}
       />
      </div>
      <Header
       language={language}
       setLanguage={setLanguage}
       word={word}
       setword={setword}
       lightMode={lightMode}
       setlightMode={setlightMode}
       
      />
       {meaning&& <Definition meaning={meaning} language={language} word={word} lightMode={lightMode}/>}
      </Container>
      </header>
    </div>
  );
}

export default App;
