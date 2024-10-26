import { Component } from "react";
import PolicyForm from "./step2";

class FinalPage extends Component{
    render(){
        return(
          <div>
            <PolicyForm />
            <button>Save POI</button>
            <button>Print POI</button>
            <button>Reset POI</button>
            <button>close POI</button>
          </div>
        );
    }
}
export default FinalPage