import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'row',
    gap:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: '38%', 
    backgroundColor: 'black', 
    justifyContent:'center',
    alignItems:'center',
    marginTop:4,
  },
});

const DividerComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      <Text style={{fontSize:15}}>or</Text>
      <View style={styles.divider}></View>
    </View>
  )
}

export const Divider = memo(DividerComponent,)