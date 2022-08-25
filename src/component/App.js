import React from 'react'

const App = () => {
  const chik = "man";
  const cloer = { color: "red" };
  const arr = ["a", "b", "c"];
  const pag = (  
    <div>
      <div> <p style={cloer}> {chik === chik ? "fdd" : "df"} </p></div>
      {arr.map( (tm) => (
        <p style={cloer} >{tm}</p>
      ))}
    </div>
  ) ;
  console.log(pag);
  return pag;
}

export default App