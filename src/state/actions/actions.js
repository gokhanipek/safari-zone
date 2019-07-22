export const REGISTER = 'REGISTER'

export const registerUser = newUser => ({
  type: REGISTER,
  userName: newUser
})
  