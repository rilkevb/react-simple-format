import React, { Component } from 'react';
// import SimpleFormat from 'react-simple-format'  // TODO : loads just fine as long as this is not enabled.  When enabled, the error says that it is looking for a file named src, rather than in the src directory but the webpack.config.js looks correct to me.

export default class App extends Component {
  render() {
    return (
      <h1>Hello, world.</h1>
    );
  }
}
