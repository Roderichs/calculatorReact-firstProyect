import { ACTIONS } from "./App"

/** 
 * 
 * @Description: Creating a basic calculator in JavaScript React  
 * @Author: Roderichs
 * @Date: 15/02/2020
 * 
*/

export default function OperationButton({ dispatch, operation }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
        >
            {operation}
        </button>
    )
}