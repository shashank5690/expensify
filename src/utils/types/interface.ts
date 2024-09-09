import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';


export type AuthStackParamList = {
    OnboardScreen: undefined;
    ScreenLogin: undefined;
    ScreenSignup: undefined;
    DashboardBottom:undefined;
};

export type AppStackParamList = {
    Dashboard: undefined;
    AddTransaction: undefined;
    Scanner:undefined;
    ScreenTransfer: undefined;
    ScreenTransferSuccess: undefined;
    BottomNavigation: { screen: keyof AppStackParamList };
    DashboardBottom:undefined;
};


export type DashboardProps = StackScreenProps<AppStackParamList, 'Dashboard'>;
export type OnboardScreenProps = StackScreenProps<AuthStackParamList, 'OnboardScreen'>;
export type LoginScreenProps = StackScreenProps<AuthStackParamList, 'ScreenLogin'>;
export type RegisterScreenProps = StackScreenProps<AuthStackParamList, 'ScreenSignup'>;
export type RegisterProps=NativeStackNavigationProp<AuthStackParamList, 'ScreenSignup'>;

