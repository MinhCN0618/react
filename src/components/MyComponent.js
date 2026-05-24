import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "minh",
        address: "hn",
        age: 18
    }
    //Jsx

    handleclick = () => {
        console.log("my name is: ", this.state.name)
        this.setState({
            name: "abc",
            address: "asdas"
        })
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={() => { this.handleclick() }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;