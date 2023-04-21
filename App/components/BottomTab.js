import React, {useState} from 'react';
import {View, StyleSheet,Image } from 'react-native';
import BottomTabs from './BottomTabs';

function BottomTab(props) {
    const [selected, setSelected] = useState("Home");
    return  (
        <View style={styles.tabsSuperContainer}>
            <View style={{left:selected=="Home" ? "0%" : selected=="Self Study" ? "25%" :
            selected=="Dashboard" ? "50%" : "75%"}}>
                <Image source={require('../assets/tabSelected.png')} resizeMode='stretch'></Image>
            </View>
            <View style={styles.tabsContainer}>
                <BottomTabs tname="Home" iconName="home" selected={selected}  setSelected={setSelected}/>
                <BottomTabs tname="Self Study" iconName="book-open-page-variant" selected={selected} setSelected={setSelected}/>
                <BottomTabs tname="Dashboard" iconName="view-dashboard" selected={selected} setSelected={setSelected}/>
                <BottomTabs tname="Profile" iconName="menu" selected={selected}  setSelected={setSelected}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabsSuperContainer:{
        bottom:0,
        position:'absolute'
    },
    tabsContainer:{
        flexDirection:'row',
        width:'100%',
    },
});

export default BottomTab;