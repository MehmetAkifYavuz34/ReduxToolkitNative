import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {use} from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {
  compareName,
  getInitialNameSurname,
  getRadndomColor,
} from '../../utils/functions';
import themeColors from '../../theme/themeColors';
import {Calendar, Call, Harmony, Man, Sms, Woman} from 'iconsax-react-nativejs';
import Button from '../../components/ui/button';

const UserDetail = ({route}) => {
  const {user} = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomWidth: 0.5,
            borderColor: themeColors.GRAY,
          }}>
          <View
            style={{
              width: 85,
              height: 85,
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
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
            {compareName(user.name, user.surname)}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Sms />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.email}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Call />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.phoneNumber}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            {user.gender == 'erkek' ? <Man /> : <Woman />}
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.gender}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Calendar />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.age}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Button title="delete" status="warning" />
          <Button title="update User" status="info" />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({});
