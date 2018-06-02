import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index/index.es6';
import TTest from './components/index/test.es6';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import SiderMenu from './components/common/sidermenu.es6'
import AreaStack from './components/echarts/areastack.es6'
import AreaStack2 from './components/echarts/areastack2.es6'
import PieGraph from './components/echarts/piegraph.es6'
import BarGraph from './components/echarts/bargraph.es6'
import Toggle  from './components/echarts/toggle.es6'
import UserMgt from './components/antd/usermgt.es6'
import HeatmapCartesian from './components/echarts/heatmapcartesian.es6'
import Todo from './components/user/todo.es6'
import Timer from './components/common/time.es6'


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
        {/*<Route path="/" component={TTest}>*/}
        {/*<Route path="/" component={UserMgt}>*/}
        {/*<Route path="/" component={Timer}>*/}
        {/*<Route path="/" component={BarGraph}>*/}
        {/*<Route path="/" component={ParentComponent}>*/}
            {/*<IndexRoute component={UserMgt} />*/}
            <Route path="AreaStack" component={AreaStack} />
            <Route path="HeatmapCartesian" component={HeatmapCartesian} />
            <Route path="userMgt" component={UserMgt} />
        </Route>
    </Router>
), document.getElementById("main"));
