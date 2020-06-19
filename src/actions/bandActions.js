import uuid from 'uuid'

export const addBand = name => {
     return {
          type: 'ADD_BAND',
          payload: {
               id: uuid(),
               name
          }
     }
}

export const deleteBand = id => {
     return {
          type: 'DELETE_BAND',
          payload: id
     }
}