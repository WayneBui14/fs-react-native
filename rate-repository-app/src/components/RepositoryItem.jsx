import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'


const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }

  return count
}

const RepositoryItemHeader = ({ avatarUrl, fullName, description, language }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.fullName}>
          {fullName}
        </Text>
        <Text color="textSecondary" style={styles.description}>
          {description}
        </Text>
        <View style={styles.languageTagContainer}>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const RepositoryItemStatItem = ({ label, value }) => {
  return (
    <View style={styles.statItem}>
      <Text fontWeight="bold">{value}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};


const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryItemHeader
        avatarUrl={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
      <View style={styles.statsContainer}>
        <RepositoryItemStatItem label="Stars" value={formatCount(item.stargazersCount)} />
        <RepositoryItemStatItem label="Forks" value={formatCount(item.forksCount)} />
        <RepositoryItemStatItem label="Reviews" value={formatCount(item.reviewCount)} />
        <RepositoryItemStatItem label="Rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};                                             

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10, // Tạo khoảng cách giữa các item
  },
  // Header styles
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5, // Bo góc ảnh
  },
  infoContainer: {
    flexGrow: 1,
    flexShrink: 1, // Để chữ không bị tràn
  },
  fullName: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
  },
  languageTagContainer: {
    flexDirection: 'row', // Để tag không chiếm hết chiều ngang
  },
  languageTag: {
    backgroundColor: '#0366d6', // theme.colors.primary
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  languageText: {
    color: 'white',
  },
  // Stats styles
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Chia đều khoảng cách
  },
  statItem: {
    alignItems: 'center', // Căn giữa nội dung trong mỗi cột
  },
});

export default RepositoryItem