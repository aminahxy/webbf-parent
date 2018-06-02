import React from 'react';
// import ReactDOM from 'react-dom';

class Welcom extends React.Component {
    constructor(props) {
        super(props);
        // this.init = this.init.bind(this)
        // this.name = this.props.name;
    }
    init() {
        // const { option={} } = this.props //外部传入的data数据
        var name = this.props.name;
        console.log(name);
        // alert(name);
        // let myChart = echarts.init(this.ID) //初始化echarts
    }

    componentDidMount() {
        this.init()
    }
    componentDidUpdate() {
        this.init()
    }

    render() {
        // return <h1>Hello, {this.props.name}</h1>;
        return (
        <div>
        <h2>1</h2>
            <h1>Hello, {name}</h1>
        </div>
    )
    }
}

export default Welcom;