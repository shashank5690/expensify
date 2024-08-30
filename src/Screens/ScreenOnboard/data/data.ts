import { ImageSourcePropType } from 'react-native';

interface DataItem {
  id: number;
  imageSource: ImageSourcePropType;
  title: string;
  text: string;
}

const data: DataItem[] = [
  {
    id: 1,
    imageSource: require('../assets/Card.png'), // Use image source here
    title: 'Manage Your\nTransactions with\nExpensify',
    text: 'A convenient way to manage your expenses\nand transactions with ease.',
  },
  {
    id: 2,
    imageSource: require('../assets/Card.png'), // Use image source here
    title: 'Access to Your\nData Anytime,\nAnywhere',
    text: 'Expensify allows you to access your Expenses\nanytime and anywhere.',
  },

];

export default data;
