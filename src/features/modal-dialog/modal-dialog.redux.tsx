import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ModalDialogState {
    closeOnEsc?: boolean;
    closeOnclickOutside?: boolean;
    showModal: boolean;
    title?: string;
    content?: string;
    cancelButton?: {
        label: string;
        onClick: () => void;
    };
    confirmButton: {
        label: string;
        onClick: () => void;
    };
}

const initialState: ModalDialogState = {
    showModal: false,
    title: 'Alert',
    confirmButton: {
        label: <>Confirm</>,
        onClick: () => {},
    },
};

export const modalDialogSlice = createSlice({
    name: 'modal-dialog',
    initialState,
    reducers: {
        openModal: (
            state,
            action: PayloadAction<Partial<ModalDialogState>>
        ) => {
            return {
                ...state,
                showModal: true,
                ...action.payload,
            };
        },
        closeModal: () => {
            return {
                ...initialState,
            };
        },
    },
});

export const { openModal, closeModal } = modalDialogSlice.actions;

export const selectModalDialogState = (state: RootState) => state.modalDialog;

export default modalDialogSlice.reducer;