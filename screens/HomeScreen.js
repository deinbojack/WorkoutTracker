//https://www.youtube.com/watch?v=AkEnidfZnCU 35:00
import {View, Text, StyleSheet, Pressable} from "react-native";
import React, { useLayoutEffect } from "react"; 
import {useNavigation} from '@react-navigation/native';
import { PlusIcon as PlusIconOutline, ClipboardDocumentListIcon as ClipboardDocumentListIconOutline, MagnifyingGlassIcon as MagnifyingGlassIconOutline} from "react-native-heroicons/outline";



const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Quick Start</Text>
                <Pressable style={styles.quickStartButton} 
                onPress={()=>
                    navigation.navigate('EmptyWorkout')
                }>
                    <PlusIconOutline style={styles.plusIcon} size={25} color="#1d7fe2" />
                    <Text style={styles.quickStartText}>
                        Start Empty Workout
                    </Text>
                </Pressable> 
            </View>
            <Text style={styles.routinesText}>Rountines</Text>
            <View style={styles.routineRow}>
                <Pressable style={styles.newRoutineButton}>
                    <ClipboardDocumentListIconOutline style={styles.clipboardIcon} size={25} color="#1d7fe2" />
                    <Text style={styles.newRoutineText}>
                        New Routine
                    </Text>
                </Pressable>
                <Pressable style={styles.exploreButton}>
                    <MagnifyingGlassIconOutline style={styles.magnifyingglassIcon} size={25} color="#1d7fe2" />
                    <Text style={styles.exploreButtonText}>
                        Explore
                    </Text>
                </Pressable>  
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'start',
    },
    title: {
        padding: 17,
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },
    quickStartButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,        
        marginHorizontal: 17,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#1c1c1e',
        backgroundColor: '#1c1c1e',
        borderRadius: 5,
        flexDirection: 'row',
    },
    quickStartText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400', 
        paddingLeft: 10,
        paddingTop: 3,
    
    },
    routinesText: {
        padding: 17,
        paddingVertical: 19,
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
    },
    routineRow: {
        flexDirection: 'row',
    },
    newRoutineButton: {
        paddingVertical: 12,
        paddingRight: 0,
        marginRight: 0,
        paddingHorizontal: 20,        
        marginHorizontal: 17,
        width: 175,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#1c1c1e',
        backgroundColor: '#1c1c1e',
        borderRadius: 5,
        flexDirection: 'row',
    },
    newRoutineText: {
        color: '#fff',
        paddingLeft: 10,
        paddingTop: 3,
        fontSize: 16,
        fontWeight: '400', 
    },
    exploreButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,        
        marginHorizontal: 6,
        width: 175,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#1c1c1e',
        backgroundColor: '#1c1c1e',
        borderRadius: 5,
        flexDirection: 'row',
    },
    exploreButtonText: {
        color: '#fff',
        paddingLeft: 10,
        paddingTop: 3,
        fontSize: 16,
        fontWeight: '400', 
    }
  });

export default HomeScreen;


