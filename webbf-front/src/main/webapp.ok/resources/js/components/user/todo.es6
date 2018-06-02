import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import store from '../../stores/user/store.es6'
import actions from '../../actions/user/actions.es6'

export default class Todo extends React.Component{
    //组件渲染完成后，通过action获取所有的数组，刷新绑定到this.state上
    componentDidMount() {
          actions.getAll();
    }
    add(){
         var item =this.refs.item.value;
         this.refs.item.value='';
         alert(item);
         console.log(item);
         actions.add(item);

    }

    remove(i){
        actions.remove(i);
    }

  render() {
      //items用于乘放li的集合
      let items;
      if(this.state.list){
          items=this.state.list.map( (item,i)=> {
              //设置key是因为react的diff算法，是通过key来计算最小变化的
              // return <li key={i}>
              return <li>
                  {item.name}
              </li>
                  {/*<button onClick={this.remove.bind(this,i)}>remove</button>*/}
          // </li>
          })
      }
      return (
          <div>
              <input type="text" ref="item"/>
              <button onClick={this.add.bind(this)}>add</button>
              <ul>
                  {items}
              </ul>
          </div>
      )
  }
}
ReactMixin.onClass(Todo, Reflux.connect(store));