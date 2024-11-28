import React, { useState, createContext, useEffect } from 'react';
// import { autoSignUpSocialUser, getItems, getItemsWhere, getUser, getUserinFB } from '../services/Firebase';
// import { UserType } from '../models/UserType';


// import { auth } from '../config';
// import { createUserWithEmailAndPassword } from '@firebase/auth';

// import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
// import { useNavigation } from 'expo-router';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthenticatedUserContext = createContext('AuthenticatedUserContext');



export const AuthenticatedUserProvider = ({ children }) => {

  const [token, setToken] = useState({})
  const [user, setUser] = useState(null);
  const [currentUser, setcurrentUser] = useState('setcurrentUser')
  
  
  useEffect(() => {
    setcurrentUser('setcurrentUser')
  }, [currentUser])

  function setThisUserEmail(userInfo: any) {
    for (const key in userInfo) {
      if (Object.prototype.hasOwnProperty.call(userInfo, key)) {
        const element = userInfo[key];
        if (key == 'email') {
          setcurrentUser(element)
        }

      }
    }

  }



  return (

    <AuthenticatedUserContext.Provider
      value={{
        user, setUser,
        currentUser, setcurrentUser


      }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
