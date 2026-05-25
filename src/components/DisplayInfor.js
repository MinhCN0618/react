import React from "react";
import "./DisplayInfor.scss"

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        //props => property, truyền dữ liệu cha -> con
        const { userList } = this.props;
        return (
            <div className="display-infor-container">
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide" : "Show"}
                    </button>
                </div>

                {this.state.isShowListUser && <div>
                    {userList.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                my name is: {user.name}
                                <br />
                                I'm: {user.age}
                            </div>
                        );
                    })}
                </div>}
            </div>
        );
    }
}

export default DisplayInfor;