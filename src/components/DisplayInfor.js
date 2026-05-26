import React from "react";
import "./DisplayInfor.scss"
import logo from "./../logo.svg"

// class DisplayInfor extends React.Component {
//     render() {
//         console.log("render");

//         //props => property, truyền dữ liệu cha -> con
//         const { userList } = this.props;
//         return (
//             <>
//                 <div className="display-infor-container">
//                     {true && <>
//                         {userList.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                                     my name is: {user.name}
//                                     <br />
//                                     I'm: {user.age}
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>X</button>
//                                 </div>
//                             );
//                         })}
//                     </>}
//                 </div>
//             </>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { userList } = props;

    return (
        <>
            <div className="display-infor-container">
                {true && <>
                    {userList.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                my name is: {user.name}
                                <br />
                                I'm: {user.age}
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>X</button>
                            </div>
                        );
                    })}
                </>}
            </div>
        </>
    );
}


export default DisplayInfor;