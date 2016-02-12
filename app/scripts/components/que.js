import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='about'>
        <h2>WHAT IS THIS?</h2>

        <p>XYLOTRON is a drumpad. Record. Playback. That's pretty much it for now.</p>
        <p>Follow the project on <a target='_blank' href='http://github.com/neiltron/xylotron'>Github</a> and/or follow me on twitter at @<a target='_blank' href='http://twitter.com/realtron'>realtron</a>.</p>

        <p><a href='#back' onClick={this.props.toggleAbout}>Back to the sick beats</a></p>
      </div>
    );
  }
}
