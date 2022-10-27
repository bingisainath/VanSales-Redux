import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: 10,
    padding: 10,
  },
  cardContainer: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    margin: 20,
  },
  elevation: {
    shadowColor: 'black',
    elevation: 20,
  },
  text: {
    fontSize: 15,
  },
  invoiceBtn: {
    backgroundColor: 'lightblue',
    alignItems:'center',
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
  },
});
