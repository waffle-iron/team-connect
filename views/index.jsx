var React = require('react');

class Index extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

module.exports = Index;
