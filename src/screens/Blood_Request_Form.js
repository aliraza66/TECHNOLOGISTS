import React from "react";
import { Text,TextInput,Button } from "@react-native-material/core";
import { ScrollView,TouchableOpacity } from "react-native";

const App = () => (
  <ScrollView>
  <Text variant="h4" style={{  
    backgroundColor:'red',justifyContent:'center',textAlign:"center",height:100,textAlignVertical:'center' }}>
    Blood Request Form
  </Text>
   <TextInput label="Blood Group" style={{ margin: 16 }} />
   <TextInput label="Hospital" style={{ margin: 16 }} />
   <TextInput label="City" style={{ margin: 16 }} />
   <TextInput label="Case" style={{ margin: 16 }} />
   <TextInput label="Hemoglobin Level" style={{ margin: 16 }} />
   <TextInput label="Blood Request Date" style={{ margin: 16 }} />
   <TextInput label="Blood Request Time" style={{ margin: 16 }} />
   <TextInput label="Attendent Name" style={{ margin: 16 }} />
   <TextInput label="Attendent Constact Number" style={{ margin: 16 }} />
   <Button title="Submit" style={{margin:20}}/>
   </ScrollView>
);

export default App;