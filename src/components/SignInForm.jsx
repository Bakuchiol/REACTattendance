// import useContext hook and import context we're using
import React, { useState, useContext } from 'react'
import { AppContext } from '../contexts/app_context';
// import App from '../App';

function SignInForm() {

  // destructure from useContext the states we want to use
  let (learners, setLearners) = useContext(AppContext)

    // States to keep track of data
    const [data, setData] = useState('')
    // all logic (functions) goes before the return
    const handleChange = (e) => {
        // console.log(e.target.value)
        setData(e.target.value)
    };
    // takes data we type to keep track of learners
    const handleSubmit = (e) => {
        // prevents page from reloading upon form submission
        e.preventDefault()
        setLearners([...learners, data])
        // add new data to old data using spread operator
        // console.log(data)
        // makes input empty again
        setData('');
    };
  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h1>Who is signing in?</h1>
        <input type="text" name='name' placeholder='Your Name Here' value={data} onChange={(e) =>{handleChange(e)}}/>
        <input type="submit" value='Submit'/>
    </form>
  )
}

export default SignInForm
