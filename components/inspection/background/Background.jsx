import { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { AppContext } from '../../context/AppContext';
import SelectDropdown from 'react-native-select-dropdown';

const fields = [
  {
    type: 'text',
    displayName: 'FACILITY NAME',
    formId: 'facility__name',
  },
  {
    type: 'text',
    displayName: 'INSTALLATION',
    formId: 'installation',
  },
  {
    type: 'text',
    displayName: 'FACILITY ADDRESS',
    formId: 'facility__address',
  },
  {
    type: 'select',
    displayName: 'INSPECITON TYPE',
    formId: val => {
      switch (val) {
        case 'Routine':
          return 'inspection__type__routine';
        case 'Follow-up':
          return 'inspection__type__follow__up';
        case 'Complaint':
          return 'inspection__type__complaint';
        case 'Preoperational':
          return 'inspection__type__preoperational';
        case 'Other':
          return 'inspection__type__other';
        default:
          return '';
      }
    },
  },
  {
    type: 'text',
    displayName: 'INSPECTOR NAME AND RANK',
    formId: 'inspector__name__rank',
  },
  {
    type: 'text',
    displayName: 'INSPECTOR PHONE',
    formId: 'inspector__phone',
  },
  {
    type: 'text',
    displayName: 'INSPECTOR EMAIL',
    formId: 'inspector__email',
  },
  {
    type: 'text',
    displayName: 'INSPECTOR UNIT',
    formId: 'inspector__unit',
  },
  {
    type: 'text',
    displayName: 'Person In Charge FULL NAME',
    formId: 'PIC__name',
  },
  {
    type: 'text',
    displayName: 'Person In Charge PHONE',
    formId: 'PIC__phone',
  },
  {
    type: 'text',
    displayName: 'Person In Charge E-MAIL',
    formId: 'PIC__email',
  },
];

const inpectionTypes = [
  'Routine',
  'Follow-up',
  'Complaint',
  'Preoperational',
  'Other',
];

const BackgroundForm = ({ navigation }) => {
  const { backgroundValues, setBackgroundValues } = useContext(AppContext);

  const handleInput = (text, i) => {
    setBackgroundValues(prevBackgroundValues => {
      const updatedBackgroundValues = [...prevBackgroundValues];
      updatedBackgroundValues[i] = {
        ...prevBackgroundValues[i],
        text: text,
        type: fields[i].type,
        formid: fields[i].formId,
      };

      return updatedBackgroundValues;
    });
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView>
        <View style={styles.listContainer}>
          {fields.map((el, i) => (
            <View key={i} style={styles.contentContainer}>
              <Text style={styles.label}>{el.displayName}</Text>
              {el.type === 'select' ? (
                <SelectDropdown
                  data={inpectionTypes}
                  onSelect={text => handleInput(text, i)}
                  buttonStyle={{ width: 350 }}
                />
              ) : (
                <TextInput
                  style={styles.textBox}
                  onChangeText={text => handleInput(text, i)}
                  value={backgroundValues[i]?.text ?? ''}
                />
              )}
            </View>
          ))}

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
  listContainer: {
    marginBottom: 400,
  },
  parentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  label: {
    fontFamily: 'Raj',
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
  },
  textBox: {
    height: 40,
    width: 350,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'Open-Sans',
    fontSize: 15,
    alignSelf: 'center',
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
    fontFamily: 'Open-Sans',
  },
  contentContainer: {
    marginTop: 5,
    backgroundColor: 'white',
  },
});

export default BackgroundForm;