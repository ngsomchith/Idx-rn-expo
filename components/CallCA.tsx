

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Linking, Text, TouchableOpacity, View } from 'react-native';
import { Colors, iconCB } from '../config';
import ButtonStd from './ButtonTypeStd';
import { addItemAndSetId, getItems, getUserinFB, informClientvalidPanier, informNewBeneficiairePromo, mailingSendto, updateItemFieldModel, updateItemModel, verifiersiEmailExist } from '../services/Firebase';
import { addDoc, getDoc } from 'firebase/firestore';
import ThisDevice from '../constants/ThisDevice';

// { userEmail = currentUserEmail}
// { num_fact = '2023122501'}
// { total = totalPanier}

const CallCA = ({navigation,currentCdeEnCours, userEmail, num_fact, total }) => {
  // window.alert('Call CA')
  console.log('CallCA currentCdeEnCours, userEmail, num_fact, total', currentCdeEnCours, userEmail, num_fact, total)
  const [isLoading, setLoading] = useState(true);
  // const myUrlPhp = "https://recette-tpeweb.e-transactions.fr/php/"

  const styles20 = ThisDevice().styles0


  const device = ThisDevice().device
  const MAXWIDTH = ThisDevice().device.width - 5

  const postData = {
    key1: 'value1',
    key2: 'value2',
    // Add other key-value pairs as needed
  };
  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(postData)) {
    formData.append(key, value);
  }


  // const [data, setData] = useState(null);

  //   <a href="page_destination.php
  //   ?variable1=<?php echo urlencode($variable1); ?>
  //   &variable2=<?php echo urlencode($variable2); ?>
  //   ">
  //     Cliquez ici pour aller à la page de destination
  // </a>
  // let userEmail = 'client2a@aa.aa'
  // let num_fact='2023122501'
  // let total='12.34'
  let get1 = '?userEmail=' + userEmail
  let get2 = '&num_fact=' + num_fact
  let get3 = '&total=' + total
  // let phpSiteUrl = "https://udex-web.fr/delicatessen-ca-sdk/index2.php";
  const phpSiteUrl = 'https://livraison-repas-toulon.fr/delicatessen-ca-sdk';

  const urlWithVar = phpSiteUrl + get1 + get2 + get3

  // window.open(urlWithVar)

  const openPhpSite = async () => {
    console.log("openPhpSite PAYER : CallCA")
    console.log("urlWithVar = ", urlWithVar)
    // Remplacez l'URL par le lien de votre site PHP

    // Ouvrir le lien dans le navigateur du périphérique
    Linking.openURL(urlWithVar).catch(err =>
      console.error('Impossible d\'ouvrir le lien : ', err)
    );

    // maj emailBeneficiairePromo si totalPAnier >=30
    if(total>=30 || Number(total)>30){
      const result = await verifiersiEmailExist(currentCdeEnCours?.emailBeneficiairePromo)

      if(result?.length>0){
        console.log('addItemAndSetId  ', )
      }else{
        console.log(" addItemAndSetId(emailByPromo)")
        addItemAndSetId('emailByPromo', 
        {
          currentEmail : currentCdeEnCours.panierUserEmail,
          newBeneficiaireEmail : currentCdeEnCours.emailBeneficiairePromo,
          date_debut: (currentCdeEnCours.dateFact).substr(0,6)
        }
        
        
        )

        const sellerName = 'Delicatessen'
        const sellerEmail ='delicatessen.cloud@gmail.com'
        // const detailMailing = ' message to send ... '
        const userEmail = currentCdeEnCours.panierUserEmail
        const newBeneficiaireEmail = currentCdeEnCours.emailBeneficiairePromo
        await informNewBeneficiairePromo(
          sellerName,
          sellerEmail,
          userEmail,
          newBeneficiaireEmail
        ) 
      }
    }

    // window.location.href = urlWithVar

  }



  // function mailingSender(value) {
  //   console.log(value)

  //   const sellerName = 'Delicatessen'
  //   const sellerEmail ='delicatessen.cloud@gmail.com'
  //   const detailMailing = 'Lorsque vous validez une commande supérieure ou égal à 30,00 euros, vous pourrez offrir un avoir de 10€ non remboursable à valoir sur l\'achat d\' un plat chez delicatessen.cloud@gmail.com à une personne de votre choix : ce bon est réservé uniquement au nouveau client (nom, tél et email inconnu de notre base de données) '
  //   const userEmail = value.email
  //   mailingSendto(
  //     sellerName,
  //     sellerEmail,
  //     detailMailing,
  //     userEmail,
  //   ) 
  // }



  // const openPhpWithPost = () => {

  //   // Use the fetch function to make a POST request
  //   fetch(phpSiteUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: formData.toString(),
  //   })
  //     .then(response => {
  //       // Handle the response as needed
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error(error);
  //     });
  // }

  // async function openPHPLink() {

  //   // lien firebase functions = https://us-central1-delicatessencloud.cloudfunctions.net/openPHPLink

  //   // const [data, setData] = useState(null);

  //   //   <a href="page_destination.php
  //   //   ?variable1=<?php echo urlencode($variable1); ?>
  //   //   &variable2=<?php echo urlencode($variable2); ?>
  //   //   ">
  //   //     Cliquez ici pour aller à la page de destination
  //   // </a>
  //   // let userEmail = 'client2a@aa.aa'
  //   // let num_fact='2023122501'
  //   // let total='12.34'

  //   const get1 = '?userEmail=' + userEmail
  //   let get2 = '&num_fact=' + num_fact
  //   let get3 = '&total=' + total
  //   // let phpSiteUrl = "https://udex-web.fr/delicatessen-ca-sdk/index2.php";
  //   const phpSiteUrl = 'https://udex-web.fr/delicatessen-ca-sdk/index2.php';
  //   const urlWithVar = phpSiteUrl + get1 + get2 + get3
  //   console.log(107, "openPHPLink :: https://us-central1-delicatessencloud.cloudfunctions.net/openPHPLink")
  //   try {
  //     const response = await fetch(
  //       // 'https://udex-web.fr/delicatessen-ca-sdk/index2.php'
  //       'https://us-central1-delicatessencloud.cloudfunctions.net/openPHPLink'
  //       // urlWithVar
  //       // 'https://your-firebase-project-url.cloudfunctions.net/openPHPLink'
  //     );

  //     const data = await response.text();

  //     // Traitez la réponse PHP si nécessaire
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // Appelez la fonction où vous en avez besoin
  // openPHPLink();
  const openPHPPage = async () => {
    const get1 = '?userEmail=' + userEmail
    let get2 = '&num_fact=' + num_fact
    let get3 = '&total=' + total
    // let phpSiteUrl = "https://udex-web.fr/delicatessen-ca-sdk/index2.php";
    const phpSiteUrl = 'https://udex-web.fr/delicatessen-ca-sdk/index2.php';
    const urlWithVar = phpSiteUrl + get1 + get2 + get3
    console.log(135, "PHPPage :: https://us-central1-delicatessencloud.cloudfunctions.net/openPHPLink")

    // let result = await WebBrowser.openBrowserAsync(
    //   urlWithVar
    //   // 'https://example.com/your-php-page.php'
    //   );
    // You can handle the result if needed
    try {
      // Perform your Firebase operation, e.g., fetching a URL from Firestore
      // const doc = await db.collection('yourCollection').doc('yourDocument').get();
      // const url = doc.data().url;

      // Open the URL in the default web browser
      await Linking.openURL(urlWithVar);
    } catch (error) {
      console.error('Error opening URL:', error);
    }

  };



  return (
    <View style={{
      width: MAXWIDTH,
      maxWidth: '100%',
      // minHeight: device.height * 0.5,
      // flex: 1, 
      padding: 5,
      zIndex:999,
      // borderColor: 'yellow',
      // borderStyle: 'solid',
      // borderWidth: 5,
    }}>
     

        <ButtonStd iconL={undefined} iconR={undefined}
          label={'Payer   ' + total + ' €'} labelColor={Colors.accentBG}
          onPress={openPhpSite} onChange={undefined} bgButton={undefined} />


    </View>
  );
};

export default CallCA;