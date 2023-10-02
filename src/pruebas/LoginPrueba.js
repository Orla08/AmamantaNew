import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const CustomImput = ({
    control,
    rules = {},
    name,
    placeholder,
    secureTextEntry,
    iconName,
    customValue,
    customOnChange,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View
                        style={[
                            styles.container,
                            { borderColor: error ? 'red' : '#7068ee' },
                        ]}
                    >
                        <View style={styles.iconContainer}>
                            <Icon name={iconName} size={22} style={styles.icono} />
                        </View>
                        <TextInput
                            value={customValue || value}
                            onChangeText={(text) => {
                                customOnChange(text);
                                onChange(text);
                            }}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            placeholderTextColor="#000"
                            secureTextEntry={secureTextEntry}
                            style={styles.input}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>
                            {error.message || 'Error'}
                        </Text>
                    )}
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        borderColor: '#7068ee',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        ...Platform.select({
            ios: {
                padding: 12,
                paddingHorizontal: 10,
            },
            android: {
                placeholder: '#f1f1f1'
            },
        }),
    },
    input: {
        width: '100%',
        color: 'black',
        marginLeft: 6,

    },

    iconContainer: {
        width: '15%',
        borderRightWidth: 1,
        borderColor: '#7068ee',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {

            },
        }),
    },

    icono: {
        fontSize: 22,
        color: '#7068ee',
        marginRight: 10,
        alignSelf: 'center',
        ...Platform.select({
            ios: {

            },
            android: {
                marginLeft: 10,
            }
        }),
    },
});

export default CustomImput;