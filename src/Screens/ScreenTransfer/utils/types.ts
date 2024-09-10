import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList, AuthStackParamList } from '../../../utils/types/interface';


export type ScreenTransactionProps=NativeStackNavigationProp<AppStackParamList, 'AddTransaction'>;
export type ScreenTransasferSuccessProps=NativeStackNavigationProp<AppStackParamList, 'AddTransaction'>;
export type ScreenDas=NativeStackNavigationProp<AppStackParamList, 'BottomNavigation'>;
export type LoginScreenPropsTemp = NativeStackNavigationProp<AuthStackParamList, 'ScreenLogin'>;

