
// import { StyleSheet, Button, View, Text, ScrollView, Pressable, SafeAreaView, ScrollViewComponent, FlatList, Platform } from 'react-native';

import {
    AntDesign, Entypo, Feather,
    FontAwesome, FontAwesome5, Fontisto, Ionicons,
    MaterialCommunityIcons, MaterialIcons,
    SimpleLineIcons
} from '@expo/vector-icons';
// // import { myAuth, myPLatform } from './firebase';
// // import { Images } from './images';
// // import { Colors } from './theme';
// // import IconImg from '../components/IconImg';
// // import ImageIconViewer from '../components/ImageIconViewer';
// // import { auth } from './firebase';
// //source: https://icons.expo.fyi/


// const auth = myAuth

// // const stateBar = false 
// // const stateBar = true

// const widthBorder = 0
// const middleWidthBorder = 0
// const bigWidthBorder = 0

// // const widthBorder = 1
// // const middleWidthBorder = 3
// // const bigWidthBorder = 5


// const hideIconCloseModal = false
// const AllFixturesSreenBorderWidth = 0
// const myModalNewEventWidth = 0
// const buttonCoeffWidth = 0
// const renderContainerWidth = 0
// // const hideIconCloseModal =true
// // const AllFixturesSreenBorderWidth = 8 
// // const myModalNewEventWidth = 8
// // const renderContainerWidth = 10

// const modalAuthPageWidth = 0 // and modalAuthPageWidth
// const mycontainerPageBorderWidth = 0 //(purple solid)
// const MyModalAuthPageBorderWidth = 0 //(purple solid)
// const containerPageWidth = 0// and containerPageWidth
// const HeaderWidthBorder = 0
// // const modalAuthPageWidth = 2 // and modalAuthPageWidth
// // const mycontainerPageBorderWidth = 3 //(purple solid)
// // const MyModalAuthPageBorderWidth = 3 //(purple solid)


// //<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
// //<Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text> 
// // const iconPlatSushi = <ImageIconViewer placeholderImageSource={'platSushi'}/>
// // const iconPlatVN = <ImageIconViewer placeholderImageSource={'platVN'} />
// // const iconTout = <ImageIconViewer placeholderImageSource={'iconTout'} />
// // const iconBuyAndGift2 = <ImageIconViewer placeholderImageSource={'buy_and_gift2'} />
// // const iconPromoSushi = <ImageIconViewer placeholderImageSource={'promo_sushi'} />
// // const iconPromoTradit = <ImageIconViewer placeholderImageSource={'promo_tradit'} />


// const iconUpCircle = <Ionicons name="arrow-up-circle" size={24} color="black" />
// const iconTop = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>arrow_upward</Text> 
// //  const iconPassword = <Ionicons name="arrow-up-outline" size={32} color="white" />
// const iconBottom = <Ionicons name="arrow-down-outline" size={32} color="white" />
// const iconPassword = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>password</Text> 
// const starHalf = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>star_half</Text> 
// const iconUsers = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>group</Text>
// const iconShare = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>share_windows</Text> 
// const iconShareRed = <Text style={{width:30,height:30, fontSize: 30, color: 'red', fontFamily: 'Material Icons' }}>share_windows</Text> 
// // const buttonCoeffWidth = 1
// const iconMachineCB= <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>point_of_sale</Text> 
// const iconEmail = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>mail</Text>
// // const iconMachineCB=<Fontisto name="shopping-pos-machine" size={60} color="white" />
// const iconPcj = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>hourglass_top</Text>
// const iconStar2 = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>grade</Text>
// const iconFootball = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>sports_soccer</Text>
// const iconTennis =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>sports_baseball</Text>
// const iconCB = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>redit_score</Text>
// // const googleIcon = <AntDesign name="google" size={28} color="black" />

// const iconApple = <AntDesign name="apple1" size={28} color="black" />
// const iconGoogle = <SimpleLineIcons name="social-google" size={28} color="white" />

// const iconStreetView = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>location_on</Text>
// const iconLock =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>lock_open</Text>

 
// const iconSquare = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>check_box_outline_blank</Text>
// const iconSquareRed = <Text style={{width:30,height:30, fontSize: 30, color: 'red', fontFamily: 'Material Icons' }}>check_box_outline_blank</Text>
// const iconDesktop =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>desktop_mac</Text>


// const temp =  <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>contact_phone</Text>

// const contact = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>contact_phone</Text>
// const iconLogin = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>login</Text>

// const iconMinus = <Text style={{width:30,height:30, fontSize: 30, color: Colors.accentBG , fontFamily: 'Material Icons' }}>do_not_disturb_on</Text>

