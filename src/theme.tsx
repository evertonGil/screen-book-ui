import { ThemeType, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const colors = {
    brand: '#24259E',
    'brand-contrast': '#4D4DB3',
    'accent-1': '#2166B5',
    'accent-2': '#6821B5',
    'accent-3': '#17A3AD',
    'accent-4': '#A81AAD',
};

const internalTheme: ThemeType = {
    global: {
        colors,
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
    button: {
        extend: grommet.button?.extend,
        default: {
            extend: `padding: 0px 0px`,
        },
        secondary: {
            border: {
                color: 'brand',
                width: '2px',
            },
            color: 'brand',
        },
        primary: {
            background: 'brand',
        },
        active: {
            color: 'text',
            border: {
                color: 'brand-contrast',
            },
            primary: {
                background: 'brand-contrast',
            },
            secondary: {
                background: 'none',
                extend: `color: ${colors['brand-contrast']}`,
            },
        },
    },
};

export const ScrapBookTheme = deepMerge(grommet, internalTheme);
