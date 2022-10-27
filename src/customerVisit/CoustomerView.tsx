import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Card, Title} from 'react-native-paper';

import dummyContacts from '../components/contacts.json';
import {styles} from './Style'

const CoustomerView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContact, setFilteredContact] = useState(dummyContacts);

  useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContact(newContacts);
  }, [searchTerm]);

  // render
  return (
    <View style={[styles.page]}>
      <View style={{ backgroundColor: '#009387', padding: 10,alignItems:'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Customer Visit Screen
        </Text>
      </View>
      <TextInput
        style={styles.textInputDesign}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search by Name"
      />
      <View style={{marginTop: 30}}>
        <FlatList
          data={filteredContact}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Card style={styles.cardMainButtonContainer}>
                <Card.Content style={styles.cardButtonContent}>
                  <Text style={styles.buttonText}>
                    {item.user_display_name}
                  </Text>
                  <Text style={styles.buttonText}>{item.user_address}</Text>
                  <Text style={styles.buttonText}>{item.user_name}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CoustomerView;
