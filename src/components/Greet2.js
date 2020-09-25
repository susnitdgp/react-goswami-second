import React from "react";


// Function component example
const Greet2 = (props) => {

  console.log(props)

  return (
    <h1>Hello from Greet2 props = {props.attr1}</h1>
  )

}

export default Greet2