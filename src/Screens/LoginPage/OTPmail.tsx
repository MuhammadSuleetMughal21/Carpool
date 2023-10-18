import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const handleBackButtonPress = () => {
    console.log();
  }
  
const OTPmail= () => {
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
        <Text style={styles.heading}>Enter the 4 digit Code Send to you at </Text>
        <Text style={styles.heading}>
         suleet18@gamil.com
        </Text>
        </View>
       
        <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpDigit}
          maxLength={1}
        />
        <TextInput
          style={styles.otpDigit}
          maxLength={1}
        />
        <TextInput
          style={styles.otpDigit}
          maxLength={1}
        />
        <TextInput
          style={styles.otpDigit}
          maxLength={1}
        />
      </View>
    <View style ={{marginTop:20}}>
        <Text style ={{color:"#535AFF"}}>
            resend Code 
        </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    padding: 20,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpDigit: {
    color: 'white',
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 40, // Adjust the width as needed
    textAlign: 'center',
    marginHorizontal: 5, // Adjust the spacing between digits
  },
  button: {
    backgroundColor: '#A076F9',
    borderRadius: 20,
    width: 341, // Adjust the width as needed
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default OTPmail;
