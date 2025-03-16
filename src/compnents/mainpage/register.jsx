import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register({navigation}) {
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);
  const [isFocusedPasswordConfirm, setFocusedPasswordConfirm] = useState(false);

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState([]);

  // Handle Input Change
  const handleChange = (field, value) => {
    setFormValues({...formValues, [field]: value});
  };

  // Validate Input
  const validateForm = () => {
    let newErrors = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Empty field validation
    if (!formValues.email.trim()) newErrors.push('Email is required.');
    else if (!formValues.password.trim())
      newErrors.push('Password is required.');
    else if (!formValues.confirmPassword.trim())
      newErrors.push('Confirm Password is required.');
    else if (formValues.email && !emailRegex.test(formValues.email)) {
      newErrors.push('Invalid email format.');
    } else if (formValues.password.length < 8)
      newErrors.push('Password must be at least 8 characters.');
    else if (!/[A-Z]/.test(formValues.password))
      newErrors.push('Password must contain at least one uppercase letter.');
    else if (!/[0-9]/.test(formValues.password))
      newErrors.push('Password must contain at least one number.');
    else if (!/[!@#$%^&*]/.test(formValues.password))
      newErrors.push('Password must contain at least one special character.');
    else if (formValues.password !== formValues.confirmPassword) {
      newErrors.push('Passwords do not match.');
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  // API Call to Register User
  const handleRegister = async () => {
    if (!validateForm()) return; // Stop if validation fails
    Alert.alert('Register', 'Successfully');
    // try {
    //   const response = await axios.post('https://your-api.com/register', {
    //     email: formValues.email,
    //     password: formValues.password,
    //   });

    //   if (response.status === 201) {
    //     Alert.alert('Success', 'Registration Successful!');
    //     navigation.navigate('Login');
    //   } else {
    //     Alert.alert('Error', 'Registration Failed!');
    //   }
    // } catch (error) {
    //   Alert.alert(
    //     'Error',
    //     error.response?.data?.message || 'Something went wrong!',
    //   );
    // }
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View>
        <Text style={styles.title}>Register</Text>
      </View>

      {/* Show Errors */}
      {errors.length > 0 && (
        <View style={styles.errorContainer}>
          {errors.map((error, index) => (
            <Text key={index} style={{color: 'red', fontSize: 12}}>
              • {error}
            </Text>
          ))}
        </View>
      )}

      <View>
        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Confirm Password Input */}
        <TextInput
          style={[styles.input, isFocusedPasswordConfirm && styles.focused]}
          placeholder="Confirm Password"
          placeholderTextColor="#494F55"
          selectionColor="#494F55"
          secureTextEntry={true}
          importantForAutofill="no"
          autoComplete="off"
          onFocus={() => setFocusedPasswordConfirm(true)}
          onBlur={() => setFocusedPasswordConfirm(false)}
          value={formValues.confirmPassword}
          onChangeText={text => handleChange('confirmPassword', text)}
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.8}
        onPress={handleRegister}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </TouchableOpacity>

      {/* Navigate to Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account?</Text>
      </TouchableOpacity>

      {/* Continue with Google/Facebook */}
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
