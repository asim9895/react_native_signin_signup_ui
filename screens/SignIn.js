import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../colors/colors';
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons';
import styles from '../styles/main';

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 120,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>FOX</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: colors.secondary,
            }}>
            HUB
          </Text>
        </View>
        <View style={{ marginTop: 60 }}>
          <Text
            style={{ fontSize: 25, fontWeight: 'bold', color: colors.dark }}>
            Welcome Back,
          </Text>
          <Text
            style={{ fontSize: 17, fontWeight: 'bold', color: colors.light }}>
            Signin to continue
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name='email-outline'
            size={20}
            color={colors.light}
            style={styles.inputIcon}
          />
          <TextInput placeholder='Enter Email' style={styles.inputTextField} />
        </View>
        <View style={styles.inputContainer}>
          <Entypo
            name='lock'
            size={20}
            color={colors.light}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder='Enter Password'
            style={styles.inputTextField}
            secureTextEntry
          />
        </View>
        <View style={styles.signInButton}>
          <Text
            style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}>
            Sign In
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View style={styles.line}></View>
          <Text style={{ color: colors.light, fontWeight: 'bold' }}>OR</Text>
          <View style={styles.line}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colors.light,
              height: 50,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingRight: 10,
                color: colors.light,
              }}>
              Sign In With
            </Text>
            <FontAwesome5 name='facebook' size={22} color={colors.primary} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colors.light,
              height: 50,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingRight: 10,
                color: colors.light,
              }}>
              Sign In With
            </Text>
            <Ionicons name='logo-google' size={22} color='orange' />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{ color: colors.light, fontWeight: 'bold' }}>
            Dont Have An Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text
              style={{
                color: colors.pink,
                fontWeight: 'bold',
                paddingLeft: 5,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
