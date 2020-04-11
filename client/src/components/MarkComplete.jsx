import React from 'react';
import axios from 'axios';

//All the logic for completing rating, and commenting on a specific exercise.
//Take one parameter and thats the activity you're trying to mark completed.

function MarkComplete(props) {
  
  const handleClick = (event) => {
    console.log("this is getting clicked", props)
    //First check if this is an exercise reading

    if (props.currentExercise.title) {
      //Make a post request to database.
        
        axios.post('/api/readingcompletion', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    else if (props.currentExercise.name) {
      console.log("this is an activity")
    }
  };

  return (
    <button onClick={() => {handleClick(props)}}>Mark it bro</button>
  )

}

export default MarkComplete;