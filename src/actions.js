import * as actions from './actionTypes';

// export function bugAdded(description) {
//   return {
//         type: 'BUG_ADDED',
//         payload: {
//             description: "Bug1"
//         }
//     }
// }

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        //if key and value are same then we can use shorthand syntax
        id
    }
})