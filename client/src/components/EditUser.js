import React, { Component } from "react";
import axios from "axios";

export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updateMessage: ""
        }
    }

    async editUser(e) {
        e.preventDefault();
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const name = document.getElementById("name")


        try {
            await axios.patch("http://localhost:5000/api/users/update", {
                userName: username.value,
                password: password.value,
                name: name.value,
            }, {
                headers: {
                    Authorization: `Bearer ` + window.localStorage.getItem('token')
                }
            })
            this.setState({updateMessage: "Your info has been updated."})
        } catch (err) {
            console.log(err);
            this.setState({updateMessage: "There was an error updating your info."})
        }


    }


    render() {
        return (
            <form>
                <h3>Edit Your Profile</h3>
                <p>At least one field needs to be entered.</p>
                <p>{this.state.updateMessage}</p>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        id="username"
                        type="Username"
                        className="form-control"
                        placeholder="Enter username"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <label>Name</label>
                        <input
                            id="name"
                            type="name"
                            className="form-control"
                            placeholder="Enter name"
                        />
                    </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        onClick={this.editUser.bind(this)}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}