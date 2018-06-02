import React from 'react';
// import ReactDOM from 'react-dom';
// import Welcom from './welcom.es6';
import AreaStack2 from './areastack2.es6'

export default class  Toggle extends React.Component{


    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        this.setState({name:"wangwangwangwang"})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                <AreaStack2 name={this.state.name}/>
                {/*<Welcom name={this.state.name}/>*/}
            </div>
        );
    }
}

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );


