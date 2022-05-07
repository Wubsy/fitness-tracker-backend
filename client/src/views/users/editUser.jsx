const React = require('react');
const Def = require('..default');

function editUser () {
    return (
        <Def>
            <main>
                <form method="POST" action={`/users/${id}?_method=PUT`}>
                <div>
                    <label htmlFor="userName">User name</label>
                    <input type="text" name="userName" id="userName" required defaultValue={users.userName} />
                </div>
                <div>
                    <label htmlFor="password">New password</label>
                    <input id="password" type="password" name="password"/>
                </div>
                <div>
                    <label htmlFor="password2">Confirm new password</label>
                    <input id="password2" type="password" name="password2"/>
                </div>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" name="name" required defaultValue={users.name}/>
                </div>
                <input type="submit"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = editUser;