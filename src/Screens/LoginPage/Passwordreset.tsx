
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use the icon library of your choice

const handleBackButtonPress = () => {
  console.log();
}

const PasswordReset= () => {
  return (
    <View style={styles.container }>
    <View style={{flex:1,}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleBackButtonPress()}>
          {/* Use an icon for the back button */}
          <Icon name="ios-arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
        <View>
        <Text style={styles.heading}>Enter Your Phone Number or E-mail to reset Password</Text>

        </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail or Phone Number"
          placeholderTextColor="gray"
        />
       
      </View>
   
   
      
    </View>
   
      <View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};






// Styles remain mostly the same as in the previous response




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    marginRight: 20,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    //marginBottom: 20,
    paddingBottom: 10,
    marginTop:20
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  subHeading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#A076F9',
    borderRadius: 20,
    width: 341,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom:20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PasswordReset;
