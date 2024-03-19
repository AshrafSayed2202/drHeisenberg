import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale()

export const SIZES = {
    small: 9 * fontScale,
    medium: 14 * fontScale,
    large: 18 * fontScale,
    xLarge: 24 * fontScale
}

export const COLORS = {
    main: "#F9FBE7",
    second: '#E78895',
    coloredTextOne: '#ECCDB4',
    coloredTextTwo: '#FEA1A1',
    text: '#000'
}