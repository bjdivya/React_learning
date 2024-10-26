function NextStep(){
const result=[];
    const rendertoNextPage=()=>{
        const value=document.querySelectorAll(".covCheckBox");
        for(let x=0;x<value.length;x++){
                if(document.getElementById(x).getAttribute("checked")==="true"){
                  result.push(document.getElementById(x).getAttribute("name"));
                }
            };
            console.log(result);
        }

    return(
        <div>
            <button id="NextBtn" onClick={rendertoNextPage}>Next Step</button>
        </div>
    )
}
export default NextStep