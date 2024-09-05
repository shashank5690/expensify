import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../utils/types/interface';


export type ScreenTransferProps=NativeStackNavigationProp<AppStackParamList, 'ScreenTransfer'>;

export interface CategoryButtonProps {
    title: string;
    isSelected: boolean;
    setTypeSelected: (type: string) => void;
  }
  export interface Category  {
    name: any,
    type: any
  };
  