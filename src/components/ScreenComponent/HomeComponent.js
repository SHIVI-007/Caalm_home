import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,ScrollView
} from 'react-native';
import {AvatarComponent} from '../ProfileComponent/AvatarComponent';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import IconComponent from '../Button/IconComponent';

const {width, height} = Dimensions.get('screen');

export const HomeComponent = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#032525', '#0c4848']}
        style={styles.linearGradient}>
        <AvatarComponent />
        <CarouselComponent widthHalf={false}/>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'briefcase'} title={'placement'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'motorcycle'} title={'E-Bike'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'building'} title={'Annex'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'envelope'} title={'Notice'} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainerBottom}>
          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'globe'} title={'sams'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'bus'} title={'bus service'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'users'} title={'ask pu'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <IconComponent icon={'calendar'} title={'events'} />
          </TouchableOpacity>
        </View>
        {/* ----Story---- */}

        <CarouselComponent widthHalf={true}/>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    minHeight: height,
    paddingBottom: 10,
    paddingTop: 10,
  },
  iconContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 8,
    marginRight: 8,
  },
  iconContainerBottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 8,
    marginRight: 8,
  },
  button: {
    width: 75,
  },
});
