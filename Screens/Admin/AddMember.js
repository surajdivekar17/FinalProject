import { View,  TextInput , StyleSheet ,Button} from 'react-native'
import React from 'react'

const AddMember = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <TextInput style={styles.input} placeholder="Name of the Owner" />
     <TextInput style={styles.input} placeholder="Flat no" />
      <TextInput
        style={styles.input}
        placeholder="Wing"
        keyboardType="String"
      />
      <Button title="Add Member" onPress={() => navigation.navigate("SocietyMemberList")} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
 
});

export default AddMember