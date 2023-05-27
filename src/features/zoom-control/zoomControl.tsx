import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Text } from 'grommet';

function ZoomControl() {
    return (
        <Box direction="row" gap='5px'>
            <Button secondary onClick={() => {}} icon={<FontAwesomeIcon icon={faPlus} />} />
            <Box background={'background'} pad={{horizontal: 'small'}} align='center' round={'small'}>
                <Text>0.8%</Text>
            </Box>
            <Button secondary onClick={() => {}} icon={<FontAwesomeIcon icon={faMinus} />} />
        </Box>
    );
}

export default ZoomControl;
