import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* firebase junk */
import * as firebase from 'firebase';
import { environment } from './environment/environment';
/* Theme variables */
import './theme/variables.css';

firebase.initializeApp({
    apiKey: "AIzaSyD0ykDAGkg3edfZVrYlHO3OazVz223KaxU",
    authDomain: "ionicapplication-1345b.firebaseapp.com",
    databaseURL: "https://ionicapplication-1345b.firebaseio.com",
    projectId: "ionicapplication-1345b",
    storageBucket: "ionicapplication-1345b.appspot.com",
    messagingSenderId: "399972122329",
    appId: "1:399972122329:web:560b06d32afce9dceb88c8",
    measurementId: "G-HPW5GJSTSM"
  });


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
