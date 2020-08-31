import React from 'react'
import { Link,NavLink} from 'react-router-dom'
const Navbar = () => {
  return(
    <div className= "container">
    <ul className = "right">
    <li><Link to="/">Get Started</Link></li>

    </ul>
    </div>
  )
}


const name = e.target.name;
const value = e.target.value;
const {contact} = this.state;
const newContact = {
  ...contact,
  [name] : value
};
this.setState( { contact:newContact});

}




export default Navbar;
  <p>{JSON.stringify(this.state.fields, null,2)}</p>
      [e.target.name]: e.target.value
      const {fields} = this.props;
      const fieldsList = fields.map(field => {
        return(
          <div className = "field">
          <div>A: {field.value}</div>
          <div>B: {field.value}</div>
          <div>C: {field.value}</div>
          <div>D: {field.value}</div>
        )
      })
      return(
        <div className = "field-list">
        {fieldsList}
        </div>
      )
