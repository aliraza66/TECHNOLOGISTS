import React from "react";
import { Text,TextInput,Button } from "@react-native-material/core";
import { ScrollView,TouchableOpacity } from "react-native";

const App = () => (
  <ScrollView>
  <Text variant="h4" style={{  
    backgroundColor:'red',justifyContent:'center',textAlign:"center",height:100,textAlignVertical:'center' }}>
    Member Ship Form
  </Text>
   <TextInput label="Full Name" style={{ margin: 16 }} />
   <TextInput label="Age" style={{ margin: 16 }} />
   <TextInput label="Gender" style={{ margin: 16 }} />
   <TextInput label="City/District" style={{ margin: 16 }} />
   <TextInput label="Phone No." style={{ margin: 16 }} />
   <TextInput label="email id" style={{ margin: 16 }} />
   <TextInput label="Blood Group" style={{ margin: 16 }} />
   <TextInput label="Will you donate blood?" style={{ margin: 16 }} />
   <TextInput label="Your last blood donation date?" style={{ margin: 16 }} />
   <TextInput label="Profession" style={{ margin: 16 }} />
   <Button title="Submit" style={{margin:20}}/>
   </ScrollView>
);

export default App;