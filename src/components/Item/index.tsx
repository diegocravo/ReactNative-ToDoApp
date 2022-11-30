import {useState} from "react";
import { View, TouchableOpacity, Text} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './styles';

type Props = {
    item: string,
    onCheck: () => void,
    onUncheck: () => void,
    onRemove: () => void,
}


export function Item({item, onCheck, onUncheck, onRemove}:Props) {
    const [checkboxState, setCheckboxState] = useState(false);

    function handleCount() {
        if(checkboxState){
            onUncheck()
        } else {
            onCheck()
        }
        setCheckboxState(!checkboxState);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
            >
                <BouncyCheckbox isChecked={checkboxState} disableBuiltInState onPress={handleCount} fillColor="#1E6F9F" />
            </TouchableOpacity>
            <Text style={styles.name}>{item}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove} >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}