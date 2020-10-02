import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
// And return another component
  class HOC extends React.Component {

    componentDidMount() {

      fetch("https://api.randomuser.me/?results=50")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }))
      )
      .then(contacts => this.setState({ contacts }));


    }
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};


export default higherOrderComponent