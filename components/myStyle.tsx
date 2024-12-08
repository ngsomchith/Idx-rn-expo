import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView } from "react-native";
// import { Colors, bigWidthBorder, middleWidthBorder } from "../config";

const yellow2 = '#ffe38d'
const black = '#000'
const white = '#fff'
// const device = thisDevice() 
export const myStyles = StyleSheet.create({

  container: {
    display:'flex',
    flex: 1,
    width:'100%',
    maxHeight:'100%',

  },columnContainer :{
    // borderColor: 'green',
    // borderStyle: 'solid',
    // borderWidth: 5,
  }
  ,containerSpaceBtw: {
    // display:'flex',
    flex: 1,
    // backgroundColor: 'red',
    justifyContent:'space-between',
    alignItems: 'center',

  },
  containerItemSearch : {
    display:'flex',
    flex: 1,
    // backgroundColor: 'red',
    justifyContent:'flex-start',
    alignItems: 'center',
    // borderColor: 'green',
    // borderStyle: 'solid',
    // borderWidth: 5,
    height: '30%', 
    minHeight:150,
    maxHeight:150
  },
  containerMenuNPdj:{
    display:'flex',
    flex: 1,
    // backgroundColor: 'red',
    justifyContent:'flex-start',
    alignItems: 'center',
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    // borderWidth: 3,
    height: '90%', 
    minHeight:300,
  },
  titreArticle: {
     //{/* <h3 className="colorWhite underline text-center">{menuN2.name}</h3> */}
    fontSize: 24,
    height:80,
    color: Colors.primaryText,
    
    marginHorizontal:'5%',
    paddingHorizontal:10,
    textAlign: 'center',
    textDecorationLine:'underline',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // borderColor: 'grey',
    // borderStyle: 'solid',
    // borderWidth: 3,
    marginVertical: 10
  },


  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    // maxWidth: device.width,
    
    width: '100%',
    // height:'100%',
    maxHeight: '100%',
    borderRadius: 18,
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 5,
  },
  imageModal:{
    // position:'absolute',
    width: "90%",
    height: "90%",
    borderRadius: 18,
    backgroundColor: 'grey',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 3,
  },
  borderWhite:{
    borderColor: Colors.primaryText,
    borderStyle: 'solid',
    // borderWidth: 0,
  },
  containerRowArticle: {
    // className="w-100 h-100 flex-row no-wrap m-0 relative j-start bg-transparent">
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 150,
    width: '100%',
    paddingHorizontal: 0,
    marginVertical:10,
    justifyContent: 'space-between',
    //border: '1px blue solid',

  },

  textInputContainer: {
    width: '90%',
    marginHorizontal: '5%',
    paddingHorizontal:0,
    maxHeight:200,
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start'

  },
  article: {
    backgroundColor: '#821e1e',
    marginBottom: 20 ,
    paddingBottom: 10,
    minHeight: 100 ,
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 5,
  },
  figure:{
    display: "flex",
    justifyContent:'center',
    alignContent:'center',
    flex: 1,
    width:'100%',
    // borderColor: 'yelllow',
    // borderStyle: 'solid',
    // borderWidth: 2,
  },
  figcaption:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 0,
    minHeight:170,
    maxHeight:170,
    // overflow:'hidden',
    flex: 1
  },

  picker: {
    width: '60%',
    fontSize: 22,
    //border: '1px red solid',
    justifyContent: 'center'
  },

  bodyContainerAgainst: {

  },
  dbRow: {
    display: 'flex',
    width: '100%',
    maxWidth:'100%',
    flexWrap: 'nowrap',
    // backgroundColor: Colors.accentBG,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'scroll',
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    // borderWidth: 2,
    marginBottom: 10
  },

  dbRowBtw: {
    display: 'flex',
    width: '100%',
    maxWidth:'100%',
    flexWrap: 'nowrap',
    backgroundColor: '#821e1e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // overflow: 'scroll',
    // borderColor: 'yellow',
    // borderStyle: 'solid',
    // borderWidth: 5,
    marginBottom: 10
  },

  rowContainer : {
    width: '100%',
    maxWidth : '100%',
    // height: 'calc(100% - 250)',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    // backgroundColor: 'coral',
    // borderWidth: 2,
    // borderStyle: 'solid',
    // borderColor: 'green',
    maxHeight:40
  },
  labelAgainst : {
    fontSize: 20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    // borderWidth: 3,
    // borderColor: 'red',
    // borderStyle: 'solid'
  },

  iconContainer:
  {  // InputFilePicker  
    width: 50,
    
    height: 50,
    // minHeight:50,
    borderColor: 'purple',
    // borderWidth: bigWidthBorder,
    // borderWidth: 2,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent:  'flex-start',
    alignItems: 'center'

  },
  labelInput : {
    fontSize: 18,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingHorizontal:10,
    marginEnd:5,
    width: '80%',
    color: Colors.primaryText,
    textAlign: 'left',
    borderBottomWidth: 0,
    borderRadius: 7,
    paddingVertical: 15,
    // borderColor: 'white',
    // borderStyle: 'solid',
    // borderWidth:bigWidthBorder
  },
  dbRow70 : {
    display: 'flex',
    width: '70%',
    flexWrap: 'nowrap',
    // backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    // overflow: 'scroll',
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 5,
  },
  dbCol: {
    display: 'flex',
    // justifyContent: 'center',
    // borderColor: Colors.primaryText,
    // borderStyle: 'solid',
    // borderWidth: 3,
    flexDirection:'column',
    maxWidth:'100%',
    width:'100%' 
  },
  dbCol70:{
    display: 'flex',
    width: '70%',
    flexWrap: 'nowrap',
    textAlign:'center',
    // backgroundColor: white,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // overflow: 'scroll',
    color :Colors.primaryText,
    textDecorationLine: 'underline'
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 5,
  },
  editItemLabel:{
    width: '15%',
    fontSize: 24,
    textAlign: 'left',
    paddingLeft: 10,
    color: Colors.primaryText,
    marginVertical: 10
  },
  editItemInput:{
    // width: '15%',
    // fontSize: 24,
    // textAlign: 'left',
    // paddingLeft: 10,
    // color: Colors.primaryText,
    // marginVertical: 10

    width: '80%',
    color: Colors.primaryText
  },

  textBody: {
    width:'100%',
    fontSize: 18,
    color: Colors.primaryText,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center'
  },
  textWhite : {
    color: 'white',
  },
  accentText:{
    color:Colors.accentText,
    backgroundColor:Colors.accentBG
  },
  highlightText:{
    color:Colors.highlightText,
    backgroundColor:Colors.highlightBG
  },
  iconCheck: {
    backgroundColor: Colors.accentBG
  },

  dbColBoook: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    fontSize: 20,
    //border: '3px green solid',
  },
  dbRowInput: {
    display: 'flex',
    width: '100%',
    height: 70,
    flexWrap: 'nowrap',
    backgroundColor: yellow2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //border: '3px blue solid',
  },

  headeRow1: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 40,
    maxHeight: 40,
    maxWidth: '100%',
    backgroundColor: '#eeeeef',
    flex: 1,
    padding: 3,
    justifyContent: 'space-between',
    // //border: '2px blue solid'

  },
  headeRow2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // height: 110,
    // minHeight: 120,
    width: '100%',
    backgroundColor: '#eeeeef',
    flex: 1,
    padding: 3,
    justifyContent: 'space-between',
    //border: '2px blue solid'

  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'nowrap',
    width: '100%',
    minWidth: '100%',
    // backgroundColor: '#25292e',
    backgroundColor: '#fff',
    // height: '',
    // maxHeight: 80,
    paddingRight: 10,
    justifyContent: 'space-between',
    //border: '1px red solid'
  },
  dbColBook: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // height:90,
    //  maxHeight:'90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#eeeeef',
    fontSize: 16,
    // //border: '3px red solid',
  },
  bodyContainer: {
    width: '100%',
    // height: 'calc(100% - 250)',
    display: 'flex',
    minHeight: '30%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  input: {
    width: 50,
    display: 'flex',
    // backgroundColor:'lightgrey',
    color:'black',
    justifyContent: 'center',
    padding: 0,
    height: '100%',
    fontSize: 24,
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 15
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.highlightBG,
    // borderColor: 'white',
    // borderStyle: 'solid',
    // borderWidth: 5,
    // borderRadius:18,
    marginVertical: 0
  },
  texteArticle :{
    textAlign:'left',
    paddingHorizontal:5,
    display:'flex',
    justifyContent:'flex-start',
    color:Colors.primaryText,
    fontSize :16,
    width:'100%',
  },
  texteArticleRenderJour :{
    paddingHorizontal:5,
    fontSize :20,
    width: '80%',
    minHeight: 50, 
    paddingLeft: 10,
     display: 'flex', 
     alignItems: 'center',
     justifyContent:'center',
    color: Colors.highlightText, 
    borderRadius: 20, 
    marginVertical: 10,
    marginHorizontal: '10%',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 5,
  },
  texteArticlePrix :{
    textAlign:'center',
    color:Colors.primaryText,
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 0,
    width: '40%',
    // padding:5,
    // fontSize :23
  },
  modalContent : {
    
  },
  buttonContainer: {
    width: 168,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    //border:'2px red solid',
  },
  button: {
    borderRadius: 10,
    // width: '100%',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  panierText:{
    position:'absolute',
    top:-3,
    right: 0,
    backgroundColor:Colors.accentBG,
    color: Colors.primaryText,
    fontWeight:'bold',
    width: 35,
    height:35,
    borderRadius:50,
    textAlign:'center',
    paddingTop: 1,
    
    // borderStyle: 'solid',
    // borderWidth: 2,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  textBlack: {
    color: '#000'
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  },
  footerZone: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'grey',
    justifyContent: 'center',
    // //border: '5px blue solid',
  },
  footer1Button: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5
  },
  buttonOv: {
    textAlign: 'center',
    height: '100%',
    borderRadius: 25,
    padding: 0,
    backgroundColor: '#eeeeef',
  },
  buttonOvGreen: {

  },
  footer2Buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 0
  },
  footerButtonCenter: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#fff',
    fontSize: 24,
    padding: 0,
  },

  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
