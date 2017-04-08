import React from 'react'

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name: </label>
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" name="submit" value="Submit"/>
      </form>
    )
  }
}
