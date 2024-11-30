import ThisDevice from '@/constants/ThisDevice';
import React, { useEffect } from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedTitle } from '../ThemedTitle';
import { ThemedText } from '../ThemedText';


const ArticleCard = ({key, article}) => {

    const myDevice = ThisDevice().device
    const MAXWIDTH = ThisDevice().device.myMAXWIDTH
    const widthMobile = 650
    const widthMobileOrWeb = MAXWIDTH >widthMobile ? '40%' : '100%'
    console.log("myDevice = ", myDevice)
    let myImage = '../assets/images/image-1achete-1offert.png'
  
    useEffect(() => {
      console.log("article ", article)
    }, [article])
    const styles = {
  
      // rowContainerWrap: {
      //   width: MAXWIDTH,
      //   MAXWIDTH: '100%',
      //   display: 'flex',
      //   flexDirection: 'row',
      //   justifyContent: 'space-between',
      //   flexWrap: 'wrap',
      //   borderColor: 'coral', borderStyle: 'solid', borderWidth: 5,
      // },
      cardContainer: {
    
        // minWidth: MAXWIDTH > 300 ? '100%' : '40%',
        width: widthMobileOrWeb ,
        maxWidth: '100%',
        padding: 20,
        marginVertical: 10,
        display: 'flex',
        borderRadius: 10,
        borderColor: MAXWIDTH < 650 ? 'red' : 'yellow', borderStyle: 'solid', borderWidth: 5,
        backgroundColor: 'white', // Couleur de fond par défaut
      },
      title: {
        marginBottom: 10,
      },
      image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
      },
      text: {
        marginBottom: 10,
        color: 'grey'
      },
      textCenter: {
        marginBottom: 10,
        color: 'grey',
        textAlign: 'center'
      },
      button: {
        // borderColor: 'red', borderStyle: 'solid', borderWidth: 5,
        padding: 15,
        textAlign: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 10
      }
    };
  
    return (
        <></>
    //   <ThemedView style={styles.cardContainer}>
    //     <ThemedTitle type="title" style={styles.text}>
    //       {'title'}
    //     </ThemedTitle>
  
    //     <ThemedText type="subtitle" style={styles.textCenter}>{slogan}</ThemedText>
    //     <ThemedText style={styles.text}>{courtPresentation}</ThemedText>
    //     {/* <Image source={images[`${imageUrl}`]} style={styles.image} /> */}
  
    //     {/* <Button title="En savoir plus" >/ */}
    //       {/* <ExternalLink style={styles.button} href= {url}>
    //         <ThemedText type="link">En savoir Plus</ThemedText>
    //       </ExternalLink> */}
    //     {/* </Button> */}
    //   </ThemedView>
    );
  };

export default ArticleCard;