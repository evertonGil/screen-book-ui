import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, FileInput, Text } from 'grommet';
import { colors } from 'grommet/themes/base';
import { BorderType } from 'grommet/utils';
import { useRef, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { closeModal, openModal } from '../../modal-dialog/modal-dialog.redux';
import { Cards } from 'grommet/components';

function Uploader() {
    const dispatch = useAppDispatch();

    const [borderColor, setBorderColor] = useState<string>('dark-3');
    const refInput = useRef<HTMLInputElement>(null);

    const triggerInputUploader = () => {
        refInput.current?.click();
    };

    const openModalConfirmUpload = () => {
        const files = refInput.current?.files;

        if (!files) return;
        const filesList = Object.entries(files);
        const pathFilesList = filesList.map(([key, file]) => {
            return file.name;
        });

        dispatch(
            openModal({
                title: 'Do you want to upload?',
                content: pathFilesList.map((path) => `* ${path}`).join(` `),
                confirmButton: {
                    label: 'Confirm',
                    onClick: () => uploadFiles(files),
                },
                cancelButton: {
                    label: 'Cancel',
                    onClick: () => dispatch(closeModal()),
                },
            })
        );
    };

    const uploadFiles = (files: FileList) => {
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            dispatch(
                openModal({
                    title: '',
                    content: <>{}</>,
                })
            );

            reader.readAsDataURL(files[i]);
            reader.onload = () => {
                const file = {
                    nome: files[i].name.split('.').slice(0, -1).join('.'),
                    dataUrl: reader.result,
                    uploading: true,
                };

                console.log(file);
            };
        }
    };

    return (
        <>
            <Box
                border={{
                    style: 'dashed',
                    size: '2px',
                    color: borderColor,
                }}
                direction="row"
                gap="small"
                pad={'medium'}
                onMouseLeave={() => setBorderColor('dark-3')}
                onMouseEnter={() => setBorderColor('brand')}
                onClick={triggerInputUploader}
            >
                <Text color={'dark-3'}>Drop photos or</Text>

                <Button primary label={<>Select</>} />

                <input
                    id="upload"
                    name="upload"
                    style={{ display: 'none' }}
                    multiple={true}
                    ref={refInput}
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={openModalConfirmUpload}
                />
            </Box>
        </>
    );
}

export default Uploader;
