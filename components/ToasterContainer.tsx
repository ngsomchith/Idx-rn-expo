import {
  Animated,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {
  Toaster as ToastBoard,
  ToastType,
  SlideX,
  Zoom
} from 'react-native-toastboard';

const appearAnimation = new SlideX(Dimensions.get('screen').width, 0);
const holdAnimation = new Zoom(1, 0.95, {
  duration: 200,
  useNativeDriver: true,
});

const toastMiddleware = ({ type, message }) => {
  if (type !== ToastType.ERROR) {
    return message;
  }

  if (typeof message === 'string') {
    return message;
  }

  if (
    message.response &&
    message.response.data &&
    message.response.data.message
  ) {
    return message.response.data.message;
  } else {
    return 'Some error';
  }
};

const renderToast = ({ type, message }) => {
  switch (type) {
    case ToastType.INFO: {
      return (
        <Animated.View style={[styles.info.container, holdAnimation.styles]}>
          <Text style={styles.info?.text}>{message}</Text>
        </Animated.View>
      );
    }
    case ToastType.ERROR: {
      return (
        <Animated.View style={[styles.error.container, holdAnimation.styles]}>
          <Text style={styles.error.text}>{message}</Text>
        </Animated.View>
      );
    }
    case ToastType.SUCCESS: {
      return (
        <Animated.View style={[styles.success.container, holdAnimation.styles]}>
          <Text style={styles.success?.text}>{message}</Text>
        </Animated.View>
      );
    }
    default: {
      throw new Error('Unknown type given');
    }
  }
};

export const ToasterContainer = () => {
  const handleHide = () => {
    StatusBar.setHidden(false, 'slide');
  };

  const handleShow = () => {
    StatusBar.setHidden(true, 'slide');
  };

  return (
    <ToastBoard
      hideOnPress
      onHide={handleHide}
      onShow={handleShow}
      onHoldEnd={holdAnimation.backward}
      onHoldStart={holdAnimation.forward}
      middleware={toastMiddleware}
      animation={appearAnimation}>
      {renderToast}
    </ToastBoard>
  );
};

const styles = {
  info: StyleSheet.create({
    container: {
      backgroundColor: 'blue',

      padding: 20,
    },
    message: {
      color: '#fff',

      textAlign: 'center',
    },
  }),
  error: StyleSheet.create({
    container: {
      backgroundColor: 'red',

      padding: 20,
    },
    message: {
      color: '#fff',

      textAlign: 'center',
    },
  }),
  success: StyleSheet.create({
    container: {
      backgroundColor: 'green',

      padding: 20,
    },
    message: {
      color: 'white',

      textAlign: 'center',
    },
  }),
};
