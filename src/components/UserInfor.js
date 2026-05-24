import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "minh",
        address: "hn",
        age: 18
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
        console.log(this.state)
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

export default UserInfor;