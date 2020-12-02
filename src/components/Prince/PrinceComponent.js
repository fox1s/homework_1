import React, {Component} from 'react';
import {CinderellasArr} from "../../DB/GeneratePrincess";
import './Prince.css'

class PrinceComponent extends Component {
    render() {

        function Prince(name, age, shoeSize) {
            this.name = name;
            this.age = age;
            this.shoeSize = shoeSize;
            this.content = 0;

            this.findPrinceLove = function (CinderellasArr) {
                for (const cinderella of CinderellasArr) {
                    if (cinderella.footSize === this.shoeSize) {
                        this.content =  `Happy life together ${this.name} and ${cinderella.name}`
                        // break;
                        return this.content
                    }
                }

            }
            return this.content
        }

        let prince = new Prince('Rostyslav', 20, 35);
        prince.findPrinceLove(CinderellasArr);

        return (
            <div className='prince'>
                {prince.content}
            </div>
        );
    }
}

export default PrinceComponent;