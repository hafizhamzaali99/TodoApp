import React, { useState } from 'react'
import { TextField, Button} from '@material-ui/core'


const SignUp = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () =>{
    console.log(name,email,password)
    const response = await fetch('http://localhost:5000/signup',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({name,email,password})
    })
    const result = await response.json()
    console.log(result)
    setName();setPassword();setEmail()
  }

  return (
    <div className='App'>
      <div className='inputFields'>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className='inputFields'>
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          value={email}
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className='inputFields'>
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className='inputFields'>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}

export default SignUp
