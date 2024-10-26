import NextStep from "./NextStep";
import PolicyChange from "./PolicyChange"

function Coverage(){
       
        return(
            <div>
            <div className="header">
                <p><strong>Step 1 of 3</strong></p>
            </div>
            <div className="ControlsPanelOptions_body">
            <PolicyChange />
        </div>
        <NextStep  />
        </div>
        );
    
}

export default Coverage