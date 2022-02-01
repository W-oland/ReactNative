import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        textAppBar: '#ffffff',

    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    backgroundColor: {
        appBar: '#24292e',
        mainComponent: '#e1e4e8',
        repositoryItem: '#ffffff',
        languageTag: '#0366d6',
    }
};

export default theme;