import React, { useState } from 'react';
import axios from 'axios';

// ***
//IMPORTANT

//Bug: If someone completes the 3rd activity without completeing the 2nd, our logic for checking which one is complete fails.

//*** 

//This function creates an object in the database with a specific reading or exercise that represents completion of an exercise.

function MarkComplete(props) {

  //The we can reflect the index of the completedreadings array but removing 1 value from its respective currentExercise.
  let index = props.currentExercise.id - 1
  let currEx = ""

  //First check if our current completed object is a reading or acitivty
  if (!isNaN(index)) {
    if (props.currentExercise.title) {
      currEx = "reading"
    } else {
      currEx = "activity"
    }
  }

//This function handles the submission of the activity or reading object to the database.
  const handleClick = () => {
    //If that exercise has not been completed:
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
          window.location.reload(false);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    
  };

//This section is messy - definitely good to clean up in the future. 
// Because of setup with readings and activites being seperate entities we run into some ugly use cases where we need a lot of conditionals.

//First we want to check if we have a current exercise, otherwise we havent loaded our axios requests.
  if (!currEx) {
    return (
      <p>No exercise selected</p>
    )

//If there is a current exercise selected we can move on to our next logic.
} else {

// Above we setup currEx to either be a reading or an activity
    if (currEx === "reading") {

      //We then check the completedReadings of that specific user. If there is no completed object then we give them the option to mark it as compelte.
      if (props.completedReadings[index] === undefined) {
        return (
          <div>
            <button onClick={() => {handleClick(props)}}>Submit</button>
          </div>
        )
      //Otherwise we give them access to a button that allows to unmark as complete.
    } else {
        return (
          <div>
            
            <p>Mark as incomplete.</p>
          
          </div>
        )
      }
  //If currEx is not a reading
  } else {
    //We then check if there is a completed activity at the matching id. If there isnt we give them the option of marking the activity completed.
      if (props.completedActivities[index] === undefined) {
        return (
        <div>
          <button onClick={() => {handleClick(props)}}>Submit Exercise</button>
        </div>
        )
    //Otherwise a button to redo, or remove submission.
    } else {
        return (
            <div>
              
              <p>Cancel Submission</p>

            </div>
        )
      }
    }
  //
  }
}

export default MarkComplete;