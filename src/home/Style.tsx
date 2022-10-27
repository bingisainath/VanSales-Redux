import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardMainButtonContainer: {
      marginLeft: 15,
      marginRight: 15,
      minHeight:130,
      maxHeight:130,
      marginBottom: 5,
      backgroundColor: 'white',
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 18,
    },
    cardButtonContent: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      padding: 12,
      textAlign: 'center',
      color: 'black',
    },
  
    viewabc: {
      flexDirection: 'row',
      margin: 15,
      marginRight: 20,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardviewContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginHorizontal: 20,
      padding: 16,
      borderRadius: 8,
    },
    cardContainer: {
      borderColor: 'black',
      borderWidth: 1,
      paddingBottom: 5,
      backgroundColor: 'white',
      borderRadius: 25,
      margin: 20,
      alignItems: 'center',
    },
    elevation: {
      shadowColor: 'red',
      elevation: 20,
    },
    text: {
  
      fontSize: 20,
      padding: 5,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });