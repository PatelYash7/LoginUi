import React, { memo } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Divider } from './Divider';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        height: '70%',
        width: '80%',
        borderRadius: 20,
        gap:20
    },content:{
        display:'flex',
        flexDirection: 'column',
        gap:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        width:'100%',
        padding:20,
        marginTop:10
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent:'flex-start',
        alignItems: 'center',
        paddingTop: 25,
        fontSize: 20,
        
    },
    text:{
        fontSize:18,
    }
});

const MainComponent = () => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.heading}>Sign Up</Text>
            </View>
            <View style={styles.content}>
                <TextInput style={styles.text} placeholder="Enter your name" />
            
                <TextInput placeholder='Enter your email' />
           
                <TextInput placeholder='Password' />
          
                <TextInput placeholder='Confirm Password' />
            </View>
            <View>
                <Button title="Sign Up" />
            </View>
            <View>
                <Text>Already Have an Account ? Log In</Text>
                <Divider />
            </View>
            {/* Divider */}
            <View>
                <Button title="Sign Up with Google" backgroundColor="#4285f4"  />

            </View>

        </View>
    )
}

export const Main = memo(MainComponent)