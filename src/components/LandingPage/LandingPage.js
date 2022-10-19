import { React, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import { TextField, Modal, Box, Button } from '@mui/material'
import BackGroundImage from '../../images/Mountain.jpeg'
import axios from 'axios'
import './LandingPage.css'
import User from '../../model/User'



const LandingPage = (props) => {

  const user = new User();

  const signIn = props.signIn;

  const signUp = props.signUp;

  const [allUsers, setAllUsers] = useState(null);

  const navigate = useNavigate();

  const postAddress = 'http://localhost:3000'

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 480,
    border: 'none',
    bgcolor: '#516872',
    boxShadow: 24,
    borderRadius: 2,
    p: 4, 
  };

  let ModalInputProps = {
    type: "input",
    as: TextField,
    margin: 'dense',
    size: "small",
    varient: "outlined",
    required: true,
    autoComplete: "off",
    sx: {
      input: {
        color: "white"
      }
    },
    fullWidth: true
  }

  // get all current users
  useEffect(() => {
    axios.get(postAddress+'/users')
    .then((response) => {
      setAllUsers(response.data);
    })
  })

  // set the user if the username and password are correct 
  const checkCorrect = (details) => {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].userName === details.userName) {
        if (allUsers[i].password === details.password) {
          props.setUser(allUsers[i]);
          return true;
        }
      }
    }
    return false;
  }

  // give an error message if the details are incorrect
  const incorrectDetails = () => {
    alert("The username or password is incorrect");
  }

  // sign in the user
  const signInButton = (signIn) => {
    if (signIn) {

        return (
          <div>
            <Formik
              validateOnChange={true}
              initialValues={{
                userName: '',
                password: ''
              }}
              onSubmit={(data, {setSubmitting, resetForm}) => {
                console.log("This is finally working")
                console.log(data)
                if (checkCorrect(data)) {
                    setSubmitting(false);
                    navigate('/profile')
                } else {
                    // post a message 
                    setSubmitting(false);
                    incorrectDetails();
                }
              }}>
              {({values}) => (
                <div>
                <Form>
                  <div className="user-pass-container">
                    <div className="username-container">
                      <p>Username:</p>
                      <div className="text-input">
                        <Field name="userName" {...ModalInputProps} />
                      </div>
                    </div>
                  <div className="password-container">
                    <p>Password:</p>
                    <div className='text-input'>
                      <Field name="password" {...ModalInputProps} />
                    </div>
                  </div>
                    <div>
                      <Button type="submit">Submit</Button>
                    </div>
                  </div>
                </Form>
                </div>
              )}
              </Formik>
          </div>
        )
    } else {
      return (
        <div className="sub-title-container">
          <h1 className="sub-title">Where the running community comes together</h1>
        </div>
      )
    }
  }

  // create a user
  const signUpButton = (signUp) => {
    if (signUp) {
      return (
        // modal
        <Formik
              validateOnChange={true}
              initialValues={user}
              onSubmit={(data, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                data.userName = data.firstName+data.lastName;
                data.loggedIn = "0";
                axios({
                  method: 'post',
                  url: postAddress +'/new-user',
                  data: data,
                }).then(response => {
                  props.setUser(response.data);
                })
                setSubmitting(false);
                console.log("This is the user from the data variable:")
                navigate('/profile')
                // setting the user
                resetForm(
                  user.userName = '',
                  user.firstName = '',
                  user.lastName = '',
                  user.password = '',
                  user.location = '',
                  user.email = ''
                )
              }}>
              {({values, isSubmitting}) => (
              <Modal open={signUp} onClose={props.toggleSignUp}>
                <Box sx={style}>
                  <div className="title-container">
                    <h1 className='modal-title'>Sign Up</h1>
                  </div>
                  <Form autoComplete='off'>
                    <div className="main-input-container">
                      <div className="first-last-container">
                        <div className='first-container'>
                          <h3>First Name</h3>
                          <Field name="firstName" {...ModalInputProps} />
                        </div>
                        <div className="last-container">
                          <h3>Last Name</h3>
                          <Field name="lastName" {...ModalInputProps} />
                        </div>
                      </div>
                      <div className='pass-loc-container'>
                        <div className="pass-container">
                          <h3>Password</h3>
                          <Field name="password" {...ModalInputProps} />
                        </div>
                        <div className="loc-container">
                          <h3>Location</h3>
                          <Field name="location" {...ModalInputProps} />
                        </div>
                      </div>
                      <h3>Email</h3>
                      <Field name="email" fullWidth={true} {...ModalInputProps} />
                    </div>
                    <div className="modal-submit-button">
                        <button className="modal-create-button" type="submit" >Create</button>
                    </div>
                  </Form>
                </Box>
              </Modal>
              )}
          </Formik>
      )
    } 
  }
  
  return (
    <>
      <div className="mainpage-container">
        <div className="mainpage-bg">
            <img src={BackGroundImage} className="image-bg" alt="background" />
        </div>
        <div className="main-title-container">
            <h1 className="main-title">Aktiva</h1>
        </div>
        <div>
          {signInButton(signIn)}
        </div>
        <div>
          {signUpButton(signUp)}
        </div>
      </div>
    </> 
  )
}

export default LandingPage