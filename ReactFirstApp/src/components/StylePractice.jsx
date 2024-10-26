import "../css/practiceStyle.css"
function Style(){

    //const time=new Date().getHours;
    const time=new Date(2024,10,25,4);//year,month,date,hour
    let message="";
    let name="Divya"
    let customStyle={};
       if(time.getHours()<=12){
        message= "Good Morning";
        customStyle.color="red";
       }
       else if(time.getHours()>12 && time.getHours()<18){
        message= "Good Evening!!";
        customStyle.color="green";
       }
       else{
        message= "Good Night!!";
        customStyle.color="blue";
       }
    

return(
    <div>
        <h1 className="header" style={customStyle}>{message} {name}</h1>
    </div>
)

}

export default Style