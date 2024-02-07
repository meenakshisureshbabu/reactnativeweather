import { StyleSheet, View } from "react-native";
import Txt from "../Txt/Txt";

export const s = StyleSheet.create({
    footer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        flex:1,
        borderColor:"white",
        backgroundColor:"#0000001c",
        borderRadius:15,
        borderWidth:2,
    }

})

export function StyledContainer({children}){
    return <View style = {{alignItems:"center"}}>{children}</View>
}

export function StyledLabel({children}){
    return <Txt style = {{fontSize:20}}>{children}</Txt>
}

export function StyledValue({children}){
    return <Txt style = {{fontSize:15}}>{children}</Txt>
}