import { View, Text } from 'react-native'
import React from 'react'

const Info = () => {
  return (
    <View>
      <View style={{ backgroundColor: '#009387', padding: 10,alignItems:'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Information Screen
        </Text>
      </View>
      <Text>Info</Text>
    </View>
  )
}

export default Info