import * as React from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Title,} from 'react-native-paper';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {useSelector,useDispatch} from 'react-redux';

import {styles} from './Style'

const Home=(props:any)=> {

  const email = useSelector((state:any) => state.PROFILE.email);

  const {navigation} = props

  const Logout = () => {
    props.route.params.setUserLogin(false)
  }

  return (
    <View>
      <Card style={[styles.cardContainer, styles.elevation]}>
        <Card.Content>
          <Title>{email}</Title>
        </Card.Content>
        <Card.Content style={{margin: 20}}>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Card.Content>
            <Text style={styles.text}>Naman</Text>
          </Card.Content>
        </Card.Content>
      </Card>

      <View>
        <View style={styles.viewabc}>
          <Grid>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('LoadScreen')}>
                <Card style={styles.cardMainButtonContainer}>
                  <Card.Content style={styles.cardButtonContent}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../components/Images/inventory.png')}
                    />
                    <Text style={styles.buttonText}>Inventory</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </Col>
            <Col style={{marginLeft: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate('CoustomerView')}>
                <Card style={styles.cardMainButtonContainer}>
                  <Card.Content style={styles.cardButtonContent}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../components/Images/customer-feedback.png')}
                    />
                    <Text style={styles.buttonText}>Customer Visit</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
        <View style={styles.viewabc}>
          <Grid>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('UnloadScreen')}>
                <Card style={styles.cardMainButtonContainer}>
                  <Card.Content style={styles.cardButtonContent}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../components/Images/inventory.png')}
                    />
                    <Text style={styles.buttonText}>Unload</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </Col>
            <Col style={{marginLeft: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <Card style={styles.cardMainButtonContainer}>
                  <Card.Content style={styles.cardButtonContent}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../components/Images/client.png')}
                    />
                    <Text style={styles.buttonText}>Information</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
        <View style={styles.viewabc}>
          <Grid>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Settlement')}>
                <Card style={styles.cardMainButtonContainer}>
                  <Card.Content style={styles.cardButtonContent}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../components/Images/deal.png')}
                    />
                    <Text style={styles.buttonText}>Settlement</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </Col>
            <Col style={{marginLeft: 10}}>
              <TouchableOpacity onPress={() => Logout()}>
                <Card style={styles.cardMainButtonContainer}>
                  <Card.Content style={styles.cardButtonContent}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../components/Images/logout.png')}
                    />
                    <Text style={styles.buttonText}>LogOut</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
      </View>
    </View>
  );
}

export default Home