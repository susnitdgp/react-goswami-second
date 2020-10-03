import React, {useState} from "react";

function StateHooks(){

  const [count, setCount ] = useState(0)

  return(
    <div>
    <button onClick={()=> setCount(count+1)}>Count Valoue: {count}</button>
    </div>
  )
}

export default StateHooks