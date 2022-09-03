import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button/Button';
import { aspect } from '../helpers/AspectRatio';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style={'dark'} />
      <View style={styles.mockupBgMask}>
          <View style={styles.mockUpContainer}>
            <Image source={require("../../assets/appmockup.webp")} style={styles.chatMockupImage} />
          </View>
      </View>
      <View style={styles.wellcomeContainer}>
        <Text style={styles.wellcomeText}>
            Let's connect {'\n'} with each other!
        </Text>
        <Text style={styles.greetingText}>
            Meet your friends, join in more than 10k+ active communities and much more!
        </Text>
        <View>
            <View>
                <Button>Let's Go</Button>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: aspect.win.height,
        backgroundColor: '#f8f8f8',
    },
    mockUpContainer:{
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderBottomRightRadius: 132,
        overflow: 'hidden',
    },
    chatMockupImage: {
        width: 250,
        height: 150 * aspect.ratio,
    },
    mockupBgMask:{
        backgroundColor: '#1D2757',
    },
    wellcomeContainer: {
        flex: 1,      
        backgroundColor: '#1D2757',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 132,
        paddingTop: 64,
        paddingBottom: 64,  
    },
    wellcomeText: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    greetingText: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 14,
    },
});
