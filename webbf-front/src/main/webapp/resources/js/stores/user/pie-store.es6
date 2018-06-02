import Reflux from 'reflux'
import actions from '../../actions/user/pie-actions.es6'
import $ from 'jquery';

//给数组添加remove方法，用于去除指定下标的元素
Array.prototype.remove=function(dx)
{
    if(isNaN(dx)||dx>this.length){return false;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=this[dx])
        {
            this[n++]=this[i]
        }
    }
    this.length-=1
};

export default Reflux.createStore({
    items:[],
    //监听所有的actions
    listenables: [actions],
    //on开头的都是action触发后的回调函数
    onGetAll () {
        //更新状态（就是个对象）
        this.trigger({list:this.items});
    },
    onRemove(i){
        this.items.remove(i);
        this.trigger({list:this.items});
    },
    onAdd(){
         // this.items.push({name:item});
         // this.trigger({list:this.items});
        $.ajax({
            async: false,
            contentType: "application/json; charset=utf-8",
            type : "get",
            // url : "todos/"+item,
            url : "todos",
            data: {item:item},
            // data: JSON.stringify({name:item}),
            datatype : 'json',
            success : function(data) {
                // alert("ok");
                // this.openAddModal(false);
                // this.getAllUser();
                this.items.push({name:item});
                this.trigger({list:this.items});
            }.bind(this),

            error: function() {
                alert("this todo is error");
            }
        });
        // this.items.push({name:item});
        // this.trigger({list:this.items});

    }
});