import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';

function Profile(props) {
    const RenderScore = ({imagePath, score})=>(
        <View style={{alignItems:'center'}}>
            <View style={styles.scoreIconCircle}>
                <Image source={imagePath}/>
            </View>
            <Text style={styles.scoreText}>{score}</Text>
        </View>
    )
    const RenderFeature = ({imagePath, feature, other=false})=>(
        <View style={styles.eachFeatureContainer}>
            <View style={other ? styles.otherIconBox : styles.featureIconBox}>
                <Image source={imagePath}/>
            </View>
            <Text style={styles.featureText}>{feature}</Text>
        </View>
    )
    return  (
        <>
        <Screen>
            <View style={styles.container}>
                <View style={styles.profilePic}></View>
                <Text style={styles.nameText}>Ayush Gajwani</Text>
                <Text style={styles.gradeText}>Grade 11, CBSE</Text>
                <View style={styles.scoreContainer}>
                    <RenderScore imagePath={require('../assets/trophy.png')} score={300}/>
                    <RenderScore imagePath={require('../assets/badge.png')} score={500}/>
                    <RenderScore imagePath={require('../assets/lightning.png')} score={700}/>
                </View>
                <View style={styles.featureContainer}>
                    <RenderFeature imagePath={require('../assets/teacher.png')} feature={'Learn from our Teachers'}/>
                    <RenderFeature imagePath={require('../assets/book.png')} feature={'Library'}/>
                    <RenderFeature imagePath={require('../assets/bookmark.png')} feature={'Bookmarks'}/>
                    <RenderFeature imagePath={require('../assets/quiz.png')} feature={'Play Quiz'}/>
                    <RenderFeature imagePath={require('../assets/doubt.png')} feature={'Doubt Sessions'}/>
                </View>
                <View style={styles.featureContainer}>
                    <RenderFeature imagePath={require('../assets/share.png')} feature={'Share the app'} other={true}/>
                    <RenderFeature imagePath={require('../assets/network.png')} feature={'My referral code'} other={true}/>
                    <RenderFeature imagePath={require('../assets/support.png')} feature={'Contact us'} other={true}/>
                    <RenderFeature imagePath={require('../assets/terms-and-conditions.png')} feature={'Terms and conditions'} other={true}/>
                </View>
                <View style={styles.bottomButtons}>
                    <View style={[styles.bottomButton,{backgroundColor:colors.primary}]}>
                        <Text style={[styles.bottomButtonText,{color:colors.white}]}>Enquire Now</Text>
                    </View>
                    <View style={[styles.bottomButton,{borderColor:colors.red}]}>
                        <Text style={[styles.bottomButtonText,{color:colors.red}]}>Sign Out</Text>
                    </View>
                </View>
            </View>
            
        </Screen>
        <Image style={{left:"75%"}} source={require('../assets/tabSelected.png')} resizeMode='stretch'/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'95%',
        alignItems:'center'
    },
    profilePic:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:1,
        borderColor:colors.primary,
    },
    nameText:{
        fontSize:20,
        fontWeight:800
    },
    gradeText:{
        fontSize:16,
        fontWeight:700,
        color:colors.dark
    },
    scoreContainer:{
        flexDirection:'row',
        marginVertical:5
    },
    scoreIconCircle:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:colors.secondaryLight,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20
    },
    scoreText:{
        fontSize:14,
        fontWeight:800,
        color:colors.dark
    },
    featureContainer:{
        width:'90%',
        paddingHorizontal:8,
        paddingVertical:4,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:colors.light

    },
    eachFeatureContainer:{
        flexDirection:'row',
        marginVertical:6,
        alignItems:"center"
    },
    featureIconBox:{
        width:30,
        height:30,
        borderRadius:8,
        backgroundColor:'#D8CAFF',
        marginRight:24,
        justifyContent:'center',
        alignItems:'center'
    },
    featureText:{
        fontSize:16,
        fontWeight:700
    },
    otherIconBox:{
        width:25,
        height:25,
        borderRadius:8,
        backgroundColor:'#D8CAFF',
        marginRight:24,
        justifyContent:'center',
        alignItems:'center'
    },
    bottomButtons:{
        flexDirection:'row',
        justifyContent:"space-between",
        width:'90%',
        marginTop:10
    },
    bottomButton:{
        width:165,
        height:40,
        borderRadius:30,
        justifyContent:'center',
        alignItems:"center",
        borderWidth:1,
        borderColor:colors.primary
    },
    bottomButtonText:{
        fontSize:16,
        fontWeight:500
    }
});

export default Profile;