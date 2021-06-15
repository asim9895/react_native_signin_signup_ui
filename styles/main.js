import { StyleSheet } from 'react-native';
import colors from '../colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputIcon: {
    marginTop: 5,
    position: 'absolute',
  },
  inputTextField: {
    color: colors.light,
    paddingLeft: 30,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: colors.primary,
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  line: {
    height: 1,
    width: 30,
    backgroundColor: colors.light,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default styles;
