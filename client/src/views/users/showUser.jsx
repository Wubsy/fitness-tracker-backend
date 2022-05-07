const React = require('react');
const Def = require('../default');


function showUser ({users, id}) {
    return (
        <Def>
            <main>
                <h1>{ users.name }</h1>
                <a href={`/users/${id}/edit`} className="btn btn-warning">Edit user</a>
                <form method="POST" action={`/places/${id}?_methhod=DELETE`}>
                    <button type="submit" className="btn btn-danger">Delete user</button>
                </form>

            </main>
        </Def>
    )
}

module.exports = showUser;