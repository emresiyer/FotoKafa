import { observer } from "mobx-react/native";
import TodoStore from './store'
import React ,{Component} from 'react';

@observer
export default class hellomobx extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>{TodoStore.selectedStatus}</Text>
      </View>
    );
  }
}