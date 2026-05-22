import { Text } from "react-native";
import { StyleSheet } from "react-native";
function   InstructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionText: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'open-sans',
    },
}); 
export default InstructionText;