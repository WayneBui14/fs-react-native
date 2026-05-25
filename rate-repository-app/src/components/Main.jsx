import { View, StyleSheet } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './Appbar'

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <RepositoryList />
        </View>
    )
}

export default Main