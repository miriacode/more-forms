import React, {useState} from 'react';

const Form = () => {
   const [firstName,setFirstName] = useState("");
   const [lastName,setLastName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [confirm,setConfirm] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);

   const [firstNameError,setFirstNameError] = useState("");
   const [lastNameError,setLastNameError] = useState("");
   const [emailError,setEmailError] = useState("");
   const [passwordError,setPasswordError] = useState("");
   const [confirmError,setConfirmError] = useState("");

   const createUser = (e) =>{
     e.preventDefault();
     setFirstName("");
     setLastName("");
     setEmail("");
     setPassword("");
     setConfirm("");
     setIsSubmitted(true);
   }


   const handleFirstName = (e) =>{
     setFirstName(e.target.value);
     if(e.target.value === "") {
      setFirstNameError("First Name is required");
     } else if(e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters");
     } else {
      setFirstNameError('');
     }
   }

   const handleLastName = (e) =>{
    setLastName(e.target.value);
    if(e.target.value <1) {
     setLastNameError("Last Name is required");
    } else if(e.target.value.length < 2) {
     setLastNameError("Last Name must be at least 2 characters");
    } else {
     setLastNameError('');
    }
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value);
    if(e.target.value <1) {
     setEmailError("Email is required");
    } else if(e.target.value.length < 5) {
     setEmailError("Email must be at least 5 characters");
    } else {
     setEmailError('');
    }
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value);
    if(e.target.value <1) {
     setPasswordError("Password is required");
    } else if(e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError('');
    }
  }

  const handleConfirm = (e) =>{
    setConfirm(e.target.value);
    if(e.target.value <1) {
     setConfirmError("Please, confirm your password");
    } 
  }

  return (
    <>
      <form onSubmit={createUser}>
        <div className='form-group'>
          <label htmlFor="firstName">First name:</label>
          <input id="firstName" className="form-control" onChange={handleFirstName} value={firstName} />
          {
            firstNameError?
            <p style={{color:'red'}}>{ firstNameError }</p> :
            ''
          }
        </div>

        <div className='form-group'>
          <label htmlFor="lastName">Last name:</label>
          <input id="lastName" className="form-control" onChange={handleLastName} value={lastName} />
          {
            lastNameError?
            <p style={{color:'red'}}>{ lastNameError }</p> :
            ''
          }
        </div>

        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input id="email" className="form-control" type="email" onChange={handleEmail} value={email} />
          {
            emailError?
            <p style={{color:'red'}}>{ emailError }</p> :
            ''
          }
        </div>

        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input id="password" className="form-control" type="password" onChange={handlePassword} value={password} />
          {
            passwordError?
            <p style={{color:'red'}}>{ passwordError }</p> :
            ''
          }
        </div>

        <div className='form-group'>
          <label htmlFor="confirm">Confirm Password:</label>
          <input id="confirm" className="form-control" type="password" onChange={handleConfirm} value={confirm} />
          {
            confirmError?
            <p style={{color:'red'}}>{ confirmError }</p> :
            ''
          }
          
          {((password===confirm))? '':<p style={{color:'red'}}>Passwords don't match</p>}
        </div>

        <input type="submit" value="Create User"></input>

        <div>{
          isSubmitted ? "Your form was submitted":""
        }</div>
      </form>
    </>
    );
}

export default Form;


