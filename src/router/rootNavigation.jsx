import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {ADDNEWUSER, REMOTEUSERS, USERDETAİL, USERS} from '../utils/routes';
import AddNewUser from '../screens/users/addNewUser';
import UserDetail from '../screens/users/userDetail';
import RemoteUsers from '../screens/users/remoteUsers';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={REMOTEUSERS} component={RemoteUsers} />
      <Stack.Screen name={USERS} component={Users} />

      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAİL} component={UserDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
