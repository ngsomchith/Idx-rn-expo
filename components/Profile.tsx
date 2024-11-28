import { useContext } from 'react';
// import { AuthContext } from './AuthContext';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';

function Profile() {
    let loading
  const  {currentUser}  = useContext('AuthenticatedUserContext');

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (currentUser) {
    return (
      <div>
        <h2>Profil de {currentUser.displayName}</h2>
        <p>Email : {currentUser.email}</p>
        {/* Autres informations utilisateur */}
      </div>
    );
  } else {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }
}