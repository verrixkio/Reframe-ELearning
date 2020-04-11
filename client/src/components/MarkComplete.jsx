import React from 'react';

//All the logic for completing rating, and commenting on a specific exercise.
//Take one parameter and thats the activity you're trying to mark completed.

function MarkComplete(props) {
  
  const handleClick = () => {
    console.log("this is getting clicked", props)
  };

  return (
    <button onClick={() => {handleClick(props)}}>Mark it bro</button>
  )

}

export default MarkComplete;