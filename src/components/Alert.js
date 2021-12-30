import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() +  lower.slice(1);
        }
        
    return (
      props.alert &&  <div>
            
<div className={props.alert.Type}>
    {console.log(props.alert.Type)}
  <strong>{capitalize(props.alert.Type)}</strong> :{props.alert.msg}
</div>

        </div>
    )
}
