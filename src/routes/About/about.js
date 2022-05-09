import './index.css'
import Navigation from '../../containers/Navigation'

// Import the Authenticator component.
// This helps our app connect to Cognito.
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function About() {
    return (
      <main>
        <Navigation />
        <article className="container">
          <h1>About Us</h1>
            <section className="sec">
                <h2>Who We Are</h2>
                <p className="pg">We are a small group of fullstack Web developers that created this app to help users to find the college that best fits them.
                    We recognized that during our early years as students, we struggled to find colleges that best fit us given our skills and expertise. 
                    Most importantly, we also wanted to find colleges that fit who we were as a person.
                    We want to give the opportunity for students to find the college that best fits them!
                </p>
            </section>
            <section className="sec">
                <h2>Our Vision & Mission</h2>
                <p className="pg">
                    Our vision is to provide our dynamically allocated services to aspiring students to help them make a life-changing decision: where to go
                    to college. Our mission is to continuously improve our Web application through the user interface design process, the questions we ask, and the data we collect.
                    We only collect the data we need for our services to make the decision for you. It is not shared with anyone.
                </p>
            </section>
            <section className="sec">
                <h2>Services</h2>
                <p className="pg">
                    Being committed to transparency, we run our services with Amazon's cloud provider AWS. AWS runs our web application dynamically, running and opening when you need it.
                    We expected that during times like the Fall season, students are scrambling to decide what college to go to. AWS covers this ranging demand throughout the year. 
                </p>
            </section>
            <footer className="footer">
              <p>College Finder&trade;</p>
            </footer>
          </article>        
      </main>
    );
  }

export default withAuthenticator(About);