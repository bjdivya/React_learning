

const UserName=()=><span style={{display:'block',color:'blue',fontWeight:'bold'}}>UserName : <input placeholder='Enter User name' spellCheck></input></span>

const Password=()=><span style={{display:'block',color:'blue',fontWeight:'bold'}}>Password : <input placeholder='Enter password' ></input></span>

const Login=()=><button style={{border: '3px solid pink',borderRadius:'10px', padding:'3px 10px', margin:'0px 0px 0px 0px'}}
>Login</button>

const Cancel=()=><button style={{border: '3px solid pink',borderRadius:'10px', padding:'3px 10px',margin:'0px 0px 0px 0px',textAlign:'center'
,color:'black',fontSize:'15px'}}>Cancel</button>



//export default UserName;

//nmaed export
export {UserName,Password,Login,Cancel};
