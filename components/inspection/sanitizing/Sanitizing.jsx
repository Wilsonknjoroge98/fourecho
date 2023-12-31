import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import SanatizingTemperature from './subcomponents/SanatizingTemperature';
import SanatizingConcetration from './subcomponents/SanatizingConcentration';

const Sanitizing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView>
        <View style={styles.contentCotnainer}>
          <SanatizingTemperature />

          <SanatizingConcetration />

          <TouchableOpacity
            style={styles.naivgateButton}
            onPress={() => navigation.push('nav')}
          >
            <Text style={styles.navigateButtonText}>Move On To...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  contentCotnainer: {
    marginBottom: 400,
  },
  naivgateButton: {
    textTransform: 'uppercase',
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#4dd0e1',
    padding: 15,
    marginTop: 10,
    width: 200,
    alignSelf: 'center',
  },
  navigateButtonText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Raj',
  },
});

export default Sanitizing;
