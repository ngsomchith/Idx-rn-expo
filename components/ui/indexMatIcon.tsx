
import { StyleSheet, Button, View, Text, ScrollView, Pressable, SafeAreaView, ScrollViewComponent, FlatList } from 'react-native';

import {
    AntDesign, Entypo, Feather,
    FontAwesome, FontAwesome5, Fontisto, Ionicons,
    MaterialCommunityIcons, MaterialIcons,
    SimpleLineIcons
} from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
// import { myAuth, myPLatform } from './firebase';
// import { Images } from './images';
// import { Colors } from './theme';
// import IconImg from '../components/IconImg';
// import { auth } from './firebase';
//source: https://icons.expo.fyi/


const auth = myAuth

// const stateBar = false 
// const stateBar = true

const widthBorder = 0
const middleWidthBorder = 0
const bigWidthBorder = 0

// const widthBorder = 1
// const middleWidthBorder = 3
// const bigWidthBorder = 5


const hideIconCloseModal = false
const AllFixturesSreenBorderWidth = 0
const myModalNewEventWidth = 0
const buttonCoeffWidth = 0
const renderContainerWidth = 0
// const hideIconCloseModal =true
// const AllFixturesSreenBorderWidth = 8 
// const myModalNewEventWidth = 8
// const renderContainerWidth = 10

const modalAuthPageWidth = 0 // and modalAuthPageWidth
const mycontainerPageBorderWidth = 0 //(purple solid)
const MyModalAuthPageBorderWidth = 0 //(purple solid)
const containerPageWidth = 0// and containerPageWidth
const HeaderWidthBorder = 0
// const modalAuthPageWidth = 2 // and modalAuthPageWidth
// const mycontainerPageBorderWidth = 3 //(purple solid)
// const MyModalAuthPageBorderWidth = 3 //(purple solid)


//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
//<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 


const iconPassword = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>password</Text> 
const starHalf = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>star_half</Text> 
const iconUsers = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>group</Text>
const iconShare = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>share_windows</Text> 
const iconShareRed = <Text style={{width:30,height:30, fontSize: 30, color: 'red', fontFamily: 'Material Icons' }}>share_windows</Text> 
// const buttonCoeffWidth = 1
const iconEmail = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>point_of_sale</Text> 
const iconMachineCB = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>mail</Text>
const iconPcj = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>hourglass_top</Text>
const iconStar2 = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>grade</Text>
const iconFootball = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>sports_soccer</Text>
const iconTennis =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>sports_baseball</Text>
const iconCB = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>redit_score</Text>
// const googleIcon = <AntDesign name="google" size={28} color="black" />

const iconApple = <AntDesign name="apple1" size={28} color="black" />
const iconGoogle = <SimpleLineIcons name="social-google" size={28} color="white" />

const iconStreetView = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>location_on</Text>
const iconLock =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>lock_open</Text>

 
const iconDesktop =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>desktop_mac</Text>


const temp =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>contact_phone</Text>

const contact = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>contact_phone</Text>
const iconLogin = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>login</Text>

const iconMinus = <Text style={{width:30,height:30, fontSize: 30, color: Colors.accentBG , fontFamily: 'Material Icons' }}>do_not_disturb_on</Text>

const iconPlusUn = <Text style={{width:30,height:30, fontSize: 30, color: Colors.accentBG, fontFamily: 'Material Icons' }}>add_circle</Text>
// const iconPlusUn = <FontAwesome name="plus-circle" size={24} color={Colors.accentBG} />
// const iconPlusUn = <AntDesign name="pluscircle" size={28} color="#821e1e" />
// const iconMinus = <FontAwesome name="minus-circle" size={28} color={Colors.accentBG} />
const iconEuro = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>euro</Text>
const iconVisitor = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}> location_away</Text>
const iconHome = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text>
const iconInfo = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>info</Text>
const iconClock = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>chedule</Text>
const iconClose = <Text style={{width:30,height:30, fontSize: 30, color: 'black', fontFamily: 'Material Icons' }}>cancel</Text>
const iconCheck = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>check</Text>
const iconCheckSuccess = <Text style={{width:30,height:30, fontSize: 30, color: 'green', fontFamily: 'Material Icons' }}>check</Text>
const iconExit = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>logout</Text>
const iconUserShied = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>dmin_panel_settings</Text>
const iconUser = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>person</Text>

const iconCadeau = <IconImg iconName={'iconCadeauImg'} onPressFn={undefined}  />


const iconImportFile = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>drive_folder_upload</Text>

// const iconClick = <IconImg iconName={'iconClickImg'} />
// const iconBack = <IconImg iconName={'iconBackImg'} />
const iconClick = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>touch_app</Text>
const iconBack = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>arrow_back</Text>
const iconBasket = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>shopping_basket</Text>

const iconEdit = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>edit_note</Text>
const iconSmartphone = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>smartphone </Text>
const iconPause = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>pause_circle</Text>
const iconSearchPlus = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>zoom_in </Text>

const iconCalendarClock = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>calendar_clock</Text>


export {
    Images, Colors, auth, widthBorder, iconMinus, iconSearchPlus,iconBasket,
    middleWidthBorder, bigWidthBorder, HeaderWidthBorder, iconMachineCB,
    mycontainerPageBorderWidth, iconPause, iconApple, iconPcj, iconStar2,
    MyModalAuthPageBorderWidth, renderContainerWidth, iconEmail, starHalf,
    containerPageWidth, modalAuthPageWidth, iconBack, iconCB, iconShare, iconShareRed,
    hideIconCloseModal, iconCheckSuccess, iconStreetView, iconPassword,
    iconGoogle, iconClose, iconCalendarClock, iconLogin, iconEuro, iconLock,
    iconVisitor, iconHome, iconInfo, iconClock, iconCheck, iconCadeau,
    AllFixturesSreenBorderWidth, buttonCoeffWidth, iconSmartphone,contact,
    myModalNewEventWidth, iconUser, iconPlusUn, iconImportFile, iconUsers,
    iconExit, iconFootball, iconTennis, iconUserShied, iconClick, iconEdit

};

