import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import axios from 'axios';


Amplify.configure(awsconfig);


//input configurations and attributes
const signUpConfig = {
  header: 'Create your BarFam Account',
  hideAllDefaults: false,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
      'placeholder': 'Enter your first name'
    },
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 2,
      type: 'string',
      'placeholder': 'Enter your username'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'email',
      'placeholder': 'Enter your Email'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
      'placeholder': 'Enter your password'
    },
    
  ]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}


export default withAuthenticator(App, { signUpConfig });
