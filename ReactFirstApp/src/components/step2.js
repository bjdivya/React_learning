import { Component } from "react"
import Confidential from "./Confidential"
import logo from "../images/allstate_logo_small (1).gif"
import "../css/second.css"
import Submit from "./submitBtn"


class PolicyForm extends Component{
    render(){
        return(
            <div>
            <div class="StepDiv">
               <p className="Step2Of3">Step 2 of 3</p>
            </div>
            <br />
            <div className="policyForm">
                <div className="logoAndPolicy">
                    <img src={logo} alt="allstatelogo"></img>
                </div>
                <div>
                    <div class="CustDetails">
                    <input class="CustDetailsInput"></input>
                    <input class="CustDetailsInput"></input>
                    <input class="CustDetailsInput"></input>
                    </div>
                    <p>Current Date -
                        <span></span> </p>
                </div>
                <div class="Description-class">
                    <span>Dear<input></input></span>
                    <p class="Description">Thank you for choosing Allstate Property and Casualty Insurance Company to help with your property insurance needs. I have enclosed, for your review, a Confirmation of Policy Change that summarizes your property policy.</p>
                    <p class="Description">In the pages that follow the requested changes to your property policy appear first in the document following this introductory letter.</p>
                    <p class="Description">For comparison purposes the property policy endorsement information is followed by a <strong>Proof of Insurance</strong> that contains information pertaining to your coverage prior to this endorsement.</p>
                    <p class="Description">Again, thank you for allowing us to help take care of your insurance needs. Please do not hesitate to contact one of our Customer Insurance Representatives at 1-800-ALLSTATE (1-800-255-7828) or your local Allstate agency with any questions about the enclosed document or your insurance coverage in general. You can also contact us via our web site at <a href='https://www.allstate.com/' target='_self'>www.Allstate.com.</a></p>
                </div>
                <Confidential />
                <div></div>
                <div class="PolicyInfHeader">
                    <span>Listed below is Policy information prior to the above change:</span>
                    <span>Allstate Property and Casualty Insurance Company Policy Change</span>
                </div>
                <div>
                    <table className="policyInfo">
                        <thead>
                            <th colSpan={2}>Policy Information</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Insured Name:</td>
                                <td></td>
                            </tr>
                            <tr>
                             <td>Coverage Effective Date:</td>
                             <td></td> 
                             </tr>
                            <tr>
                            <td>Policy Number:</td>
                            <td></td>
                            </tr>
                            <tr>
                                <td>Policy Type</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Total Annual Policy Premium:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Occupants:</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                <br />
                    <table className="premises">
                        <thead>
                            <th colSpan={2}>Location of Premises</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Premises Address</td>
                                <td></td>
                            </tr>
                            <tr>
                             <td>Premises City</td>
                             <td></td> 
                             </tr>
                            <tr>
                            <td>Premises State</td>
                            <td></td>
                            </tr>
                            <tr>
                                <td>Policy Type</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Premises Zip</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Confidential />
                <Confidential />
                <div className="provision">
                    <p class="Description"><b>PROVISIONS:</b> The provisions of the policy shall prevail in all respects.</p>
                    <p class="Description">All premiums for the insurance policy shall be computed in accordance with Allstate's rules, forms, premiums and minimum premiums applicable to the insurance afforded which are in effect at the inception of the insurance and upon each anniversary thereof, including the date of interim changes.</p>
                    <p class="Description">It is understood that should the insurance protection evidenced herein terminated for any reason, due notice will be given to the Insured, to the mortgagee, and to all other interested partied in accordance with the standard mortgagee clause.</p>
                    <p class="Description">A copy of the Policy Declarations reflecting the annual premium will be sent, if required to the mortgagee and to any other interested parties.</p>
                </div>
                <Confidential />
                <br />
                
            </div>
            <Submit />
            </div>
        )

    }
}
export default PolicyForm