import { Dimensions } from "react-native";

const win = Dimensions.get('window');
const ratio = win.width / 200;


export const aspect = {
    win,
    ratio,
}