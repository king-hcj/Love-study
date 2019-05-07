import React, { Component } from 'react';
import Input from './Input.js';
import Title from './Title.js';
import './Calc.css';

// Calc组件start
class Calc extends Component {
  constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"计算器",id:1},
                {tabName:"翻转结果",id:2},
            ],
            currentIndex:1,
        };
    }    

    tabChoiced=(id)=>{
        //tab切换
        this.setState({
            currentIndex:id
        });
    }


  render () {
     var _this=this;
        var isBox1Show=this.state.currentIndex===1 ? 'inline-block' : 'none';
        var isBox2Show=this.state.currentIndex===2 ? 'inline-block' : 'none';
          var tabList= this.state.tabs.map(function(res,index) {
              // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=res.id===this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return <li key={index} onClick={this.tabChoiced.bind(_this,res.id)}
             className={tabStyle}>{res.tabName}</li>
        }.bind(_this));

    return (
        <div className="Calc">
          <Title />

          <div className="listWrap">
                <ul className="Tab">
                    {tabList}
                </ul>
                <div className="newsList">
                    <div style={{"display":isBox1Show}} >
                        {<Input onClick={()=>this.handleResult()}/>}
                    </div>
                    <div style={{"display":isBox2Show}} className="showReverse">
                      <p>您还没有进行计算，无法翻转！</p>
                    </div>
                </div>
          </div>

        </div>
    )
  }
}
//Calc组件end

export default Calc;
