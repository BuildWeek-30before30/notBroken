import React from "react"

const List =(props)=>{
return(
<div className="dummyCard">{props.list.name}<br/>{props.list.description}</div>
)
}

export default List