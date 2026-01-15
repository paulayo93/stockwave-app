import { ColorValue, StatusBarStyle, StatusBar, Platform } from 'react-native';
export const isAndroid = Platform.OS === 'android';


export const setStatusBar = (color: ColorValue, barStyle: StatusBarStyle) => {
    if (isAndroid) {
        StatusBar.setBackgroundColor(color || '#ffffff');
        StatusBar.setBarStyle(barStyle || 'light-content')
    }
}

export const hitSlop = {
    top: 25,
    bottom: 25,
    left: 15,
    right: 15,
};
