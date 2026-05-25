import Constants from 'expo-constants'
import { Text, View, StyleSheet } from 'react-native'
import RepositoryList from './RepositoryList'

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1
    }
})

const Main = () => {
    return (
        <View style={styles.container}>
            <RepositoryList />
        </View>
    )
}

export default Main