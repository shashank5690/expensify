import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QRState {
    idQR: number | null;
    typeQR: string | null;
    categoryQR: string | null;
    descriptionQR: string | null;
    amountQR: number| null;
    td:boolean;
}

const initialState: QRState = {
    idQR: null,
    typeQR: null,
    categoryQR: null,
    descriptionQR: null,
    amountQR: null,
    td:true,
};

const qrSlice = createSlice({
    name: 'qr',
    initialState,
    reducers: {
        setQRData: (state, action: PayloadAction<QRState>) => {
            state.idQR = action.payload.idQR;
            state.typeQR = action.payload.typeQR;
            state.categoryQR = action.payload.categoryQR;
            state.descriptionQR = action.payload.descriptionQR;
            state.amountQR = action.payload.amountQR;
        },
        resetTransactionData: (state) => {
            state.amountQR = null;
            state.descriptionQR = "";
            state.typeQR = "";
            state.categoryQR = "";
            state.idQR=null;
        },
        transactionsD:(state)=>{
            state.td=false;
        }
    },
});

export const { setQRData,resetTransactionData } = qrSlice.actions;
export default qrSlice.reducer;
