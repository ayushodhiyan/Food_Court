import React from 'react'

class About extends React.Component{
  constructor(props){
    super(props);

    this.state={
      userInfo:{
        name:"user-name",
        location:"user-location",
        bio:"user-bio",
        email:"user-email",
      }
    };
  }
  async componentDidMount(){

    const data=await fetch("https://api.github.com/users/ayushodhiyan");
    const json=await data.json();
    this.setState({
      userInfo:json,
    })
  }
  
  
  
  
  render(){
    const{name,location,bio,avatar_url,email}=this.state.userInfo;
    return(
      < div className="about-card">
          <img className="about-img" src={avatar_url} alt="avatar"/>
        <div>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>{bio}</h3>
        <h3>{email}</h3>
        </div>
      </div>
    )
  }
}

export default About;
