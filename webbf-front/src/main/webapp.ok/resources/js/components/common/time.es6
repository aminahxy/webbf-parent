import './style/time.css';
import React from 'react';
// import Thumbnail from 'react-thumbnail'
// import Thumbnail from '../../../../node_modules/react-thumbnail';
import { Row, Col,Button } from 'antd';

// import { Layout } from 'antd';
import PieGraph from '../echarts/piegraph.es6'
import PieGraph2 from '../echarts/piegraph2.es6'
import BarGraph from '../echarts/bargraph.es6'
import BarGraph2 from '../echarts/bargraph2.es6'

import {Input,Grid,FormGroup,Thumbnail} from 'react-bootstrap';
import DateTimePicker from 'react-bootstrap-date-time-picker';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/react-bootstrap-date-time-picker/lib/react-bootstrap-date-time-picker.css'
import SiderMenu from '../common/sidermenu.es6'
import AreaStack from '../echarts/areastack.es6'
import AreaStack2 from '../echarts/areastack2.es6'
import UserMgt from '../antd/usermgt.es6'
import Todo from "../user/todo.es6";
import Pie from "../user/pie.es6";


export default class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            format: 'MM/DD/YYYY hh:mm:ss A'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.dates = {
            dateSecFrom: new Date("2017-03-30T14:28:06+05:30"),
            dateSecTo: new Date("2017-03-30T14:28:40+05:30"),
            dateMinFrom: new Date("2017-03-30T14:28:06+05:30"),
            dateMinTo: new Date("2017-03-30T14:59:06+05:30"),
            dateHourFrom: new Date("2017-03-30T04:28:06+05:30"),
            dateHourTo: new Date("2017-03-30T18:28:06+05:30"),
            dateDateFrom: new Date("2017-03-15T14:28:06+05:30"),
            dateDateTo: new Date("2017-03-30T14:28:06+05:30"),
            dateMonthFrom: new Date("2017-02-15T14:28:06+05:30"),
            dateMonthTo: new Date("2017-03-30T14:28:06+05:30"),
            dateYearFrom: new Date("2015-03-30T14:28:06+05:30"),
            dateYearTo: new Date("2017-03-30T14:28:06+05:30")
        };
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
        this.setState({
            date: value
        });
    }

    handleFormatChange(e) {
        this.setState({
            format: e.target.value
        });
    }

    onCheck(event) {
        this.setState({
            from: this.dates[event.target.value + "From"],
            to: this.dates[event.target.value + "To"],
            checked: event.target.value
        });
    }

    handleClick() {
        var item = this.refs.item.value;
        var date = this.state.date;
        var parameter = item.replace(/\//g,"<") + "::" + date;
        // alert(parameter);
        console.log(parameter);
        this.setState({name: parameter})
    }


    render() {
        // const wellStyles = {margin: '10px'};
        const wellStyles = {padding:'5'};
        return (

            <div className="main-div">
                <div className="main-top">日志平台系统Demo</div>

                <div className="well" style={wellStyles}>
                    <Row type="flex" justify="start">
                        <Col span="4">
                            <input type="text" ref="item"/>
                        </Col>
                        <Col span={4}>
                            <FormGroup controlId="change_handler">
                                <DateTimePicker from={this.state.from} to={this.state.to} onChange={this.handleChange}
                                                dateFormat={this.state.format} placeholder="Placeholder" value={this.state.date}
                                                id="change_handler_example"/>
                            </FormGroup>
                        </Col>
                        <Col span={4}>
                            <Button  onClick={this.handleClick} type="primary" size="large" >search</Button>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col span="12">
                        <BarGraph/>
                    </Col>
                    <Col span="12">
                        <PieGraph  name={this.state.name}/>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <BarGraph2/>
                    </Col>
                    <Col span="12">
                        <PieGraph2  name={this.state.name}/>
                    </Col>
                </Row>
            </div>


        );
    }
}
