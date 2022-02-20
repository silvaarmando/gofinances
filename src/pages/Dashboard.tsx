import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export function Dashboard() {
  return (
    <View
      style={caju.container}
    >
      <Text>
        Dashboard
      </Text>
    </View>
  )
}

const caju = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
