import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
    ScreenOnboard: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = {
    navigation: NavigationProp<RootStackParamList, T>;
};
