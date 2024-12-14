import { StyleSheet, Image, Text, View } from "react-native";
import images from "../constants/images";
import ThisDevice from "../constants/ThisDevice";
// import ZoomImage from "./ZoomImage";

export default function ImageViewer({ placeholderImageSource }) {

  const device = ThisDevice().device
  const MAXWIDTH = ThisDevice().MAXWIDTH
  // console.log("5 placeholderImageSource =", placeholderImageSource)
  // console.log("5 placeholderImageSource =", images[placeholderImageSource])
  return (
    <View style={{
      width:'100%', 
      maxWidth:'100%', 
      minHeight:'100%', 
      padding: 0,
      // minHeight:200,
      // borderWidth: 5, borderColor: 'yellow', borderStyle: 'solid',
      }}>
    { images[placeholderImageSource] !=undefined ? 
      <Image source={images[placeholderImageSource]} style={styles.image} />
      // <ZoomImage />
       :
      
       <Image source={images['logo2']} style={styles.image} />

      }
    </View>
    // <Image source={'https://images.udex-web.fr/seller2/Banh xeo.jpg'} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    height: '100%',
    // minHeight:400,

    borderRadius: 18,
  },
});
