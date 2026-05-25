import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: "",
        address: "hn",
        age: 0
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.props.handleAddNewUser({
            id: 4,
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>

                    <label>your name</label>
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}></input>

                    <label>your age</label>
                    <input type="text" value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}></input>

                    <button>click</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;