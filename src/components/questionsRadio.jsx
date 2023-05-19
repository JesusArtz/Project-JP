// Crear radio button component
import React, { useState } from "react";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel, } from "react-native-simple-radio-button";
import { useForm } from "./provider";

export default function QuestionRadioGroups({ context }) {

    const { send } = useForm();
    const [value, setValue] = useState(0);

    const onPress = (value) => {
        setValue(value);
        send({ key: context, value: value });
    }


    const radio_props = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 }
    ];



    return (
        <RadioForm
            formHorizontal={true}
            animation={true}
        >
            {/* To create radio buttons, loop through your array of options */}
            {
                radio_props.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i} >
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                            obj={obj}
                            index={i}
                            isSelected={value === i+1}
                            onPress={onPress}
                            borderWidth={1}
                            buttonInnerColor={'black'}
                            buttonOuterColor={value === i+1 ? 'black' : '#000'}
                            buttonSize={20}
                            buttonOuterSize={30}
                            buttonStyle={{}}
                            buttonWrapStyle={{ marginLeft: 20 }}
                        />
                        <RadioButtonLabel
                            obj={obj}
                            index={i}
                            labelHorizontal={true}
                            onPress={onPress}
                            labelStyle={{ fontSize: 20, color: '#2ecc71' }}
                            labelWrapStyle={{}}
                        />
                    </RadioButton>
                ))
            }
        </RadioForm>

    )
}
