import React, { Component } from 'react'

class Home extends Component {
    render() {
        return(
            <div>
                Hello Satyajit
                <button onClick={()=>console.log('hiii')}>Clik Me</button>
             </div>   
        )
    }
}

export default {
    component: Home
};