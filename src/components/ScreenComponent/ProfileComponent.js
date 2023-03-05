import {Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import React from 'react';
import {AvatarComponent} from '../ProfileComponent/AvatarComponent';
import DetailComponent from '../ProfileComponent/DetailComponent';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';


const ProfileComponent = () => {
  // const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [scrolling, setScrolling] = React.useState(false);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const handleScroll = (event) => {
    if(event.nativeEvent.contentOffset.y > 10){
      setScrolling(true)
    }

    if(event.nativeEvent.contentOffset.y < 10){
      setScrolling(false)
    }
  }

  const handleEdit = () => {
    
  }

  return (
    <ScrollView style={styles.container} onScroll={handleScroll}>
      <AvatarComponent profile={true} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Jeet Mukherjee</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <Text style={styles.textTab}>Deatils</Text>
        </View>
        <TouchableOpacity onPress={handleEdit}>
        <View style={styles.tab}>
          <Text style={styles.textTab}>Edit</Text>
        </View>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={['#0c4848', '#0c4848']}
        style={styles.detailContainer}>
        <DetailComponent
          icon={'envelope'}
          title={'jeetmukherjee009gmail.com'}
        />
        <DetailComponent icon={'phone-square'} title={'+91 8001268005'} />
        <DetailComponent icon={'instagram'} title={'@_themukherjee'} />
      </LinearGradient>
      <LinearGradient
        colors={['#032525', '#032525']}
        style={styles.detailContainer}>
        <DetailComponent icon={'id-card'} title={'21352019'} />
        <DetailComponent icon={'graduation-cap'} title={'MCA'} />
        <DetailComponent icon={'building'} title={'Computer Science'} />
        <DetailComponent icon={'table'} title={'Sri Aurobindo'} />
      </LinearGradient>
     <View style={styles.contact}>
      <Icon name={'instagram'} size={20} color="#B2E9C5" />
      <Icon name={'whatsapp'} size={20} color="#B2E9C5" />
      <Icon name={'facebook-square'} size={20} color="#B2E9C5" />
      <Icon name={'envelope'} size={20} color="#B2E9C5" />
     </View>
      <Text style={styles.footer}>C A A L M</Text>
    </ScrollView>
  );
};
export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    // minHeight: Dimensions.get('screen').height * 2,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Light',
    color: 'white',
  },
  textContainer: {
    alignItems: 'center',
  },
  tabContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    minHeight: 80,
    flexDirection: 'row',
    paddingTop: 10,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    backgroundColor: '#297373',
    // paddingLeft: 23,
    // paddingRight: 23,
    minWidth: Dimensions.get('screen').width / 2.3,
    borderRadius: 5,
  },
  textTab: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
  },
  detailContainer: {
    minHeight: Dimensions.get('screen').height / 3.5,
    // backgroundColor: '#243d3d',
    margin: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  contact: {
    margin: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },
  footer: {
    marginVertical: 20,
    alignSelf: 'center',
    color: 'white',
    fontSize: 13,
    fontFamily: 'Poppins-Light',

  }
});
