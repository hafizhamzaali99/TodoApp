import React, { useState } from 'react'
import { TextField,Button } from '@material-ui/core'
import {useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () =>{
    console.log(email,password)
    const response = await fetch('http://localhost:5000/login',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({email,password})
    })
    const result = await response.json()
    if(result){
      navigate('/')
    }
  }

  return (
    <div className='App'>
      <div className='inputFields'>
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
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

export default Login
