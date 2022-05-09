import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowUser = () => {
    const[userName, setUserName] = useState("");
    const[name, setName] = useState("");
    const[id, setId] = useState("");

    const userProfile = async () => {
        try{
            const res = await axios.get("http://localhost:5000/api/users/profile");           
            setUserName(res.data.result[0].userName)
            console.log(res)
            setName(res.data.results[0].name)
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        //call data on page start
        userProfile();
    }, []);

    return <div>
            <div className="d-grid">
                <h1>{ userName }</h1>
                <a href={`/update`} className="btn btn-secondary">Edit user</a>
            </div>
            <br></br>
                <form method="POST" action={`/places/${id}?_methhod=DELETE`}>
                <div className="d-grid">   
                    <button type="submit" className="btn btn-light">Delete user</button>
                    </div>
                </form>
            
    </div>
    };

export default ShowUser;