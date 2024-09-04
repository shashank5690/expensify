import { StackScreenProps } from '@react-navigation/stack';


export type AuthStackParamList = {
    OnboardScreen: undefined;
    ScreenLogin: undefined;
    ScreenSignup: undefined;
};

export type AppStackParamList = {
    Dashboard: undefined;

};


export type DashboardProps = StackScreenProps<AppStackParamList, 'Dashboard'>;
export type OnboardScreenProps = StackScreenProps<AuthStackParamList, 'OnboardScreen'>;
export type LoginScreenProps = StackScreenProps<AuthStackParamList, 'ScreenLogin'>;
export type RegisterScreenProps = StackScreenProps<AuthStackParamList, 'ScreenSignup'>;