// const iconPlusUn = <Text style={{
//     width:30,height:30, fontSize: 30, 
//     color: "#e1a805", 
//     fontFamily: 'Material Icons' }}>add_circle</Text>
// // const iconPlusUn = <FontAwesome name="plus-circle" size={24} color={Colors.accentBG} />
// // const iconPlusUn = <AntDesign name="pluscircle" size={28} color="#821e1e" />
// // const iconMinus = <FontAwesome name="minus-circle" size={28} color={Colors.accentBG} />
// const iconEuro = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>euro</Text>
// const iconVisitor = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}> location_away</Text>
// const iconHome = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>home</Text>
// const iconInfo = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>info</Text>
// const iconClock = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>chedule</Text>
// const iconCheck = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>check</Text>
// const iconCheckBox = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>check_box</Text>
// const iconCheckBoxRed = <Text style={{width:30,height:30, fontSize: 30, color: 'red', fontFamily: 'Material Icons' }}>check_box</Text>
// const iconRefresh = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>refresh</Text>

// const iconCheckSuccess = <Text style={{width:30,height:30, fontSize: 30, color: 'green', fontFamily: 'Material Icons' }}>check</Text>
// const iconExit = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>logout</Text>
// const iconUserShied = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>dmin_panel_settings</Text>
// const iconUser = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>person</Text>

// const iconCadeau = <IconImg iconName={'iconCadeauImg'} onPressFn={undefined}  />


// const iconImportFile = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>drive_folder_upload</Text>

// // const iconClick = <IconImg iconName={'iconClickImg'} />
// // const iconBack = <IconImg iconName={'iconBackImg'} />
// // const iconClick = Platform.OS =='web' ? 'X' : <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>touch_app</Text>
// const iconClick = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>touch_app</Text>
// const iconMessage = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>sms</Text>
// // const iconClick = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>add_circle</Text>
// const iconClose = <Text style={{width:30,height:30, fontSize: 30, color: 'red', fontFamily: 'Material Icons' }}>cancel</Text>
// const iconBack = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>arrow_back</Text>
// const iconBasket = <Text style={{width:30,height:30, fontSize: 50, color: Colors.primaryText, fontFamily: 'Material Icons' }}>shopping_basket</Text>

// const iconEdit = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>edit_note</Text>
// const iconSmartphone = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>smartphone </Text>
// const iconSmartphoneneeded = <Text style={{width:30,height:30, fontSize: 30, color: 'red', fontFamily: 'Material Icons' }}>smartphone </Text>
// const iconPause = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>pause_circle</Text>
// const iconSearchPlus = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>search </Text>
// const iconFilter = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>filter_alt </Text>
// // <span class="material-symbols-outlined">
// // filter_alt
// // </span>
// const iconCalendarClock = (<FontAwesome name="calendar" size={24} color="black" />)
// const iconCalendarClock = <Text style={{width:30,height:30, fontSize: 30, color: 'white', fontFamily: 'Material Icons' }}>today</Text>
// {/* <span class="material-symbols-outlined">
// calendar_clock
// </span> */}

// export {
//     //iconbyImage
//     iconBuyAndGift2,
//     iconPlatSushi,iconPlatVN,iconTout,
//     iconPromoSushi,iconPromoTradit,
//     //real icon
//     Images, Colors, auth, widthBorder, iconMinus, iconSearchPlus,iconBasket,
//     middleWidthBorder, bigWidthBorder, HeaderWidthBorder, iconMachineCB,iconSmartphoneneeded,
//     mycontainerPageBorderWidth, iconPause, iconApple, iconPcj, iconStar2,iconFilter,
//     MyModalAuthPageBorderWidth, renderContainerWidth, iconEmail, starHalf,iconSquare,iconSquareRed,
//     containerPageWidth, modalAuthPageWidth, iconBack, iconCB, iconShare, iconShareRed,
//     hideIconCloseModal, iconCheckSuccess, iconStreetView, iconPassword,iconCheckBox,iconCheckBoxRed,
//     iconGoogle, iconClose, 
// iconCalendarClock
// , iconLogin, iconEuro, iconLock,
//     iconVisitor, iconHome, iconInfo, iconClock, iconCheck, iconCadeau,iconDesktop,
//     AllFixturesSreenBorderWidth, buttonCoeffWidth, iconSmartphone,contact,iconUpCircle,
//     myModalNewEventWidth, iconUser, iconPlusUn, iconImportFile, iconUsers,iconTop,iconBottom,
//     iconExit, iconFootball, iconTennis, iconUserShied, iconClick, iconEdit, iconRefresh, iconMessage

// };