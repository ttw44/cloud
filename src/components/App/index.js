/* src/App.js */
import React  from 'react'

// Import the Authenticator component.
// This helps our app connect to Cognito.
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Import our NavigationList.
// This helps control if there is a sign in/log out button at all.
import Navigation from '../../containers/Navigation'

// Import our form.
import Form from '../Form'

// Import our styles.
import './index.css'

function App({ signOut, user }){

  return (
      <div>
        <Navigation />
        <div className="container">
          <Form />
          <footer className="footer">
              <p>College Finder&trade;</p>
          </footer>
        </div>
      </div>
    ); 
}
export default withAuthenticator(App);