import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { TextInput,Button } from "@react-native-material/core";


const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View>
      <Text 
      style={{fontSize:40,color:'black',textAlign:'center',borderBottomColor:'red',borderBottomWidth:5}}>
        AIFA PAKISTAN
      </Text>
      <Button title="Blood Request Form" 
      variant="text"
      titleStyle={{fontSize:19}}
      style={{backgroundColor:'white',borderColor:'dark',borderBottomWidth:1,height:40}} 
      onPress={() => drawer.current.closeDrawer()}/>
      <Button title="Member Ship Form" 
      variant="text"
      titleStyle={{fontSize:19}}
      style={{backgroundColor:'white',borderColor:'dark',borderBottomWidth:1,height:40}} 
      onPress={() => drawer.current.closeDrawer()}/>
      <Button title="Blood Donation Record" 
      variant="text"
      titleStyle={{fontSize:19}}
      style={{backgroundColor:'white',borderColor:'dark',borderBottomWidth:1,height:40,}} 
      onPress={() => drawer.current.closeDrawer()}/>
      <Button title="Donors Data" 
      variant="text"
      titleStyle={{fontSize:19}}
      style={{backgroundColor:'white',borderColor:'dark',borderBottomWidth:1,height:40}} 
      onPress={() => drawer.current.closeDrawer()}/>
      <Button title="About" 
      variant="text"
      titleStyle={{fontSize:19}}
      style={{backgroundColor:'white',borderColor:'dark',borderBottomWidth:1,height:40}} 
      onPress={() => drawer.current.closeDrawer()}/>
      <Button title="Sign In" 
      variant="text"
      titleStyle={{fontSize:19}}
      style={{backgroundColor:'white',borderColor:'dark',borderBottomWidth:1,height:40}} 
      onPress={() => drawer.current.closeDrawer()}/>

    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};


export default App;