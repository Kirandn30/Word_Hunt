import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./header.css"
import categories from '../../data/category'

const Header = ({language, setLanguage, word, setword, lightMode, setlightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:lightMode? "#000":"#fff",
            },
          type:lightMode? 'light' : 'dark',
        },
      });

      let handelChange=(Language) =>{
          setLanguage(Language)
          setword("")
      }

  return (
    <div className='header'>
        <span className='title'>{word?word:"Word Hunt"}</span>
        <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
        <TextField 
        className='text' 
        label="Enter word" 
        value={word}
        onChange={e=>setword(e.target.value)}
        />
        <TextField
          disabled
          className="select"
          select
          label="Language"
          value={language}
          onChange={e=>handelChange(e.target.value)}
        >
            {categories.map(element=>{
                return(
                    <MenuItem
                    key={element.label}
                    value={element.label}
                    >
                    {element.value}
                   </MenuItem>
                ) 
            })}
        </TextField>
        </ThemeProvider>
        </div>
    </div>
  )
}

export default Header