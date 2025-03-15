import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import logo from "../../assets/logo.png"
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register({navigation}) {
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);
  const [isFocusedPasswordConfirm, setFocusedPasswordConfirm] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logoImage}></Image>
      </View>
      <View>
        <Text style={styles.title}>Register</Text>
      </View>
      <View>
        <TextInput
          style={[styles.input, isFocusedEmail && styles.focused]}
          placeholder="Enter your email"
          placeholderTextColor="#494F55"
          selectionColor="#494F55"
          onFocus={() => setFocusedEmail(true)}
          onBlur={() => setFocusedEmail(false)}
        />
        <TextInput
          style={[styles.input, isFocusedPassword && styles.focused]}
          placeholder="Enter your password"
          placeholderTextColor="#494F55"
          selectionColor="#494F55"
          secureTextEntry={true}
          onFocus={() => setFocusedPassword(true)}
          onBlur={() => setFocusedPassword(false)}
        />
        <TextInput
          style={[styles.input, isFocusedPasswordConfirm && styles.focused]}
          placeholder="Confirm Password"
          placeholderTextColor="#494F55"
          selectionColor="#494F55"
          secureTextEntry={true}
          onFocus={() => setFocusedPasswordConfirm(true)}
          onBlur={() => setFocusedPasswordConfirm(false)}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account</Text>
      </TouchableOpacity>
      <View style={styles.continueMainContainer}>
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.iconContainer}>
          {/* Google Button */}
          <TouchableOpacity
            style={[styles.iconButton, {backgroundColor: '#DB4437'}]}>
            <Icon name="google" size={20} color="white" />
          </TouchableOpacity>

          {/* Facebook Button */}
          <TouchableOpacity
            style={[styles.iconButton, {backgroundColor: '#1877F2'}]}>
            <Icon name="facebook" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
