import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

const List = props => {
  checking = () => {
    console.log('checking');
    console.log(this.props.data);
  };

  return (
    <View>
      <Text>hello</Text>
      <Button onPress={checking} title="button"></Button>
      <Button onPress={props.getUsers} title="button 2"></Button>
      <Text>{JSON.stringify(props.data)}</Text>
    </View>
  );
};

export default List;

// class List extends Component {

//   checking = () => {
//     console.log("checking");
//     this.props.getUsers
//     console.log(this.props.data);
//   }

//   render() {
//     return (
//       <View>
//         <Text>hello</Text>
//         <Button onPress={this.checking} title="button" ></Button>
//         <Button onPress={this.props.getUsers} title="button 2" ></Button>
//         <Text>{JSON.stringify(this.props.data)}</Text>
//       </View>
//     )
//   }
// }

// export default List
