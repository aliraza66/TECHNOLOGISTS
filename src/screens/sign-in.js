import React from "react";
import { Text,TextInput,Button } from "@react-native-material/core";
import { ScrollView,TouchableOpacity } from "react-native";

const App = () => (
  <ScrollView>
  <Text variant="h3" style={{  
    backgroundColor:'red',justifyContent:'center',textAlign:"center",height:100,textAlignVertical:'center' }}>
    Sign In
  </Text>
   <TextInput label="email" style={{ margin: 16 }} />
   <TextInput label="Password" style={{ margin: 16 }} />
   <TouchableOpacity >
   <Text  style={{  
     marginHorizontal:20,height:40, textDecorationLine:'underline',color:'white'}}>
    forgot password?
  </Text>
   </TouchableOpacity>
   <Button title="Submit" style={{margin:20}}/>
   <TouchableOpacity >
   <Text  style={{  
    justifyContent:'center',textAlign:"center", marginHorizontal:20,height:40,textAlignVertical:'center', textDecorationLine:'underline',color:'white'}}>
    Are you new user? Please SignUp
  </Text>
   </TouchableOpacity>
   </ScrollView>
);

export default App