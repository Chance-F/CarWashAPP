import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonFabButton, IonFab, IonButton, IonRippleEffect, IonCard } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { useFirebase } from '../hooks/useFirebase';
import { useWeather } from '../hooks/useWeather'; 
import veloster from '../assets/veloster.jpg';
import './Home.css';

const Home: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { userLogin, googleSignIn, signOut, loggedIn } = useFirebase();
  const { getWeather, temp, weather} = useWeather();
  const [city, setCity] = useState<string>('');
  const [isweather, setisweather] = useState<boolean>(false);
  function log() {
    return(
      <IonContent>
        <div id='login'>
          
            <p>
              <IonButton expand="block" size="large" color='danger' onClick={() => googleSignIn()}>Sign In With Google Here</IonButton>
              <IonRippleEffect></IonRippleEffect>
            </p>
        </div>
     </IonContent> 
    )
  }

  function searchweather(){
      
    return (
      <IonContent>
        <IonCard>
          <IonInput value={city} placeholder='Enter City' type='text' onIonChange={evt => setCity(evt.detail.value!)}/>
        </IonCard>
          <IonButton expand="block" size="large" onClick={function(event){ getWeather(city); switchWeather()}}>Check the Weather!</IonButton>
      </IonContent>
    )
  }
  
  function switchWeather(){
    weather ? setisweather(true) : setisweather(false);
  }

  function displayWeather() {

    return (
      <IonContent>
        <IonCard>
          <p>The Temperature outside is {temp} and {weather}</p>
          
        </IonCard>
      </IonContent>
    )
  }
  function signedIn(){
    return(
      <IonContent>
        
          <IonCard id='card'>
            <img src={veloster}/>
            <div>
            {checkTemp()}
            </div>
          </IonCard>
          {isweather ? displayWeather(): searchweather()}
          <IonButton expand="block" size="large" onClick={() => signOut()}>logout</IonButton>
        
      </IonContent>
    )
  }
  function checkTemp(){

    if(temp > 65 && weather == 'Clear'){
      return "Today is a good day to wash your car!"; 
    }else if(temp < 65 && weather !='Clear'){
      return "Today is not a good day to wash your car =(";
    }

  }
  return (
  <main>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Is today a good day to wash your car?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loggedIn ? signedIn(): log()}
      </IonContent>
    </IonPage>
    </main>
  );
};
export default Home;