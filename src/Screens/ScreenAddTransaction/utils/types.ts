export interface CategoryButtonProps {
    title: string;
    isSelected: boolean;
    setTypeSelected: (type: string) => void;
  }
  export interface Category  {
    name: any,
    type: any
  };