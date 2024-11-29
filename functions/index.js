/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


const functions = require("firebase-functions");
const admin = require("firebase-admin");

const nodemailer = require("nodemailer");
// const cors = require('cors')({origin: true});
admin.initializeApp();

require("dotenv").config();
const express = require("express");
const app = express();
const port = '8888/www'; // port de localhost ?

const { SENDER_EMAIL, SENDER_PASSWORD, STRIPE_KEY } = process.env;


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
// ----------------------------------

// //utilisation de firestore exclusivement dans functions par httpsCallable
exports.contactMessage = functions.https.onCall(async (data, context) => {
    const { name, email, message } = data;
  
    if (!name || !email || !message) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Tous les champs sont obligatoires."
      );
    }
  
    try {
      await functions.firestore.collection("contacts").add({
        name,
        email,
        message,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
      return { success: true, message: "Message envoyé avec succès." };
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      throw new functions.https.HttpsError(
        "internal",
        "Une erreur est survenue lors de l'enregistrement du message."
      );
    }
  });

// ----------------------------------

exports.sendEmailNotification = functions.firestore
  .document("submissions/{docId}")
  .onWrite(async (event) => {
    let emailFrom = event.after.get("emailFrom");
    let emailTo = event.after.get("emailTo");
    let subject = event.after.get("subject");
    let text = event.after.get("text");
    let isHtml = event.after.get("isHtml");

    console.log("dataTest emailFrom=", emailFrom);
    console.log("dataTest emailTo=", emailTo);
    console.log("dataTest isHtml=", isHtml);

    let authData = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });

    authData
      .sendMail({
        from: emailFrom,
        to: emailTo,
        subject: subject,
        text: text,
        html: isHtml,
      })
      .then((res) => console.log("successfully sendEmail that mail"))
      .catch((err) => console.log("sendEmail", err));
  });


// // Exemple de déclencheur Firestore
// exports.firestoreTrigger = functions.firestore
//   .document('testCollection/{docId}')
//   .onCreate((snapshot, context) => {
//     console.log('Document ajouté :', snapshot.data());
//     return null;
//   });


// exports.subscribeToTopic = functions.firestore
//   .document("subscribeToTopic/{uid}")
//   .onWrite(async (event) => {
//     // These registration tokens come from the client FCM SDKs.

//     let token1 = event.after.get("token");
//     let topic = event.after.get("topic");
//     var registrationTokens = [
//       token1,
//       //'YOUR_REGISTRATION_TOKEN_1',
//       // ...
//       //'YOUR_REGISTRATION_TOKEN_n'
//     ];

//     console.log(24, "subscribeToTopic:", topic, token1);

//     // Subscribe the devices corresponding to the registration tokens to the
//     // topic.
//     admin
//       .messaging()
//       .subscribeToTopic(registrationTokens, topic)
//       .then(function(response) {
//         // See the MessagingTopicManagementResponse reference documentation
//         // for the contents of response.
//         console.log("Successfully subscribed to topic:", topic, response);
//       })
//       .catch(function(error) {
//         console.log("Error subscribing to topic:", topic, error);
//       });
//   });

// // ========================== angular-and-stripe-checkout-integration-master
// exports.callPhp = functions.https.onCall(async (data, context) => {
//   //  ==========================
//   //  =============== data from react ===========
//   console.log("284 data = ", data);
//   console.log("285 data['sellerName'] = ", data["sellerName"]);
//   const numFact = data["thisFactId"]; //Uid by FB

//   var price = data["totalTicket"];
//   // var name = "data['sellerName'] 22";
//   var name = data["sellerName"];
//   const sellerId = data["sellerId"];
//   console.log("292 sellerId = ", sellerId);

//   var sellerName = data["sellerName"];
//   var name = data["sellerName"];
//   var myCollectionRef = data["myCollectionRef"];
//   // var db = admin.firestore();

