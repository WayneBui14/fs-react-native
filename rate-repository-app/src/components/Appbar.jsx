import { View, StyleSheet, Pressable, Text } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#24292e'
    },
    tabText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.tabText}>Repositories</Text>
            </Pressable>
        </View>
    )
}

export default AppBar