/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import react, {useState, useEffect} from 'react'
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import SplashScreen from './src/components/screens/SplashScreen';
import Routes from './Routes';




const App = ()=>{
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setSplashScreenVisible(false)
    }, 3000);
  },[])
  return(
    <GestureHandlerRootView style={styles.sectionContainer}> 
      <StatusBar/>
      {splashScreenVisible ? <SplashScreen /> : <Routes /> }
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
