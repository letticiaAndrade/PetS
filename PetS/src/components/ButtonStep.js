
// imports dos icones 
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default ButtonStep = ({ step, setStep }) => {
    return (

        <FontAwesome.Button
            name="chevron-right"
            color="#B67830"
            backgroundColor={"#FFEDCB"}
            size={84}
            onPress={() => { setStep }}
        ></FontAwesome.Button>
    )
};
