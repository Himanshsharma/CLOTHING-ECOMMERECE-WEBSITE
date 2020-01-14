import React, { Component } from 'react';
import './signin.styles.scss';
import Forminput from '../../components/form-input/form-input.component';
class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(event)=>{
event.preventDefault()
this.setState({email:'',password:''})
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render() { 
        return ( <div className='signin'>
<h2>I already have an account</h2>
<span>sign in with your email</span>
<form onSubmit={this.handleSubmit}><Forminput label="EMAIL" type="email" name="email" value={this.state.email } handleChange={this.handleChange} required />

<Forminput label="PASSWORD" type="password" name="password" value={this.state.password } handleChange={this.handleChange} required />

<input type="submit" value="form submit"></input>
</form>
</div>  );
}}
 
export default Signin;