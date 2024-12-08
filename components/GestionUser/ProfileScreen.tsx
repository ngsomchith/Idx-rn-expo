import React, { useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { useAuth } from '../../app/AuthContext';

const ProfileScreen: React.FC = () => {
  const { currentUser, logout } = useAuth();
    useEffect(() => {
        console.log("user / ProfileScreen 8 ", currentUser)
    }, [currentUser])
  return (
    <View>
      {currentUser ? (
        <>
          <Text>Bienvenue, {(currentUser.name!='' && currentUser.name!=undefined) ? 'nom :' + currentUser.name :  currentUser.email}!</Text>
          <Button title="Se déconnecter" onPress={logout} />
        </>
      ) : (
        <Text>Vous n'êtes pas connecté.</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
