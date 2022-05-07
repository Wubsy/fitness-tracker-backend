const React = require('react');
const Def = require('.default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUNT</h1>
                <p>Something went wrong</p>
                <img src="../../dan-senior-excercise-fail.jpg" alt="excercise fail"/>
                <div>Photo by <a href="https://unsplash.com/@dans-senior?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thought Catalog</a> on <a href="https://unsplash.com/s/photos/empty-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404;