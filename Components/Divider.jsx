import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display:'flex',
        gap:25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      divider: {
        height: 1,
        width: '80%', // Adjust the width as needed
        backgroundColor: 'black', // Change the color as needed
      },
});

const DividerComponent = () => {
    return (
        <View style={styles.container}>
        <View style={styles.divider}></View>
      </View>
    )
}

export const Divider = memo(DividerComponent,)