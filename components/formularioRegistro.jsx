import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import NumberPlease from "react-native-number-please";
import {Dropdown} from "react-native-material-dropdown-v2"

export default function FormularioTempo(){

    const initialValues = [{ id: "pizza", value: 3 }];
    const [value, setValue] = useState(0);
    const [pizzas, setPizzas] = useState(initialValues);
    const pizzaNumbers = [{ id: "pizza", label: "🍕", min: 0, max: 99 }];

    let listaEstilo = [{value:'Borboleta'}, {value:'Costas'}, {value:'Crawn'}, {value:'Peito'}];

    return (
        <View>
            <Text> Prencha os dados! </Text>
            
            <Text> Qual distância voce nadou? </Text>
            <NumberPlease
                digits={pizzaNumbers}
                values={pizzas}
                onChange={(values) => setPizzas(values)}
            />
            <Button
                onPress={(value) => setValue(0)}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Dropdown
                label='Estilo'
                data={listaEstilo}
            />
        </View>
    );
}