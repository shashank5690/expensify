import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransactionState {
  amount: string;
}

const initialState: TransactionState = {
  amount: '',
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setAmountRedux: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
  },
});

export const { setAmountRedux } = transactionSlice.actions;
export default transactionSlice.reducer;
