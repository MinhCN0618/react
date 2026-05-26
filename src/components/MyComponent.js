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
            userList: [user, ...this.state.userList]
        })
    }

    handleDeleteUser = (id) => {
        let cloneUserList = this.state.userList;
        cloneUserList = cloneUserList.filter(item => item.id !== id)
        this.setState({
            userList: cloneUserList
        })
    }

    //JSX
    render() {
        const test = { name: "abcd", age: 18 }

        return (
            <div>
                {JSON.stringify(test)}
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <DisplayInfor userList={this.state.userList} handleDeleteUser={this.handleDeleteUser} />
            </div>
        );
    }
}

export default MyComponent;