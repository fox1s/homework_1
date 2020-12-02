import React, {Component} from 'react';
import {CinderellasArr} from "./DB/GeneratePrincess";
import CinderellaComponent from "./components/Cinderella/CinderellaComponent";
import PrinceComponent from "./components/Prince/PrinceComponent";

class App extends Component {
    render() {
        return (
            <div>
                {
                    CinderellasArr.map((value,index) => {
                    return (
                        <CinderellaComponent item = {value}
                                             i = {index}
                                             key = {index}/>

                    )
                })
                }
                    <PrinceComponent/>
            </div>
        );
    }
}

export default App;