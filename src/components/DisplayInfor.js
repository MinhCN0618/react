import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //props => property, truyền dữ liệu cha -> con
        const { userList } = this.props;
        return (
            <div>
                {userList.map((user) => {
                    return (
                        <div key={user.id}>
                            my name is: {user.name}
                            <br />
                            I'm: {user.age}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfor;