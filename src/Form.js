import React from "react";

 class Form extends React.Component{

  state = {

    A: '',
    B: '',
    C: '',
    D: ''
  };

  change = (e) => {
    this.setState({
    [e.target.name]: e.target.value

    });

  }
  onSubmit=(e , deleteTodo) =>{
    e.preventDefault();
    this.setState({

        A:'',
        B:'',
        C:'',
        D:''
    });

    this.props.onSubmit(this.state);

  };
  render(){
    return(
      <form>
      <input
      //name ="Question"
      placeholder="Question:"
      value={this.state.Question}

       />{<br/>}{<br/>}

       <h6 className="option">Option</h6>
        <input
         name = "A"
         placeholder="A:"
         value={this.state.A}
           onChange = {e => this.change(e)}

            />{<br/>}{<br/>}

            <input
             name = "B"
             placeholder="B:"
            value={this.state.B}

            onChange = {e => this.change(e)}
            />{<br/>}{<br/>}

               <input
                name = "C"
               placeholder="C:"
               value={this.state.C}
               onChange = {e => this.change(e)}
               />{<br/>}{<br/>}

                  <input
                  name = "D"
                  placeholder="D:"
                  value={this.state.D}
                  onChange = {e => this.change(e)}
                  />{<br/>}{<br/>}
                  <button onClick={(e => this.onSubmit(e))}>Get Answer</button>
      </form>
    );
  }
}
  export default Form;
