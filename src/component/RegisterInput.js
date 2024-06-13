import React from 'react';
import PropTypes from 'prop-types';
 
class RegisterInput extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      name: '',
      email: '',
      password: '',
    }
 
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
 
  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    })
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='outline-none rounded-md py-2 px-4 font-medium flex flex-col items-center'>
        <input className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border border-solid mx-auto' type='text' placeholder="Nama" value={this.state.name} onChange={this.onNameChange} />
        <input className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border border-solid mx-auto' type='email' placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
        <input className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border border-solid mx-auto' type='password' placeholder="Password" autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} />
        <button className='text-lg mt-4 bg-transparent mb-6 py-2 px-10 rounded-lg border border-solid mx-auto'>Register</button>
      </form>
    )
  }
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;