import React, {Component} from 'react'
import { View, Text } from 'react-native';

type Props = {};
class Topic extends Component<Props> {
    render() {
        return (
            <View><Text style={styles}>{this.props.name}</Text></View>
        )
    }
}

const styles = {
  fontSize: 15,
  fontWeight: 'bold'
};

export default Topic;