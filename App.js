import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
          <Button
            title="kirim data"
            color="green"
              onPress={()=> { 
                navigation.navigate('myDetail', {
                id: 1,
                myParam: "hallo semua",
                name: "Tess",
                })
              }}
          />       
    </View>
  )
}

function DetailScreen({route, navigation}) {
    const{id}=route.params;
    const{myParam}=route.params;
    const{name}=route.params; 
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen: </Text>
      <Text>id: {JSON.stringify(id)}</Text>
      <Text>myParam: {JSON.stringify(myParam)}</Text>
      <Text>name : {JSON.stringify(name)}</Text>
      <Button title="Back" onPress={()=> navigation.goBack()} color='red' />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="myDetail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;