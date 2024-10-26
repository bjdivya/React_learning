

function InputName(props){
    return (
        <div>
            <label>{props.labelName} <input></input></label>
        </div>
    );

}
function Button(props){
    return (
        <div style={{display:"inline-block"}}>
            <button >{props.name}</button>
        </div>
    );

}

export {InputName,Button}