//   app.get('/', (req, res) => {
//     res.send('Hello from Express!');
//   });
  
//   app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
//   });
    

//   console.log("83 sellerId = ", sellerId);

//   return session.id;
// });


  
  

// exports.messagesToCoursiers = functions.firestore
//   .document("messagesToCoursiers/{uid}")
//   .onWrite(async (event) => {
//     //let docID = event.after.id;
//     let title = event.after.get("title");
//     let content = event.after.get("content");
//     let topic = event.after.get("topic");
//     var message = {
//       notification: {
//         title: title,
//         body: content,
//         /* data: {
//               score: '850',
//               time: '2:45'
//             },*/
//       },
//       //topic: 'super-awesome-topic',
//       topic: topic,
//     };

//     let response = await admin.messaging().send(message);
//     console.log(response);
//   });

// exports.sendNotificationToFCMToken = functions.firestore
//   .document("messagesToToken/{uid}")
//   .onWrite(async (event) => {
//     const userIdEmail = event.after.get("email");
//     console.log("32 userIdEmail = ", userIdEmail);
//     const title = event.after.get("title");
//     const content = event.after.get("content");
//     let userDoc = await admin
//       .firestore()
//       .doc(`shoppinUsers/${userIdEmail}`)
//       .get();
//     let fcmToken = userDoc.get("token");
//     console.log("36 fcmToken = ", fcmToken);

//     let message = {
//       notification: {
//         title: title,
//         body: content,
//       },
//       token: fcmToken,
//     };

//     let response = await admin.messaging().send(message);
//     console.log(response);
//   });

// exports.newUserSignup = functions.auth.user().onCreate((user) => {
//   console.log("88 = user created", user.email, user.uid);
//   //return admin.firestore().collection('shoppinUsers').doc(user.uid).set({
//   let userModel = {
//     id: user.uid,
//     email: user.email,
//     name: "",
//     firstname: "",
//     num: "",
//     rue: "",
//     postalCode: "99999",
//     ville: "",
//     isAuth: "",
//     function: "user",
//     phonehome: "",
//     phonehand: "",
//     token: "",
//   };
//   console.log("106 user.id = ", user.email);
//   return admin
//     .firestore()
//     .collection("shoppinUsers")
//     .doc(user.email)
//     .set(userModel);

//   // background triggers must return a value/promise
// });

// exports.userDeleted = functions.auth.user().onDelete((user) => {
//   console.log("7 =user deleted", user.email, user.uid);
//   const doc = admin
//     .firestore()
//     .collection("shoppinUsers")
//     .doc(user.email);
//   return doc.delete();
// });

// exports.panierDeleted = functions.firestore
//   .document("/shoppinMemory/listeCde/lastCde/{uid}")
//   .onWrite(async (event) => {
//     // ===========================================
//     const sellerEmail = event.after.get("seller");
//     const numCde = event.after.get("numCde");
//     const etat = event.after.get("etat");
//     if (etat == "2") {
//       let panierDoc = await admin
//         .firestore()
//         .collection(`panier/${sellerEmail}/${numCde}`);

//       panierDoc
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             //console.log(doc.id, " => ", doc.data());
//             doc.id.delete();
//           });
//         })
//         .catch((error) => {
//           console.log("Error getting documents: ", error);
//         });
//     }
//   });
// // ===========================================

// exports.returnFixtures = functions.firestore
//   .document("/football80/fixtures")
//   .onWrite(async (event) => {
//     // ===========================================
//   });
// // ===========================================

// // ========================== angular-and-stripe-checkout-integration-master
// exports.stripeCheckout = functions.https.onCall(async (data, context) => {
//   //   // Stripe init
//   const stripe = require("stripe")(functions.config().stripe.token);
//   console.log("219 token = ", stripe);

