
import { StyleSheet, Button, View, Text, ScrollView, Pressable, SafeAreaView, ScrollViewComponent, FlatList, Platform } from 'react-native';

// import {
//     AntDesign, Entypo, Feather,
//     FontAwesome, FontAwesome5, Fontisto, Ionicons,
//     MaterialCommunityIcons, MaterialIcons,
//     SimpleLineIcons
// } from '@expo/vector-icons';
// import IconImg from '../components/IconImg';
// import ImageIconViewer from '../components/ImageIconViewer';
import { Images } from './images-Icon';
import { Colors } from '@/constants/Colors';
import { myApp } from '@/constants/firebaseConfig';
// import { auth } from './firebase';
//source: https://icons.expo.fyi/


const auth = myApp[1]

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

// const iconPlatSushi = <ImageIconViewer placeholderImageSource={'platSushi'} />
// const iconPlatVN = <ImageIconViewer placeholderImageSource={'platVN'} />
// const iconTout = <ImageIconViewer placeholderImageSource={'iconTout'} />
// const iconBuyAndGift2 = <ImageIconViewer placeholderImageSource={'buy_and_gift2'} />
// const iconPromoSushi = <ImageIconViewer placeholderImageSource={'promo_sushi'} />
// const iconPromoTradit = <ImageIconViewer placeholderImageSource={'promo_tradit'} />

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React from 'react';

const iconUpCircle = <Ionicons name="arrow-up-circle" size={24} color="black" />;
const iconTop = <MaterialIcons name="arrow_upward" size={30} color="white" />;
const iconBottom = <Ionicons name="arrow-down-outline" size={32} color="white" />;
const iconPassword = <MaterialIcons name="password" size={30} color="white" />;
const starHalf = <MaterialIcons name="star_half" size={30} color="white" />;
const iconUsers = <MaterialIcons name="group" size={30} color="white" />;
const iconShare = <MaterialIcons name="share" size={30} color="white" />;
const iconShareRed = <MaterialIcons name="share" size={30} color="red" />;
const iconMachineCB = <MaterialIcons name="point_of_sale" size={30} color="white" />;
const iconEmail = <MaterialIcons name="mail" size={30} color="white" />;
const iconPcj = <MaterialIcons name="hourglass_top" size={30} color="white" />;
const iconStar2 = <MaterialIcons name="grade" size={30} color="white" />;
const iconFootball = <MaterialIcons name="sports_soccer" size={30} color="white" />;
const iconTennis = <MaterialIcons name="sports_baseball" size={30} color="white" />;
const iconCB = <MaterialIcons name="credit_score" size={30} color="white" />;
const iconApple = <AntDesign name="apple1" size={28} color="black" />;
const iconGoogle = <SimpleLineIcons name="social-google" size={28} color="white" />;
const iconStreetView = <MaterialIcons name="location_on" size={30} color="white" />;
const iconLock = <MaterialIcons name="lock_open" size={30} color="white" />;
const iconSquare = <MaterialIcons name="check_box_outline_blank" size={30} color="white" />;
const iconSquareRed = <MaterialIcons name="check_box_outline_blank" size={30} color="red" />;
const iconDesktop = <MaterialIcons name="desktop_mac" size={30} color="white" />;
const temp = <MaterialIcons name="contact_phone" size={30} color="white" />;
const contact = <MaterialIcons name="contact_phone" size={30} color="white" />;
const iconLogin = <MaterialIcons name="login" size={30} color="white" />;
const iconMinus = <MaterialIcons name="do_not_disturb_on" size={30} color="white" />;
const iconPlusUn = <MaterialIcons name="add_circle" size={30} color="#e1a805" />;
const iconEuro = <MaterialIcons name="euro" size={30} color="white" />;
const iconVisitor = <MaterialIcons name="location_away" size={30} color="white" />;
const iconHome = <MaterialIcons name="home" size={30} color="white" />;
const iconInfo = <MaterialIcons name="info" size={30} color="white" />;
const iconClock = <MaterialIcons name="schedule" size={30} color="white" />;
const iconCheck = <MaterialIcons name="check" size={30} color="white" />;
const iconCheckBox = <MaterialIcons name="check_box" size={30} color="white" />;
const iconCheckBoxRed = <MaterialIcons name="check_box" size={30} color="red" />;
const iconRefresh = <MaterialIcons name="refresh" size={30} color="white" />;
const iconCheckSuccess = <MaterialIcons name="check" size={30} color="green" />;
const iconExit = <MaterialIcons name="logout" size={30} color="white" />;
const iconUserShied = <MaterialIcons name="admin_panel_settings" size={30} color="white" />;
const iconUser = <MaterialIcons name="person" size={30} color="white" />;
const iconCadeau = <MaterialIcons name="redeem" size={30} color="white" />;
const iconImportFile = <MaterialIcons name="drive_folder_upload" size={30} color="white" />;
const iconClick = <MaterialIcons name="touch_app" size={30} color="white" />;
const iconMessage = <MaterialIcons name="sms" size={30} color="white" />;
const iconClose = <MaterialIcons name="cancel" size={30} color="red" />;
const iconBack = <MaterialIcons name="arrow_back" size={30} color="white" />;
const iconBasket = <MaterialIcons name="shopping_basket" size={30} color="white" />;
const iconEdit = <MaterialIcons name="edit_note" size={30} color="white" />;
const iconSmartphone = <MaterialIcons name="smartphone" size={30} color="white" />;
const iconSmartphoneneeded = <MaterialIcons name="smartphone" size={30} color="red" />;
const iconPause = <MaterialIcons name="pause_circle" size={30} color="white" />;
const iconSearchPlus = <MaterialIcons name="search" size={30} color="white" />;
const iconFilter = <MaterialIcons name="filter_alt" size={30} color="white" />;
const iconCalendarClock = <MaterialIcons name="today" size={30} color="white" />;

export {
  iconUpCircle,
  iconTop,
  iconBottom,
  iconPassword,
  starHalf,
  iconUsers,
  iconShare,
  iconShareRed,
  iconMachineCB,
  iconEmail,
  iconPcj,
  iconStar2,
  iconFootball,
  iconTennis,
  iconCB,
  iconApple,
  iconGoogle,
  iconStreetView,
  iconLock,
  iconSquare,
  iconSquareRed,
  iconDesktop,
  temp,
  contact,
  iconLogin,
  iconMinus,
  iconPlusUn,
  iconEuro,
  iconVisitor,
  iconHome,
  iconInfo,
  iconClock,
  iconCheck,
  iconCheckBox,
  iconCheckBoxRed,
  iconRefresh,
  iconCheckSuccess,
  iconExit,
  iconUserShied,
  iconUser,
  iconCadeau,
  iconImportFile,
  iconClick,
  iconMessage,
  iconClose,
  iconBack,
  iconBasket,
  iconEdit,
  iconSmartphone,
  iconSmartphoneneeded,
  iconPause,
  iconSearchPlus,
  iconFilter,
  iconCalendarClock,
};
