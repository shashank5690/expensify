import { StackScreenProps } from '@react-navigation/stack';


export type AuthStackParamList = {
    ScreenOnboard: undefined;
    ScreenLogin: undefined;
    ScreenRegister: undefined;
};

export type AppStackParamList = {
    HomeScreen: undefined;
    Details: { id: string }; 
};


export type HomeScreenProps = StackScreenProps<AppStackParamList, 'HomeScreen'>;
export type DetailsScreenProps = StackScreenProps<AppStackParamList, 'Details'>;
export type OnboardScreenProps = StackScreenProps<AuthStackParamList, 'ScreenOnboard'>;
export type LoginScreenProps = StackScreenProps<AuthStackParamList, 'ScreenLogin'>;
export type RegisterScreenProps = StackScreenProps<AuthStackParamList, 'ScreenRegister'>;
