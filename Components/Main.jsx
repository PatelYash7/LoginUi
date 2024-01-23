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
        gap:15
    },text:{
        display:'flex',
        flexDirection: 'column',
        gap:20,
        borderRadius: 10,
        margin:15,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },textContent:{
        fontStyle:'normal',
       fontSize:25,
    },
    Input: {
        display:'flex',
        flexDirection: 'column',
        gap:20,
        borderRadius: 10,
    },
    InputBox:{
        // width:'100%',
        backgroundColor:'#F6F9FB',
        paddingVertical:10,
        paddingHorizontal:50,
        borderRadius: 10,
        color:'black'

    },button:{
        width:'70%',
        marginTop:15,
    },
    buttonContent:{
        borderRadius:20,
        fontSize:5,
        backgroundColor:'#ffffff',
        
    }
});

const MainComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text} >
                <Text style={styles.textContent}>Sign Up</Text>
            </View>
            <View style={styles.Input} >
                <TextInput style={styles.InputBox} textContentType='name' placeholder="Enter your name" />
            
                <TextInput style={styles.InputBox} textContentType='emailAddress' placeholder='Enter your email' />
           
                <TextInput style={styles.InputBox} textContentType='password' placeholder='Password' />
          
                <TextInput style={styles.InputBox}  textContentType='password' placeholder='Confirm Password' />
            </View>
            <View style={styles.button}>
                <Button style={styles.buttonContent}  title="Sign Up" />
            </View>
            <View style={{marginTop:5}}>
                <Text style={{fontSize:12,width:"40%"}}>Already Have an Account ? Log In</Text>
            </View>
            <View style={{marginTop:0}}>
                <Divider />
            </View>
            {/* Divider */}
            <View style={styles.button}>
                <Button title="Sign Up with Google" backgroundColor="#4285f4"  />
            </View>

        </View>
    )
}

export const Main = memo(MainComponent)