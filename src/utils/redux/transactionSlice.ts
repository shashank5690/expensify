import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransactionState {
  amount: string;
  incomeamount:number;
  expenseamount:number;
}

const initialState: TransactionState = {
  amount: '',
  incomeamount: 0,
  expenseamount:0,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setAmountRedux: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    addIncome:(state,action: PayloadAction<number>)=>{
      state.incomeamount+=action.payload;
    },
    addExpense:(state,action: PayloadAction<number>)=>{
      state.expenseamount+=action.payload;
    }
  },
});

export const { setAmountRedux,addIncome,addExpense} = transactionSlice.actions;
export default transactionSlice.reducer;
