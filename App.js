import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Topic from './src/Topic'

type Props = {};
export default class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { like: 0 };
        this.onPressGiveLike = this.onPressGiveLike.bind(this);
    }

    onPressGiveLike() {
        this.setState({ like: this.state.like + 1 });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Chào mừng bạn đến với CodeGym</Text>
                <Text style={styles.introduction}>Hôm nay chúng ta sẽ học về :</Text>
                <Topic name={'React'}/>
                <Topic name={'React Native'}/>
                <Topic name={'Laravel FrameWork'}/>
                <Button onPress={this.onPressGiveLike} title="Tặng Like cho CodeGym" color="#841584"/>
                <Text style={styles.giveLike}>Bạn đã tặng CodeGym {this.state.like} Like !!!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    introduction: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    giveLike: {
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 20
    }
});