//   //  ==========================
//   //  ==========================
//   console.log("284 data = ", data);
//   console.log("285 data['sellerName'] = ", data["sellerName"]);
//   const numFact = data["thisFactId"]; //Uid by FB
//   console.log(" product thisFactId = " + numFact);
//   const numFactByDate = data["idNumFact"]; //numFact
//   console.log(" product numFact = " + numFact);

//   // idNumFact: this.numFact ,
//   // thisFactId : this.userdata['thisFactId'],

//   var price = data["totalTicket"];
//   // var name = "data['sellerName'] 22";
//   var name = data["sellerName"];
//   const sellerId = data["sellerId"];
//   console.log("292 sellerId = ", sellerId);

//   var sellerName = data["sellerName"];
//   var name = data["sellerName"];
//   var myCollectionRef = data["myCollectionRef"];
//   var userEmail = data["userEmail"];
//   var isAuth = data["isAuth"];
//   var deviceisMobile = data["deviceisMobile"];
//   var db = admin.firestore();

//   db.collection(myCollectionRef)
//     .where("numFact", "==", numFact)

//     // ==========================
//     .get()
//     .then((querySnapshot) => {
//       console.log("querySnapshot", querySnapshot);
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log("with where", doc.id, " => ", doc.data());
//       });
//     });

//   const session = await stripe.checkout.sessions.create({
//     // ==========================
//     payment_method_types: ["card"],
//     mode: "payment",
//     success_url: `https://unjour-unplat.fr/stripe-pay?action=success&numFact=${numFact}&numFactByDate=${numFactByDate}&sellerId=${sellerId}`,
//     cancel_url:
//       "https://unjour-unplat.fr/stripe-pay?action=cancel&sellerId=${sellerId}",

//     line_items: [
//       {
//         // name: 'commande  '+name,
//         // description: numFact,
//         // // images: ['https://example.com/t-shirt.png'],
//         // amount: Math.round(price * 100),  // round to the nearest whole number so we don't have float errors
//         // currency: 'eur',
//         price_data: {
//           currency: "eur",
//           unit_amount: Math.round(price * 100),
//           product_data: {
//             name: "commande  " + name,
//             description: numFact,
//             //'description in price-data',

//             // images: ['https://example.com/t-shirt.png'],
//           },
//         },
//         quantity: 1,
//       },
//     ],

//     // ==========================

//     // ==========================
//   });

//   console.log("83 sellerId = ", sellerId);

//   return session.id;
// });

// // sources list error code
// // http callable function (adding a request)
// exports.addRequest = functions.https.onCall((data, context) => {
//   console.log("30= addRequest onCall ");
//   if (!context.auth) {
//     throw new functions.https.HttpsError(
//       "unauthenticated",
//       "only authenticated users can add requests"
//     );
//   }
//   if (data.text.length > 30) {
//     console.log("38= addRequest onCall ");
//     throw new functions.https.HttpsError(
//       "invalid-argument",
//       "request must be no more than 30 characters long"
//     );
//   }
//   return admin
//     .firestore()
//     .collection("requests")
//     .add({
//       text: data.text,
//       upvotes: 0,
//     });
// });

// //const admin = require('firebase-admin');

// const firestore = require("@google-cloud/firestore");

// const client = new firestore.v1.FirestoreAdminClient();


/*

// exports.backupFirestore = function backupFirestore() {
//   const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT
//   const databaseName = client.databasePath(projectId, '(default)')
  
//   return client
//     .exportDocuments({
//       name: databaseName,
//       // Add your bucket name here
//       outputUriPrefix: 'gs://udex-web-firestore',
//       // Empty array == all collections
//       collectionIds: []
//     })
//     .then(([response]) => {
//       console.log(`Operation Name: ${response.name}`)
//       return response
//     })
//     .catch(err => {
//       console.error(err)
//       throw new Error('Export operation failed')
//     })
// }


// // Schedule the automated backup
// functions.pubsub.schedule('every 24 hours').onRun(backupFirestore)
// */

