import React, { useEffect } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { useAuth } from '../../app/AuthContext';
import { Colors } from '@/constants/Colors';

const ProfileScreen: React.FC = () => {
  const { currentUser, logout } = useAuth();
    useEffect(() => {
        console.log("user / ProfileScreen 8 ", currentUser)
    }, [currentUser])
  return (
    <View style={styles.containerColumn}>
      {currentUser ? (
        <>
          <Text style={{ color:Colors.primaryText}}>Bienvenue, {(currentUser.name!='' && currentUser.name!=undefined) ? 'nom :' + currentUser.name :  currentUser.email}!</Text>
          <Button title="Se déconnecter" onPress={logout} />
        </>
      ) : (
        <Text>Vous n'êtes pas connecté.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerColumn: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      borderColor: 'white', borderStyle: 'solid', borderWidth: 2,
  },
  // mainContainer: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: 'blue',//Colors.background || '#f5f5f5',
  //     borderColor: 'yellow', borderStyle: 'solid', borderWidth: 2,
  // },
  openModalButton: {
      width: '80%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary || '#4caf50',
      borderRadius: 10,
      marginVertical: 10,
      borderColor: 'green', borderStyle: 'solid', borderWidth: 2,
  },
  // modalContainer: {
  //     flex: 1,
  //     // backgroundColor: Colors.background || '#ffffff',
  //     backgroundColor: Colors.primaryBG || '#f5f5f5',
  //     borderTopLeftRadius: 20,
  //     borderTopRightRadius: 20,
  //     padding: 20,
  //     borderColor: 'red', borderStyle: 'solid', borderWidth: 2,
  // },
  modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      // borderColor: Colors.border || '#e0e0e0',
      paddingBottom: 10,
      backgroundColor: Colors.background || '#ffffff',
      borderColor: 'pink', borderStyle: 'solid', borderWidth: 2,
  },
  modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.textPrimary || '#000000',
      borderColor: 'purple', borderStyle: 'solid', borderWidth: 2,
  },
  closeButton: {
      padding: 10,
      backgroundColor: Colors.closeButton || '#ff4d4d',
      borderRadius: 15,
      borderColor: 'red', borderStyle: 'solid', borderWidth: 2,
  },
  closeButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
  },
  modalContent: {
      flex: 1,
      marginTop: 20,
      borderColor: 'turquoise', borderStyle: 'solid', borderWidth: 2,
  },
  userInfo: {
      marginBottom: 20,
      padding: 10,
      // backgroundColor: Colors.userInfoBackground || '#e0f7fa',
      borderRadius: 10,
      borderColor: 'yellow', borderStyle: 'solid', borderWidth: 2,
  },
  connectedText: {
      fontSize: 16,
      color: Colors.textSecondary || '#00796b',
      marginBottom: 10,
      borderColor: 'coral', borderStyle: 'solid', borderWidth: 2,
  },
  logoutButton: {
      padding: 10,
      backgroundColor: Colors.primary || '#4caf50',
      borderRadius: 10,
      alignItems: 'center',
  },
  logoutText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});
export default ProfileScreen;
