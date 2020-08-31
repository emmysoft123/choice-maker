import React from 'react';

 class Home extends React.Component{
state = {

  A: '',
  B: '',
  C: '',
  D: ''
};
onSubmit=(e) =>{
  e.preventDefault();
  this.setState({

      A:'',
      B:'',
      C:'',
      D:''
  });

  this.props.onSubmit(this.state)
  console.log(this.state);
}
const Home = () =>{

  render(){
  return(
    <div className="container">

  <button onClick={e => this.onSubmit(e)}>Get Answer</button>
  </div>
);
}
}
}
export default Home;
