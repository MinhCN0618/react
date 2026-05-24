import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        userList: [
            { id: 1, name: "minh", age: 18 },
            { id: 2, name: "nhat", age: 30 },
            { id: 3, name: "duy", age: 95 }
        ]
    }

    render() {
        return (
            <div>
                <UserInfor />
                <DisplayInfor userList={this.state.userList} />
            </div>
        );
    }
}

export default MyComponent;