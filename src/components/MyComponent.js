import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "minh",
        address: "hn",
        age: 18
    }
    //Jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;