import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.audio = new Audio('/audio/' + this.props.sample + '.WAV');

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
      this.audio.play();

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

  _handleClick (e) {
    this._handleKeydown({ keyCode: this.props.keycode });

    e.preventDefault();
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
      <div className='pad' style={styles.container} key={this.props.keycode} onClick={this._handleClick.bind(this)} onTouchTap={this._handleClick.bind(this)}>
        <div style={styles.label}>
          {this.props.text}
        </div>
        <small>{this.props.keybind}</small>
      </div>
    );
  }
}
