import { Pressable, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";

function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{color: '#640233'}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>    
        </View> 
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },  
    buttonInnerContainer: {
        backgroundColor: colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // Android
    },  
    buttonText: {
        color: 'white',
        fontSize: 24,   
        fontFamily: 'open-sans',
    },
    pressed: {
        opacity: 0.75,
    },
}); 
