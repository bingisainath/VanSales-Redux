import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Card, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import {useSelector,useDispatch} from 'react-redux';

import {style} from './Style';

const Settlement = (props:any) => {

  const email = useSelector((state:any) => state.PROFILE.email);
  const password = useSelector((state:any) => state.PROFILE.password);

  const {navigation} = props


  useEffect(() => {
    const Price =
      No_OF_1000 * 1000 +
      No_OF_500 * 500 +
      No_OF_200 * 200 +
      No_OF_100 * 100 +
      No_OF_50 * 50 +
      No_OF_20 * 20 +
      No_OF_10 * 10 +
      coins * 5;
    setTotalCash(Price);
  });

  const [totalCash, setTotalCash] = useState(0);
  const [No_OF_1000, setNo_OF_1000] = useState(0);
  const [No_OF_500, setNo_OF_500] = useState(0);
  const [No_OF_200, setNo_OF_200] = useState(0);
  const [No_OF_100, setNo_OF_100] = useState(0);
  const [No_OF_50, setNo_OF_50] = useState(0);
  const [No_OF_20, setNo_OF_20] = useState(0);
  const [No_OF_10, setNo_OF_10] = useState(0);
  const [coins, setCoins] = useState(0);

  const Increment = (data: number) => {
    let Price: number;
    switch (data) {
      case 1000:
        Price = No_OF_1000 + 1;
        setNo_OF_1000(Price);
        break;
      case 500:
        Price = No_OF_500 + 1;
        setNo_OF_500(Price);
        break;
      case 200:
        Price = No_OF_200 + 1;
        setNo_OF_200(Price);
        break;
      case 100:
        Price = No_OF_100 + 1;
        setNo_OF_100(Price);
        break;
      case 50:
        Price = No_OF_50 + 1;
        setNo_OF_50(Price);
        break;
      case 20:
        Price = No_OF_20 + 1;
        setNo_OF_20(Price);
        break;
      case 10:
        Price = No_OF_10 + 1;
        setNo_OF_10(Price);
        break;
      case 5:
        Price = coins + 1;
        setCoins(Price);
        break;
      default: return 0
    }
  };

  const Decrement = (data: number) => {
    let Price: number;
    switch (data) {
      case 1000:
        if (No_OF_1000 > 0) {
          const Price = No_OF_1000 - 1;
          setNo_OF_1000(Price);
        }
        break;
      case 500:
        if (No_OF_500 > 0) {
          const Price = No_OF_500 - 1;
          setNo_OF_500(Price);
        }
        break;
      case 200:
        if (No_OF_200 > 0) {
          const Price = No_OF_200 - 1;
          setNo_OF_200(Price);
        }
        break;
      case 100:
        if (No_OF_100 > 0) {
          const Price = No_OF_100 - 1;
          setNo_OF_100(Price);
        }
        break;
      case 50:
        if (No_OF_50 > 0) {
          const Price = No_OF_50 - 1;
          setNo_OF_50(Price);
        }
        break;
      case 20:
        if (No_OF_20 > 0) {
          const Price = No_OF_20 - 1;
          setNo_OF_20(Price);
        }
        break;
      case 10:
        if (No_OF_10 > 0) {
          const Price = No_OF_10 - 1;
          setNo_OF_10(Price);
        }
        break;
      case 5:
        if (coins > 0) {
          const Price = coins - 1;
          setCoins(Price);
        }
        break;
      default: return 0
    }
  };

  return (
    <View>
      <View style={{ backgroundColor: '#009387', padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Settlement Screen
        </Text>
      </View>
      <Card style={[style.cardContainer, style.elevation]}>
        <Card.Content>
          <Title>Cash</Title>
        </Card.Content>
        <Card.Content style={{paddingBottom: 20}}>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
          />
        </Card.Content>
        <Card.Content>
          <Text style={{fontSize: 20}}>Cash : {totalCash}</Text>
        </Card.Content>
      </Card>
      <Card style={[style.cardContainer, , style.elevation]}>
        <Card.Content style={{marginBottom: 5}}>
          <Title>Denomination Entry</Title>
        </Card.Content>
        <Card.Content>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </Card.Content>
        <Card.Content>
          <View style={style.container}>
            <Text style={style.text}>
              1000 x {No_OF_1000} = {No_OF_1000 * 1000}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setNo_OF_1000(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(1000)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(1000)}
              />
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.text}>
              500 x {No_OF_500} = {No_OF_500 * 500}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setNo_OF_500(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(500)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(500)}
              />
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.text}>
              200 x {No_OF_200} = {No_OF_200 * 200}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setNo_OF_200(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(200)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(200)}
              />
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.text}>
              100 x {No_OF_100} = {No_OF_100 * 100}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setNo_OF_100(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(100)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(100)}
              />
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.text}>
              50 x {No_OF_500} = {No_OF_500 * 50}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setNo_OF_50(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(50)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(50)}
              />
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.text}>
              20 x {No_OF_20} = {No_OF_20 * 20}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setNo_OF_20(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(20)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(20)}
              />
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.text}>
              10 x {No_OF_10} = {No_OF_10 * 10}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setNo_OF_10(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(10)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(10)}
              />
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.text}>
              Coins x {coins} = {coins * 5}
            </Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={{marginTop: -14}}
              onChangeText={data => setCoins(parseInt(data))}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Icon.Button
                name="chevron-up"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Increment(5)}
              />
              <Icon.Button
                name="chevron-down"
                color="black"
                backgroundColor="white"
                style={{padding: -5}}
                onPress={() => Decrement(5)}
              />
            </View>
          </View>
        </Card.Content>
      </Card>
      <View>
      <TouchableOpacity style={style.invoiceBtn} onPress={() => navigation.navigate('Invoice',{Price:totalCash})}>
       <Text style={{color:'darkblue',fontWeight:'900'}}>Generate Invoice</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Settlement;
