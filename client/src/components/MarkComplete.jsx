import React, { useState } from 'react';
import axios from 'axios';

//This function creates an object in the database with a specific reading or exercise that represents completion of an exercise.

function MarkComplete(props) {
  let index = props.currentExercise.id - 1
  let currEx = ""
  console.log(props.completedReadings[index], 'this is a completed reading')
  //First check if our current completed object is a 

  if (!isNaN(index)) {
    if (props.currentExercise.title) {
      currEx = "reading"
    } else {
      currEx = "activity"
    }
  }


  const handleClick = () => {
    //If that exercise has not been completed:
    index = props.currentExercise.id - 1

// Again, a reading has a title and an activity has a name.
      if (props.currentExercise.title) {

          axios.post('/api/readingcompletion', {
            readingId: props.currentExercise.id,
            userId: props.user,
            segmentId: props.segmentId
          })
          .then(function (response) {
            window.location.reload(false);
          })
          .catch(function (error) {
            console.log(error);
          });
        }

      else if (props.currentExercise.name) {
        
        axios.post('/api/activitycompletion', {
          activityId: props.currentExercise.id,
          userId: props.user,
          segmentId: props.segmentId
        })
        .then(function (response) {
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    
  };
// If there is no completed object.

  if (!currEx) {
    return (
      <p>No exercise selected</p>
    )
} else {
    if (currEx === "reading") {
      if (props.completedReadings[index] === undefined) {
        return (
          <button onClick={() => {handleClick(props)}}>Mark it bro</button>
        )
    } else {
        return (
          <div>
            
            <h4>Completed tho</h4>
          </div>
        )
      }

  } else {

      if (props.completedActivities[index] === undefined) {
        return (
        <button onClick={() => {handleClick(props)}}>Mark it bro</button>
        )
    } else {
        return (
            <div>
              
              <h4>Completed tho</h4>
            </div>
        )
      }
    }
  //
  }
}

export default MarkComplete;