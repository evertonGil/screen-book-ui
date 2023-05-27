import { Box } from "grommet";
import Uploader from "./uploader/uploader";
import { useSelector } from "react-redux";
import { ModalDialog } from "../modal-dialog/modal-dialog";

function ImagePreview() {
    
    return (
        <Box
            width={'100%'}
            pad={{ horizontal: 'small', vertical: 'small' }}
            direction="row"
            background={{color: 'light-1'}}
            justify="between"
            style={{position: 'absolute', bottom: '0px', boxShadow: '0 1px 15px -8px'}}
        >
            <Uploader />
        </Box>
    );
}

export default ImagePreview;