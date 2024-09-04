import React,{useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
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
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import { RegisterScreenProps } from '../../utils/types/interface';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../utils/firebaseAuth';


const ScreenSignup:React.FC <RegisterScreenProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data: SignUpFormData) => {
    signupUser(data, dispatch);
  };

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleCheckboxPress = () => {
    setAgreeTerms(prev => !prev);
  };

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
            <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
              <AnimatedCheckbox
                checked={agreeTerms}
                highlightColor="#4444ff"
                checkmarkColor="#ffffff"
                boxOutlineColor="#4444ff"
              />
            </Pressable>
            <Text style={styles.termsText}>I agree with <Text style={{color:'#456EFE'}}>Terms & Conditions</Text></Text>
          </View>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.forget}>Already have an account? <Text style={{color: 'white'}}  onPress={() => navigation.navigate('ScreenLogin')} >Login</Text></Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ScreenSignup;