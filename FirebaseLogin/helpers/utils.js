import { Dimensions } from 'react-native';

const iPhoneSize = () => {
  const windowWidth = Dimensions.get('window').width;
  if (windowWidth === 320) {
    return 'small'; //iphone SE
  } else if (windowWidth === 414) {
    return 'large'; //Iphone Plus X,XR, XS
  }
  return 'medium'; // iPhone 6/7
};

export default iPhoneSize;
