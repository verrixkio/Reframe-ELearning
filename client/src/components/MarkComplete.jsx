import React from 'react';
import axios from 'axios';

//This function creates an object in the database with a specific reading or exercise that represents completion of an exercise.

function MarkComplete(props) {
  
  const handleClick = () => {

    if (props.currentExercise.title) {

        axios.post('/api/readingcompletion', {
          readingId: props.currentExercise.id,
          userId: props.id,
          segmentId: props.segmentId
        })
        .then(function (response) {
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    else if (props.currentExercise.name) {
      axios.post('/api/activitycompletion', {
        activityId: props.currentExercise.id,
        userId: props.id,
        segmentId: props.segmentId
      })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  return (
    <button onClick={() => {handleClick(props)}}>Mark it bro</button>
  )

}

export default MarkComplete;