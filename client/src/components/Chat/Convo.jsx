import { getUser } from '../../utilies/APIRoutes.js';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Convo = ({ data1, currentUser, onlineUser }) => {
    // console.log("data", data1, "cur", currentUser);
    // const [contacts, setContacts] = useState([
    //     // { id:}
    //     { id: 1, avatar: 'avt0.png', name: 'Alice Johnson', online: false, message: 'New Message' },
    //     { id: 2, avatar: 'avt1.png', name: 'Bob Wilson', online: true, message: 'New Message' },
    //     { id: 3, avatar: 'avt2.png', name: 'Charlie Smith', online: false, message: 'New Message' },
    //     { id: 4, avatar: 'avt3.png', name: 'David Brown', online: false, message: 'New Message' },
    //     { id: 5, avatar: 'avt4.png', name: 'Emma Davis', online: false, message: 'New Message' },
    //     { id: 6, avatar: 'avt5.png', name: 'Frank Miller', online: false, message: 'New Message' },
    //     { id: 7, avatar: 'avt6.png', name: 'Grace Wilson', online: false, message: 'New Message' },
    //     { id: 8, avatar: 'avt0.png', name: 'Henry Johnson', online: true, message: 'New Message' },
    //     { id: 9, avatar: 'avt1.png', name: 'Ivy Smith', online: true, message: 'New Message' },
    //     { id: 10, avatar: 'avt2.png', name: 'Jack Davis', online: false, message: 'New Message' },
    //     { id: 11, avatar: 'avt3.png', name: 'Kate Brown', online: false, message: 'New Message' },
    //     { id: 12, avatar: 'avt4.png', name: 'Leo Miller', online: false, message: 'New Message' },
    //     { id: 13, avatar: 'avt5.png', name: 'Mia Wilson', online: false, message: 'New Message' },
    //     { id: 14, avatar: 'avt6.png', name: 'Nathan Johnson', online: true, message: 'New Message' },
    //     { id: 15, avatar: 'avt0.png', name: 'Olivia Smith', online: false, message: 'New Message' },
    //     { id: 16, avatar: 'avt1.png', name: 'Peter Davis', online: false, message: 'New Message' },
    //     { id: 17, avatar: 'avt2.png', name: 'Quinn Brown', online: false, message: 'New Message' },
    // ]);
    const [userData, setUserData] = useState(null);
    // const [data, setData] = useState(data1);
    useEffect(() => {

        const userId = data1.members.find((id) => id !== currentUser);
        // console.log(userId);
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getUserData();
        // if (data1 && Array.isArray(data1) && data1.length > 0) {
        //     const userId = data1[0].members.find((id) => id !== currentUser);
        //     console.log(userId);
        //     const getUserData = async () => {
        //         try {
        //             const { data } = await getUser(userId);
        //             // console.log("skdjf", data);
        //             setUserData(data)
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     };
        //     getUserData();
        // }
    }, []);

    // console.log("data", data1, "cur", currentUser);

    return (
        // <div>{contacts.map((contact) => (
        <>
            <Link >
                <div className="mx-6 py-3 flex flex-row gap-2 items-center border-b-[1px] border-gray-200">
                    <div className={`w-12 h-12 ${onlineUser ? 'outline outline-green-500 outline-offset-[3px] rounded-full' : null}`}>
                        <img src={userData?.avatarImage} alt="" className="hover:cursor-pointer active:scale-95 transition-all ease-in-out" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="font-extrabold">{userData?.username}</p>
                        <p className="text-xs font-semibold text-gray-400">New message</p>
                    </div>
                </div>
            </Link></>
        // <></>
        // ))}</div>
    )
}

export default Convo