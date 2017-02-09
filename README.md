# Ajax

AJAX 的英语原意是“异步的 Javascript 和 XML”。

Ajax 就是使用 JS 来实现页面的局部刷新

AJAX 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

### 用两种方式来实现 AJAX

第一种是比较传统的方式：jQuery + Express 。

第二种：React + Meteor 的 SPA 应用

###　XMLHttpRequest 对象用于和服务器交换数据。

- xmlhttp.open("GET","test1.txt",true);
- xmlhttp.send();

- open(method,url,async)	 规定请求的类型、URL 以及是否异步处理请求。
  - method：请求的类型；GET 或 POST
  - url：文件在服务器上的位置
  - async：true（异步）或 false（同步）

- send(string)	将请求发送到服务器。
  - string：仅用于 POST 请求

### １．用原生方法写AJAX请求

```js
constructor(){
  super();
  this.state={
    data:{},
    wait:true
  }
}
  componentDidMount(){
    var _this = this;
    //用原生方法写AJAX请求
    var request = new XMLHttpRequest();
    request.onreadystatechange=function () {
      if (request.readyState==4 && request.status==200)
        {
          var resObg = JSON.parse(request.responseText);
        console.log(resObg);
        _this.setState({
          data:resObg,
          wait:false
        })
        // document.getElementById("info").innerHTML=xmlhttp.responseText;
        }
    }
    request.open("GET","http://api.github.com/users/xixilide",true);
    request.send();
  }
    render(){
      return(
        <div>
          {this.state.wait? '正在加载数据'　: <div>
               <img  src={this.state.data.avatar_url}/>
            <p>个人简介：{this.state.data.bio}</p>
          </div>}
        </div>
      }
```

### ２．用jquery实现AJAX请求

```js
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
        {this.state.wait? '正在加载数据'　: <div>
             <img  src={this.state.data.avatar_url}/>
          <p>个人简介：{this.state.data.bio}</p>
        </div>}
      </div>
    )
  }
```
### 3.通过axios 实现json 请求

　axios---　Promise based HTTP client for the browser and node.js

get 请求
#### 通用代码

```js
componentDidMount(){
  axios.get("http://api.github.com/users/xixilide")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}
```
#### 实例１

```js
componentDidMount(){
  axios.get("http://api.github.com/users/xixilide")
  //用箭头函数可以避免this　指向不明，默认指向父集
  .then(response =>
    this.setState({
      data:response.data,
      wait:false
    })
  )
  .catch(function (error) {
    console.log(error);
  })
}
return(
  <div>  {this.state.wait　? '正在加载数据'　:
    <p>{this.state.data.bio}</p>
}
  </div>
```
#### 实例２

```js
class Axios extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  handleSubmit(e){
    e.preventDefault();
    var value = this.refs.input.value;
      axios.get("http://api.github.com/users/"+value)
      .then(response =>
        this.setState({
          data:response.data,
          wait:false
        })
      )
      .catch(function (error) {
        console.log(error);
      })

  }

  <div>
    <form onSubmit={this.handleSubmit.bind(this)}>
    <input type="text" ref="input" />
    </form>
      {this.state.wait? '正在加载数据'　: <div>
           <img  src={this.state.data.avatar_url}/>
        <p>个人简介：{this.state.data.bio}</p>
      </div>}
  </div>
```

### 4.用SuperAgent实现AJAX

SuperAgent is light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve after being frustrated with many of the existing request APIs. It also works with Node.js!
