import React, { useEffect } from 'react';
import { Text, Button, View, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../../app/AuthContext';
import { Colors } from '@/constants/Colors';
import { EditUser } from './EditUser';
import { ExternalLink } from '../ExternalLink';
import { ThemedText } from '../ThemedText';

const ProfileScreen: React.FC = () => {
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    console.log("user / ProfileScreen", currentUser);
  }, [currentUser]);

  return (
    <View style={styles.container}>
      {currentUser ? (
        <>
          <Text style={styles.title}>ProfileScreen</Text>
          <Text style={styles.welcomeText}>
            Bienvenue, {currentUser.name ? `nom: ${currentUser.name}` : currentUser.email}!
          </Text>
          {/* <Button title="Se déconnecter" onPress={logout} /> */}
        <Pressable onPress={logout}>
          <ExternalLink href="https://delicatessen.cloud/"  target="_self" >
            <ThemedText type="link">Se déconnecter</ThemedText>
          </ExternalLink>
        </Pressable>
          
          <EditUser thisCurrentUser={currentUser} />
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
    fontSize: 20,
    marginBottom: 10,
  },
  welcomeText: {
    color: Colors.primaryText,
    marginBottom: 20,
  },
  notLoggedInText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileScreen;
