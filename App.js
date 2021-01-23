
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from 'portal_informativo_movil/src/components/NavigationStack';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import SplashScreen from 'react-native-splash-screen'
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;



const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  }, [])
  
  return (

    <NavigationContainer >
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1054DD" translucent = {false}/>

      <View style={[s.container, styles.container, s.bgPrimary]}>
        <View style={[s.row]}>
          <View style={[s.col1]}>
            <Image source={require('./src/assets/UTC.png')} style={styles.logoUtc}></Image>
          </View>
          <View style={[s.col11]}>
            <Text style={[s.textWhite, styles.textoTitulo]}>Extensión La Maná</Text>
          </View>
        </View>
      </View>

      <NavigationStack />
    </NavigationContainer>

  );

};

export default App;

const styles = StyleSheet.create({
  logoUtc: {
    width: 40,
    height: 36,
    marginTop: 5,
    marginLeft: 4,
    marginBottom: 2,
  },
  textoTitulo:{
    fontSize:17,
    marginTop: 12,
  },
  container: {
    backgroundColor: '#fff'
  }
})
