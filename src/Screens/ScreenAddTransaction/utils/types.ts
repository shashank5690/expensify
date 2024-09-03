export interface CategoryButtonProps {
    title: string;
    isSelected: boolean;
    setTypeSelected: (type: string) => void;
  }
  export const categories = {
    Expense: ["Medical Expense", "Transportation", "Entertainment", "Gifts"],
    Income: ["Salary", "Business Income", "Freelance Work", "Rental Income"]
  };