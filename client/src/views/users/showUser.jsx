const React = require('react');
const Def = require('../default');

function showUser ({users, id}) {
    return (
        <Def>
            <main>
                <h1>{ users.name }</h1>
            </main>
        </Def>
    )
}

module.exports = showUser;