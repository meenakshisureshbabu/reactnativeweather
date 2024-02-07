import { StyleSheet } from "react-native";

const FONTSIZE = 20;
export const s = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
    },
    weatherimage:{
        width:50,
        height:50,
    },
    day:{
        fontSize:FONTSIZE,
    },
    date:{
        fontSize:FONTSIZE
    },
    temperature:{
        fontSize:FONTSIZE,
        minWidth:50,
        textAlign:"right"
    }

})