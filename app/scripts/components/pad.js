import React from 'react';
import speechSynthesis from 'speech-synthesis';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  componentWillMount() {
    if (typeof this.props.keycode !== 'undefined') {
      document.addEventListener("keydown", this._handleKeydown.bind(this), false);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeydown.bind(this), false);
  }

  _handleKeydown(e) {
    if (e.keyCode == this.props.keycode) {
      speechSynthesis(this.props.text, 'en-IN');

      this.setState({
        active: true
      })

      setTimeout(() => {
        this.setState({
          active: false
        })
      }.bind(this), 275)
    }
  }

  _handleClick () {
    this._handleKeydown({ keyCode: this.props.keycode })
  }

  render() {
    let styles = {
      container: {
        backgroundColor: this.props.color,
        float: 'left'
      },
      label: {
        transform: 'scale(' + (this.state.active ? .6667 : 1) + ')'
      }
    };

    return (
      <div className='pad' style={styles.container} key={this.props.keycode} onClick={this._handleClick.bind(this)}>
        <span style={styles.label}>{this.props.keybind}</span>
      </div>
    );
  }
}
