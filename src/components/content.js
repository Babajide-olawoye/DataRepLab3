//imports needed
import React from 'react';


export class content extends React.Component {
    render() {
        return (
            <div className="App">


                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>


            </div>
        );

    }
}