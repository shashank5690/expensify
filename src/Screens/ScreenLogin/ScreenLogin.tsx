import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styleLogin';
import { LoginFormData } from './utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { loginSchema } from './utils/LoginValidation';
import { TextInput } from 'react-native';
import Finger from '../ScreenFingerprint/Assets/Finger';
import MyCircleSvg from '../ScreenFingerprint/Assets/MyCircleSvg';
import { LoginScreenProps } from '../../utils/types/interface';
import { loginUser } from '../../utils/firebaseAuth';
import { useDispatch } from 'react-redux';

const ScreenLogin: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormData) => {
    loginUser(data.email, data.password, dispatch);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        <View style={styles.innerContainer}>
        <View style={styles.MyCircleSvg}>
            <MyCircleSvg />
          </View>
          <Text style={styles.text}>Login to Your Account</Text>

          <View style={styles.stylefield}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
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

          <View style={styles.stylefield2}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
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

          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.forget}>Forget Email / Password ?</Text>

          <View style={styles.finger}>
            <Finger />
          </View>

          <Text style={styles.signuptext}>
            Don’t have an account? <Text style={styles.signup} onPress={() => navigation.navigate('ScreenSignup')}>Sign in</Text>
          </Text>

          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ScreenLogin;
