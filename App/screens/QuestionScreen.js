/*  This component represents the main screen that displays the questions. It manages the state 
for various features such as showing tools, the number palette, the current question index, 
review status, bookmark status, and the overall response. It also includes a modal for displaying
the number palette and renders the question heading, the multiple-choice question component,
and the bottom buttons.
State variables:-
1. showTools: A boolean variable that controls the visibility of additional tools on the screen.
2. showNumPalette: A boolean variable that determines whether to show a number palette modal.
3. i: An integer variable representing the current question index.
4. review: A boolean variable indicating whether the current question is marked for review.
5. response: An array representing the user's responses to each question. It stores objects containing the question number, review status, and selected option.
*/

import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import QuestionScreenHeading from '../components/QuestionScreenHeading';
import MCQQuestionAndOptions from '../components/MCQQuestionAndOptions';
import NumberPalette from '../components/NumberPalette';
import Swiper from 'react-native-deck-swiper';
import BottomToolsQuestionScreen from '../components/BottomToolsQuestionScreen';

function QuestionScreen( {route}) {
    const ques = route.params.quesData
    const numOfQue = ques.length  // Extract the total number of questions

    // State variables
    const [showNumPalette,setShowNumPalette] = useState(false)
    const [i, setI] = useState(0)
    const [review, setReview] = useState(ques[i].review)
    const [response, setResponse]=useState([])
    const [bookmark, setBookmark] = useState(ques[i].bookmark)
    const [notes, setNotes] = useState("")
    
    useEffect(()=>{               //when the current question index (i) changes, the review state is updated accordingly
        setReview(ques[i].review)
        setBookmark(ques[i].bookmark)
        setNotes(ques[i].notes)
    }, [i])
    
    useEffect(()=>{              // when the bookmark variable changes, the corresponding value is updated in the ques array.
        ques[i].bookmark=bookmark
    },[bookmark])

    useEffect(()=>{              // when the bookmark variable changes, the corresponding value is updated in the ques array.
      ques[i].notes=notes
  },[notes])

    useEffect(() => {
        // Update the review property in the response array when the review variable changes
        const updatedResponse = response.map((item, index) => {
          if (index === i) {
            return { ...item, review };
          }
          return item;
        });
        setResponse(updatedResponse);
        ques[i].review=review // when the review variable changes, the corresponding value is updated in the ques array.
      }, [review]);
    
      useEffect(() => {
        // Initialize the response array
        const initialResponse = ques.map((item, index) => ({
          queNo: index + 1,
          review: item.review,
          selectedOpt: item.selectedOpt,
        }));
        setResponse(initialResponse);
      }, []);

    return  (
        <Screen>
            <QuestionScreenHeading queNum={i+1} numOfQue={numOfQue} openNumPalette={()=>setShowNumPalette(true)}/>

            <Swiper cards={ques} cardIndex={i} onSwipedLeft={()=> setI(i+1)} onSwipedRight={()=> setI(i-1)}  
            renderCard={(card)=><MCQQuestionAndOptions i={i} responseArray={response} question={card} 
            setResponse={setResponse}/>} showSecondCard={false} containerStyle={styles.MCQContainer} 
            disableRightSwipe={i==0} disableLeftSwipe={i==numOfQue-1} cardVerticalMargin={0} 
            cardHorizontalMargin={10} key={i}/>

            <Modal visible={showNumPalette} transparent={true}>
                <NumberPalette questions={response} setI={setI} setShowNumPalette={setShowNumPalette}/>
            </Modal>

            <BottomToolsQuestionScreen review={review} bookmark={bookmark} notes={notes} 
            setReview={setReview} setBookmark={setBookmark} setNotes={setNotes} quesData={ques}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    MCQContainer:{
      top:100,
      backgroundColor:colors.white,
      height:"78%",
      justifyContent:'center',
      marginHorizontal:10,
    },
});

export default QuestionScreen;