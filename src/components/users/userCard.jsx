import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  compareName,
  getInitialNameSurname,
  getRadndomColor,
} from '../../utils/functions';
import themeColors from '../../theme/themeColors';
import {ArrowRight, ArrowRight2, Civic} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';
import {USERDETAİL} from '../../utils/routes';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAİL, {user: user})}
      style={styles.container}>
      <View>
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getRadndomColor(),
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {getInitialNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>

      <View style={{padding: 10, flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>
          {compareName(user.name, user.surname)}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '500'}}>{user.email}</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ArrowRight size={25} color={themeColors.GRAY} />
      </View>
    </Pressable>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeColors.WHİTE,
    padding: 10,
    marginTop: 3,
  },
});
