import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Layer, Markdown, Paragraph } from 'grommet';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeModal, selectModalDialogState } from './modal-dialog.redux';

interface ModalDialogProps {
    closeOnEsc?: boolean;
    closeOnclickOutside?: boolean;
    showModal: boolean;
    title?: string;
    content?: React.ReactNode;
    cancelButton?: {
        label: React.ReactNode;
        onClick: () => void;
    };
    confirmButton: {
        label: React.ReactNode;
        onClick: () => void;
    };
}

export const ModalDialog: React.FunctionComponent<ModalDialogProps> = ({
    showModal,
    closeOnclickOutside,
    closeOnEsc,
    title,
    content,
    cancelButton,
    confirmButton,
}) => {
    // const state = useAppSelector(selectModalDialogState);
    // const dispatch = useAppDispatch();
    const [_showModal, setShowModal] = useState<boolean>(showModal);

    return (
        <Box align="center" justify="center">
            {_showModal && (
                <Layer
                    onClickOutside={() =>
                        closeOnclickOutside ? setShowModal(false) : null
                    }
                    onEsc={() => (closeOnEsc ? setShowModal(false) : null)}
                    modal={true}
                >
                    <Box pad="medium">
                        <Heading level={2} margin="none">
                            {title}
                        </Heading>

                        <Box margin={{ vertical: 'small' }}>
                            <Markdown>{content}</Markdown>
                        </Box>

                        <Box direction="row" alignContent="end" gap="small">
                            {cancelButton ? (
                                <Button
                                    secondary
                                    label={cancelButton.label}
                                    onClick={cancelButton.onClick}
                                ></Button>
                            ) : null}
                            {confirmButton ? (
                                <Button
                                    primary
                                    label={confirmButton.label}
                                    onClick={confirmButton.onClick}
                                ></Button>
                            ) : null}
                        </Box>
                    </Box>
                </Layer>
            )}
        </Box>
    );
};
