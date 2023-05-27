/*currently not in use, used HomeWorkUpperTabNavigator instead */

import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

function UpperTabs({selected="Upcoming"}) {
    return  (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={()=><UpperTabs selected={'Upcoming'}/>}>
                <View style={selected=="Upcoming"?
                [styles.upperTabsText,{borderBottomColor:colors.primary, borderBottomWidth:5, paddingBottom:5}]:
                styles.upperTabsText}>
                    <Text style={[defaultStyles.text,{fontWeight:700}]}>Upcoming</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=><UpperTabs selected={'Past'}/>}>
                <View style={selected=="Past"?
                [styles.upperTabsText,{borderBottomColor:colors.primary, borderBottomWidth:5, paddingBottom:5}]:
                styles.upperTabsText}>
                    <Text style={defaultStyles.text}>Past</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=><UpperTabs selected={'Overdue'}/>}>
                <View style={selected=="Overdue"?
                [styles.upperTabsText,{borderBottomColor:colors.primary, borderBottomWidth:5, paddingBottom:5}]:
                styles.upperTabsText}>
                    <Text style={defaultStyles.text}>Overdue</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop:15,
        borderBottomColor: colors.light,
        borderBottomWidth: 2,
    },
    upperTabsText:{
        width:'33%', 
        alignItems:'center'
    },
});

export default UpperTabs;