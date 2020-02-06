import React ,{ Component }from 'react';
import './App.css';

import awsconfig from './aws-exports';

import Amplify, { Analytics, Storage } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react';

// import axios from 'axios';

Amplify.configure(awsconfig);
// (2) use the Storage category to upload files to a private user location after someone has logged in. 
Storage.configure({ level: 'private' });

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


class App extends Component{

  state={
    file:null
  }


  // (2)
  uploadFile = (evt) => {
    const file = evt.target.files[0];
    const name = file.name;
  
    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }
  
  componentDidMount() {
    Analytics.record('Amplify_CLI');
  }
  // 

  render(){
    return(
    <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <S3Album level="private" path='' />
    </div>
    )
  }
}




export default withAuthenticator(App, { signUpConfig });
