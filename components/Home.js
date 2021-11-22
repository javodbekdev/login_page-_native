import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.text}>Say hello to your new app</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.push('About')} > 
                    <Text style={{color: '#fff', fontSize: 16}}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Contact')} >
                    <Text style={{color: '#000', fontSize: 16}}>Sing up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    block: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#EB4C53',
        textAlign: 'center'
    },
    button: {
        width: 300,
        height: 60,
        backgroundColor: '#EB4C53',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 60,
    },
    btn: {
        width: 300,
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EB4C53',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 30,
    }
});
