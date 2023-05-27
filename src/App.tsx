import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
// import "./App.css"
import {
    Box,
    Button,
    Grommet,
    Header,
    Page,
    PageContent,
    Sidebar,
    Text,
    ThemeType,
} from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCompass,
    faSave,
    faShuffle,
    faPlus,
    faMinus,
} from '@fortawesome/free-solid-svg-icons';
import ZoomControl from './features/zoom-control/zoomControl';
import { ScrapBookTheme } from './theme';
import MenuOperations from './features/menu-operations/menu-operations';
import Canvas from './features/canvas/canvas';
import ImagePreview from './features/upload-images/image-preview';
import { ModalDialog } from './features/modal-dialog/modal-dialog';

export const App = () => {
    return (
        <Grommet theme={ScrapBookTheme} full>
            <ModalDialog />
            <Page
                background={'background-contrast'}
                kind="full"
                height={'100%'}
            >
                <Box
                    width={'100%'}
                    pad={{ horizontal: 'small', vertical: 'small' }}
                    direction="row"
                    justify="between"
                >
                    <Box direction="row" align="center" gap="5px">
                        <FontAwesomeIcon icon={faCompass} />
                        <Text size="large">ScreenBook</Text>
                    </Box>

                    <Box direction="row" justify="end" gap="20px">
                        <MenuOperations />
                        <ZoomControl />
                    </Box>
                </Box>
                
                <Canvas></Canvas>

                <ImagePreview />

            </Page>
        </Grommet>
    );
}

export default App;
