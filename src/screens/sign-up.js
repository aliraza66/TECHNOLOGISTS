import React from "react";
import { Text,TextInput,Button } from "@react-native-material/core";
import { ScrollView } from "react-native";

const App = () => (
  <ScrollView>
  <Text variant="h3" style={{  
    backgroundColor:'red',justifyContent:'center',textAlign:"center",height:100,textAlignVertical:'center' }}>
    Sign Up
  </Text>
   <TextInput label="Full Name" style={{ margin: 16 }} />
   <TextInput label="City/District" style={{ margin: 16 }} />
   <TextInput label="email" style={{ margin: 16 }} />
   <TextInput label="Password" style={{ margin: 16 }} />
   <TextInput label="Confirm Password" style={{ margin: 16 }} />
   <TextInput label="Phone Number" style={{ margin: 16 }} />
   <TextInput label="Designation in AIFA" style={{ margin: 16 }} />
   <TextInput label="CNIC" style={{ margin: 16 }} />
   <Button title="Submit" style={{margin:20}}/>
   <TouchableOpacity >
   <Text  style={{  
    justifyContent:'center',textAlign:"center", marginHorizontal:20,height:40,textAlignVertical:'center', textDecorationLine:'underline',color:'white'}}>
    Already Have an account? Sign In 
  </Text>
   </TouchableOpacity>
   </ScrollView>
);

export default App;