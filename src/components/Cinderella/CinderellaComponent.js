import React, {Component} from 'react';


class CinderellaComponent extends Component {
    render() {
        let {item, i} = this.props;
        return (
            <div>{i}. Name of baby is <b>{item.name}</b>. Age - {item.age} and foot size {item.footSize}</div>
        );
    }
}

export default CinderellaComponent;