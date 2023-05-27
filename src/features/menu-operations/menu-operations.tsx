import { faSave, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "grommet";


function MenuOperations() {
    return (
        <Box direction="row" gap="5px">
            <Button primary icon={<FontAwesomeIcon icon={faSave} />} />
            <Button primary icon={<FontAwesomeIcon icon={faShuffle} />} />
        </Box>
    );
}

export default MenuOperations;
