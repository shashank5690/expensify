import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './styleSignUp';
import {SignUpFormData} from './utils/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {signUpSchema} from './utils/SignUpValidation';
import {TextInput} from 'react-native';
import Finger from '../ScreenFingerprint/Assets/Finger';
import MyCircleSvg from '../ScreenFingerprint/Assets/MyCircleSvg';
import PasswordWhitebg from '../../assets/PasswordWhitebg';
// @ts-ignore
import CheckBox from 'react-native-checkbox';

const ScreenSignup = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.innerContainer}>
          <View style={styles.MyCircleSvg}>
            <MyCircleSvg />
          </View>
          <Text style={styles.text}>Create Your Account</Text>

          <View style={styles.stylefield}>
            <Controller
              control={control}
              name="username"
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#A4A9AE"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.username && <Text>{errors.username.message}</Text>}
          </View>

          <View style={styles.stylefield}>
            <Controller
              control={control}
              name="email"
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#A4A9AE"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.email && <Text>{errors.email.message}</Text>}
          </View>

          <View style={styles.stylefield}>
            <Controller
              control={control}
              name="mobilenumber"
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number"
                  placeholderTextColor="#A4A9AE"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.mobilenumber && <Text>{errors.mobilenumber.message}</Text>}
          </View>

          <View style={styles.stylefield}>
            <Controller
              control={control}
              name="cnic"
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="CNIC"
                  placeholderTextColor="#A4A9AE"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.mobilenumber && <Text>{errors.mobilenumber.message}</Text>}
          </View>
          <View style={styles.passwordstyle}>
            <View style={styles.stylefield1}>
              <Controller
                control={control}
                name="password"
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={onChange}
                    placeholderTextColor="#A4A9AE"
                    value={value}
                  />
                )}
              />
              {errors.password && <Text>{errors.password.message}</Text>}
            </View>
            <View style={styles.finger}>
            <PasswordWhitebg/>
            </View>
          </View>

          <View style={styles.termsContainer}>
            <CheckBox
              label="I agree with Terms & Conditions"
              checked={agreeTerms}
              onChange={(checked: boolean | ((prevState: boolean) => boolean)) => setAgreeTerms(checked)}
              checkboxStyle={styles.checkbox}
              labelStyle={styles.termsText}
            />
          </View>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.forget}>Don't have an account? Sign Up</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ScreenSignup;
