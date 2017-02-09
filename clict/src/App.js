import React,{Component, PropTypes} from 'react'
import $ from 'jquery'
// import { Navbar, Nav, NavItem } from 'react-bootstrap'; // 导航组件

export default class App extends Component {
constructor(){
  super();
  this.state={
    data:{},
    wait:true
  }
}
componentDidMount(){
  var _this = this;

  $.get("http://api.github.com/users/xixilide",function(data,status){
    alert(status);
    _this.setState({
      data:data,
      wait:false
    })
  })
}
  render(){
    return(
      <div>
        {this.state.wait ? '正在加载数据'　: <div>
             <img  src={this.state.data.avatar_url}/>
          <p>个人简介：{this.state.data.bio}</p>
        </div>}
      </div>
    )
  }
}
