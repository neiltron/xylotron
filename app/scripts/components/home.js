import React from 'react';
import Pad from './pad';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          key: 'q',
          keycode: 81,
          text: 'whats',
          color: '#fefefe'
        }, {
          key: 'w',
          keycode: 87,
          text: 'lou',
          color: '#fcfcfc'
        }, {
          key: 'e',
          keycode: 69,
          text: 'e',
          color: '#fafafa'
        }, {
          key: 'a',
          keycode: 65,
          text: 'my',
          color: '#fdfdfd'
        }, {
          key: 's',
          keycode: 83,
          text: 'kill',
          color: '#fbfbfb'
        }, {
          key: 'd',
          keycode: 68,
          text: 'uh',
          color: '#f9f9f9'
        }
      ]
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
            key={item.keycode}
            keybind={item.key}
            keycode={item.keycode} />;
  }
}
