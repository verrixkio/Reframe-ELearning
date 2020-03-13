import React from 'react';
import axios from 'axios';

class SideNav extends React.Component {

  constructor(props){
    super(props);
    this.state = { readings: '', activities: ''};
  }
  componentDidMount() {

    axios.get('/api/reading?id=' + this.props.course_id)
      .then(res => {
        this.setState({ readings: res.data});
      })

    axios.get('/api/activity?id=' + this.props.course_id)
    .then(res => {
      this.setState({ activities: res.data});
    })
  }
  render () {
    const readingData = Object.entries(this.state.readings).map(([key, index]) => {
      return (
        <h4 key={index}>{index.title}</h4>
      )
    })

    const activityData = Object.entries(this.state.activities).map(([key, index]) => {
      return (
        <h4 key={index}>{index.intro_title}</h4>
      )
    })
    return (
        <div>
          <h3>Reading:</h3>
          {readingData}
          <h3>Activities:</h3>
          {activityData}
        </div>
    );
  }
}

export default SideNav;