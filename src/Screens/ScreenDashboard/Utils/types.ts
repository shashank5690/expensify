export default interface Category {
    id: number;
    name: string;
    type: string;
    emoji: string;
  }
  
  export default interface Transaction {
    id: number;
    category_id: number;
    amount: number;
    date: number;
    description: string;
    type: string;
  }