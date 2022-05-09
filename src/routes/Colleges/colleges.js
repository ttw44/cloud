// Import the Authenticator component.
// This helps our app connect to Cognito.
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Navigation from '../../containers/Navigation'

import Result from '../../components/Result'

function Colleges() {
    return (
        <div>
            <Navigation />
            <div className="container">
                {
                    /* IF there are results, print them to the page... 
                    For loop through all the available results in the user's 
                    S3 Bucket. A for loop of all results... */
                } 
                <Result /> 
                <footer className="footer">
                <p>College Finder&trade;</p>
                </footer>
            </div>
        </div>
    );
}

export default withAuthenticator(Colleges);