import React from 'react'
import "./Definitions.css"

export const Definition = ({word, meaning, lightMode}) => {
  return (
    <div className='meanings'>
      {
          word===""?(
              <span className='subTitle'>Start by typing a word in Search</span>
          ):(
            meaning.map(mean=>mean.meanings.map(items=>items.definitions.map(def=>{
              return <div className='singleMean' style={{
                backgroundColor:lightMode? "#3b5360":"white", 
                color:lightMode? "white" : "black"}}>
              <b>{def.definition}</b>
              <hr style={{backgroundColor:"black"}}/>
              {def.example && (
                <span>
                  <b>Example : </b>
                  {def.example}
                </span>
              )}
              {def.synonyms &&(
                <span>
                  <b>Synonyms : </b>
                  {def.synonyms.map(syn=>`${syn},`)}
                </span>
              )}
              </div>
            })))
          )
      }
    </div>
  )
}

export default Definition;
