import React, { PropTypes } from 'react'

class Gitshow extends React.Component {
  render () {
    let info = this.props.gitinfo;
    console.log(info);
  return(
    <div>
      <p>用户名：{info.login}</p>
        <img  src={info.avatar_url}/>
     <p>个人简介：{info.bio}</p>
    </div>
  )
  }
}

export default Gitshow;
