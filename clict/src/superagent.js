import React, { PropTypes } from 'react';
import superagent from 'superagent'
class Super extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    superagent
  .get('http://api.github.com/users/xixilide')
  .end(response =>
    this.setState({
      data:response.data,
      wait:false
    }));
  }
  render () {
    <div>

        {this.state.wait? '正在加载数据'　: <div>
             <img  src={this.state.data.avatar_url}/>
          <p>个人简介：{this.state.data.bio}</p>
        </div>}
    </div>
  }
}

export default Super;
