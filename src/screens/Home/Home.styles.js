import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontWeight:"600",
        fontSize:25,
        color:"purple",
        margin:"5%"
    },
    listing_card_container:{
        width:width * 0.425,
        marginRight:width * 0.05,
        marginBottom:width * 0.05,
    },
    listing_flatlist_container:{
        width:width * 0.90,
        marginHorizontal:width * 0.05,
    },
    bottom_space:{
        marginBottom:"20%"
    },
    input:{
        marginHorizontal:"5%",
        paddingHorizontal:10,
        paddingVertical:15,
        marginBottom:"5%",
        backgroundColor:"#E1E1E1",
        borderRadius:8
    }
});