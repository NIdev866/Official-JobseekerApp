/*import { SubmissionError } from 'redux-form'
import database from "./applicantdb.json"
import { submitJobseekerApplication } from '../../actions'
import { connect } from 'react-redux'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class submit extends Component {
  return sleep(1000) // simulate server latency
    .then(() => {
      delete values.emailCopy
      database.applicants.push(values) //not working (security issue). backend needed.
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      this.props.submitJobseekerApplication(values)
    })
}

export default connect(null, { submitJobseekerApplication })(submit)*/






import {SubmissionError} from 'redux-form'
import axios from 'axios'
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'





//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values){

	axios.post(`http://localhost:3000/jobseeker/signup`, values)
		.then(response => {
          window.location.replace("/submittionSuccess");
	      })
	    .catch((err)=>{
        window.location.replace("/submittionFailure");
	    })


/*  return sleep(1000).then(() => {

    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } else if (values.password !== 'redux-form') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })*/
}


export default submit