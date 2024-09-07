import {Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {PlayIcon} from "react-native-heroicons/outline";
import {useNavigation} from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {ChevronDownIcon} from "react-native-heroicons/outline";
const EmptyWorkout = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.getStartedBox}>
                <PlayIcon style={styles.playIcon} size={25} color="#fff" ></PlayIcon>
                <Text style={styles.getStartedText}>Get Started</Text>
                <Text style={styles.addExerciseText}>Add an exercise to start your workout</Text>
                <Pressable style={styles.addExerciseButton} onPress={
                    ()=>{setModalVisible(true);navigation.setOptions({ title: 'Add Exercise', headerBackVisible: false })}}>
                    <Text style={{color:'#fff'}}>+ Add Exercise</Text>
                </Pressable>
            </View>
            <View>
                <GestureRecognizer
                    style={{flex: 1}}
                    onSwipeUp={ () => setModalVisible(true) }
                    onSwipeDown={ () => setModalVisible(false) }
                >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {setModalVisible(!modalVisible); navigation.setOptions({ title: 'Workout', headerBackVisible: true  })}}>
                                <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </GestureRecognizer>
            </View>
        </View>
        

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'start',
    },
    getStartedBox: {
        padding: 30,  
        margin: 10, 
        borderWidth: StyleSheet.hairlineWidth,
       
        alignItems: "center",
    },
    getStartedText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 5,
      
    },
    addExerciseText: {
        color: "#a0a0a0",
        fontSize: 18,
        fontWeight: '400',
        paddingBottom: 20,
    },
    addExerciseButton: {
        paddingVertical: 12,
        width: 350,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#1d82ea',
        backgroundColor: '#1d82ea',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      },
    modalView: {
        margin: 20,
        height: 760,
        width: 400,
        backgroundColor: '#000000',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      
});

export default EmptyWorkout