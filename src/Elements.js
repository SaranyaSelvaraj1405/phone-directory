import React from 'react';
import "./Elements.css"

const Elements = function () {
    let subscribers=[
        {
            id:1,
            name:"Harry Styles",
            phone: "1212121212"
        },
        {
            id:2,
            name: "Louis Tomlinson",
            phone:"2525252525"
        }
    ]
    return (
        <div>
            <button id='addBtn'>Add</button>
            <br></br>
            <table id='dataList'>
               <thead>
                <th>Name</th>

                <th>Phone</th>
                </thead>
                <tbody>
                {
                    subscribers.map(
                        sub=>{
                            return(
                                <tr key={sub.id}>
                                    <td>{sub.name}</td>
                                    <td>{sub.phone}</td>
                                    <td><button id='deleteBtn'>Delete</button></td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Elements;