export const REGISTER = 'REGISTER'

export function registerUserAction(newUser){
  return {
    type: REGISTER,
    payload: {
      userName: newUser
    }  
  }
}    