import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        userList: [
            { id: 1, name: "minh", age: 18 },
            { id: 2, name: "nhat", age: 30 },
            { id: 3, name: "duy", age: 95 }
        ]
    }

    handleAddNewUser = (user) => {
        this.setState({
            userList: [...this.state.userList, user]
        })
    }

    //JSX
    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <DisplayInfor userList={this.state.userList} />
            </div>
        );
    }
}

export default MyComponent;