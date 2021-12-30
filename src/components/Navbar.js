import React from 'react'

export default function Navbar(props) {
    return (
        <div className={props.mode}>

        <ul className={props.mode}>
          {console.log(props.mode)}
          <li><a className="active" href="/">{props.title}</a></li>
          <li><a  className={props.mode} href="#news">News</a></li>
          <li><a  className={props.mode} href="#contact">Contact</a></li>
          <li><a  className={props.mode}  href="#about">About</a></li>
        </ul>
        <label className="switch">
         
  <input type="checkbox" onClick={props.toggleMode} />
  <span className="slider round"></span>
</label>
        </div>
        
    )
}
