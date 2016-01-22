import React from 'react';
import Pad from './pad';
import Pads from '../pads';

export default class extends React.Component {
  constructor(props) {
    super(props);

    console.log(Pads)

    this.state = {
      items: Pads
    };
  }

  render() {
    return (
      <div id='container'>
        {this.state.items.map(this.renderItem)}
      </div>
    );
  }

  renderItem(item, index) {
    return <Pad
            color={item.color}
            text={item.text}
            pronunciation={item.pronunciation}
            key={item.keycode}
            keybind={item.key}
            keycode={item.keycode} />;
  }
}
