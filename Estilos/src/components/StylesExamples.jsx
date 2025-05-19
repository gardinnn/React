import React from 'react'
import "./StylesExamples.css";
import styles from './StylesExamples.modules.css';

const StylesExamples = () => {

 //   Inline
 const inlinestyle ={
    color: "blue",
    fontSize: "20px",
 };

  return (
    <div>
      <h2 style={inlinestyle}>Estilos inline</h2>
      {/* arquivo css */}
      <p className="text">Meu css</p>
      {/* css modules */}
      <p className= {styles.textPurple}> Meu css modules</p>
    </div>
  )
}

export default StylesExamples
