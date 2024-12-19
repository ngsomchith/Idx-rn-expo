import React, { useEffect } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { useAuth } from '../../app/AuthContext';
import { Colors } from '@/constants/Colors';
import { EditUser } from './EditUser';
import ButtonStd from '../ButtonTypeStd';
import { iconClose, iconLogout } from '@/icons';

const ProfileScreen: React.FC = ({setModalProfileVisible}) => {
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    console.log("user / ProfileScreen", currentUser);
  }, [currentUser]);

  return (
    <View style={styles.container}>
      {currentUser ? (
        <>
          <Text style={styles.title}>ProfileScreen</Text>
          <View style={{
            display: 'flex', justifyContent: 'space-between', flexDirection: 'row',
            flexWrap: 'nowrap',
            borderWidth: 3, borderColor: 'white', borderStyle: 'solid',
            width: '90%',
            margin: 'auto',
            borderRadius: 10,
            padding: 10,
            // backgroundColor: Colors.accentBG
          }}>

            <Text style={styles.welcomeText}>
              Bienvenue, {currentUser.name ? `nom: ${currentUser.name}` : currentUser.email}
            </Text>
            {/* <Button title="Se déconnecter" onPress={logout} /> */}
            <View style={{  width: 50, margin:0}}>
              <ButtonStd iconL={undefined} iconR={undefined}

                label={iconLogout} labelColor={Colors.primaryText}
                onPress={logout} onChange={undefined} bgButton={undefined} />
            </View>
          </View>
          <EditUser thisCurrentUser={currentUser} setModalProfileVisible = {setModalProfileVisible} />
        </>
      ) : (
        <Text style={styles.notLoggedInText}>Vous n'êtes pas connecté.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  title: {
    textAlign: 'center',
    color: Colors.primaryText,
    fontSize: 20,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    minWidth: '90%',
    width: '90%',
    color: Colors.primaryText,
    // marginBottom: 20,
  },
  notLoggedInText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileScreen;
