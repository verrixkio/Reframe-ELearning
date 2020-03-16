import React from 'react';


class WorkMats extends React.Component {

  constructor(props){
    super(props);
    this.state = { email: '', password: ''};
    console.log(this.props.workMats)
  }

  
  render () {
    const displayArr = []
    const workDisplayInfo = Object.entries(this.props.workMats).map(([key, index]) => {
      return (
        <div>
          <h4 key={index.title}>{index.title}</h4>
          <p key={index.time}>{index.time}</p>
          <h4 key={index.intro_title}>{index.intro_title}</h4>
          <h4 key={index.intro_desc}>{index.intro_desc}</h4>
        </div>
      )
    })
    return (
      // {displayArr}
      <h4>hellow</h4>
    )
  }
}

export default WorkMats;