import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    city:{
        
    },
    clock:{
        alignItems:"flex-end"
    },
    temperature:{
        fontSize:130,
    },
    interpretation:{
        alignSelf:"flex-end",
        transform: [{rotate:"-90deg"}]
    },
    temperature_box:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"baseline",
    },
    interpretation_txt:{
        fontSize:20
    }
})