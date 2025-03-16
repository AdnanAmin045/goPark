import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LogIn({navigation}) {
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);

  // Form Values
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  // Error Messages
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Handle Input Change
  const handleChange = (field, value) => {
    setFormValues({...formValues, [field]: value});
  };

  // Validate Form
  const validateForm = () => {
    let valid = true;
    let newErrors = {email: '', password: ''};

    // Email Validation
    if (!formValues.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    // Password Validation
    if (!formValues.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle Login Button Press
  const handleLogin = () => {
    if (!validateForm()) return;
    Alert.alert('Log in', 'Successfully');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View>
        <Image source={logo} style={styles.logoImage} />
      </View>

      {/* Heading */}
      <View style={styles.headContainer}>
        <Text style={styles.title}>Login Here</Text>
        <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>
      </View>

      {/* Email Input */}
      <View>
        <TextInput
          style={[styles.input, isFocusedEmail && styles.focused]}
          placeholder="Enter your email"
          placeholderTextColor="#494F55"
          selectionColor="#494F55"
          onFocus={() => setFocusedEmail(true)}
          onBlur={() => setFocusedEmail(false)}
          value={formValues.email}
          importantForAutofill="no"
          autoComplete="off"
          onChangeText={text => handleChange('email', text)}
        />
        {errors.email && (
          <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>
            {errors.email}
          </Text>
        )}
      </View>

      {/* Password Input */}
      <View>
        <TextInput
          style={[styles.input, isFocusedPassword && styles.focused]}
          placeholder="Enter your password"
          placeholderTextColor="#494F55"
          selectionColor="#494F55"
          secureTextEntry={true}
          onFocus={() => setFocusedPassword(true)}
          onBlur={() => setFocusedPassword(false)}
          value={formValues.password}
          importantForAutofill="no"
          autoComplete="off"
          onChangeText={text => handleChange('password', text)}
        />
        {errors.password && (
          <Text style={{color: 'red', fontSize: 12, marginLeft: 5}}>
            {errors.password}
          </Text>
        )}
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.8}
        onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </View>
      </TouchableOpacity>

      {/* Navigate to Register */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Create a new account</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <View style={styles.continueMainContainer}>
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={[styles.iconButton, {backgroundColor: '#DB4437'}]}>
            <Icon name="google" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, {backgroundColor: '#1877F2'}]}>
            <Icon name="facebook" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
