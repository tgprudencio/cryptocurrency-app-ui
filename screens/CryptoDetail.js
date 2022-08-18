import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
    Animated
} from 'react-native';

import { dummyData, COLORS, SIZES, FONTS, icons } from '../constants';
import { HeaderBar, CurrencyLabel } from '../components'; 

const CryptoDetail = ({ route, navigation }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    useEffect(() => {
        const {currency} = route.params;
        setSelectedCurrency(currency);
    }, [])

    function renderChat() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.radius,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                {/* Header */}
                <View 
                    style={{ 
                        flexDirection: 'row', 
                        margintTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <CurrencyLabel 
                            icon={selectedCurrency?.image}
                            currency={selectedCurrency?.currency}
                            code={selectedCurrency?.code}
                        />
                    </View>
                    <View>
                        <Text style={{ ...FONTS.h3 }}>${selectedCurrency?.amount}</Text>
                        <Text style={{ color: selectedCurrency?.type == 'I' ? COLORS.green : COLORS.red, ...FONTS.body3 }}>${selectedCurrency?.changes}</Text>
                    </View>

                </View>
                {/* Chart */}
                {/* Options */}
                {/* Dots */}
            </View>
        );
    }

    return (
        <SafeAreaView
            style={{
                fleX: 1,
                backgroundColor: COLORS.lightGray1
            }}
        >
            <HeaderBar right={true} />

            <ScrollView>
                <View style={{ fleX: 1, paddingBottom: SIZES.padding }}>
                    { renderChat() }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default CryptoDetail;