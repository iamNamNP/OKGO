import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    width: '100%',
    height: 213,
    backgroundColor: 'blue',
  },
  blockHeader: {
    width: '100%',
    height: '100%',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  discoveryHeader: {alignSelf: 'flex-start', color: 'white', fontSize: 18},
  colorWhite: {color: 'white', marginTop: 10},
  imageHeader: {width: '100%', height: '100%', position: 'absolute'},
  listIcon: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  searchContainer: {
    width: '100%',
    height: 40,
    position: 'absolute',
    bottom: -18,
    paddingHorizontal: 16,
  },
  searchBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
  },
  inputSearch: {width: '100%', height: '100%', paddingLeft: 16},
  optionClickContainer: {
    marginTop: 37,
    width: '100%',
    height: 25,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionClick: {
    width: '48%',
    backgroundColor: '#FF5F24',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  colorOptionClick: {
    color: 'white',
  },
  titleBlockContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  titleBlockLeft: {color: 'black', fontWeight: '700'},
  titleBlockRight: {color: '#9E9E9E'},
  blockDiscountContainer: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    marginTop: 16,
    borderRadius: 15,
  },
  listDiscount: {
    width: '100%',
    height: 150,
    marginLeft: 16,
  },
  discount: {
    width: 300,
    height: '100%',
    borderRadius: 15,
    marginRight: 16,
  },
  scheduleContainer: {
    width: 300,
    height: 230,
    backgroundColor: '#FFFFFF',
    marginLeft: 16,
    marginTop: 16,
    borderRadius: 5
  },
  topSchedule: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSchedule: {flex: 0.3},
  blockBottomSchedule: {width: '100%', height: '100%', marginVertical: 9},
  imageSchedule: {width: '100%', height: '100%'},
  topLeftSchedule: {flex: 0.4},
  topRightSchedule: {flex: 0.57},
  topRightHeader: {flex: 0.49, borderRadius: 20},
  topBottomSchedule: {
    flex: 0.51,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  topBottomItem: {
    width: '47.7%',
    height: '91%',
  },
  bottomTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  weight600: {fontWeight: '600'},
  textColor:{color: '#494949'},
  bottomBlock: {
    width: '100%',
    height: 25,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 9
  },
  bottomLeft: {flexDirection: 'row', alignItems: 'center'},
  bottomRight: {
    backgroundColor: '#FF5F24',
    height: '100%',
    width: 105,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  imageAvatar: {width: 25, height: 25},
  price: {fontSize: 10, color: 'white'},
  padding: {
    paddingLeft: 7
  },
  destinationPopolar: {width: '100%', height: 200, marginLeft: 16, marginTop: 16},
  destinationBlock: {width: 150, height: 200},
  titleDestination: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    color: 'white',
  }
});
export default styles;