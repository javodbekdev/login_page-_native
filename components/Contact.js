import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Contact = () => {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.text}>Create new account</Text>
                <TextInput placeholder="Email or phone number" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.push('About')} > 
                    <Text style={{color: '#fff', fontSize: 16}}>Sing Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    block: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#EB4C53',
        paddingRight: 40,
        paddingBottom: 20
    },
    input: {
        width: 300,
        height: 60,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 25,
        paddingLeft: 20
    },
    button: {
        width: 300,
        height: 60,
        backgroundColor: '#EB4C53',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 40,
    },
    btn: {
        width: 260,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
    },
    sing: {
        width: 260,
        height: 60,
        backgroundColor: '#2B5278',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20,
    }
})
