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
          text: 'louis vuitton',
          pronunciation: 'louis   vwee ton',
          color: '#fefefe'
        }, {
          key: 'w',
          keycode: 87,
          text: 'prada',
          pronunciation: 'prada',
          color: '#fcfcfc'
        }, {
          key: 'e',
          keycode: 69,
          text: 'gucci',
          pronunciation: 'gucci',
          color: '#fafafa'
        }, {
          key: 'a',
          keycode: 65,
          text: 'chanel',
          pronunciation: 'shanelle',
          color: '#fdfdfd'
        }, {
          key: 's',
          keycode: 83,
          text: 'fendi',
          pronunciation: 'fendi',
          color: '#fbfbfb'
        }, {
          key: 'd',
          keycode: 68,
          text: 'armani',
          pronunciation: 'armani',
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
            pronunciation={item.pronunciation}
            key={item.keycode}
            keybind={item.key}
            keycode={item.keycode} />;
  }
}
