const localStorageData = {
  isLogin: false,
  userId: "",
}

export const localLogin = (userId) => {
  localStorage.setItem('user', JSON.stringify({
    ...localStorageData,
    isLogin: true,
    userId,
  }))
}

export const localLogout = () => {
  localStorage.setItem('user', JSON.stringify({...localStorageData}))
}

export const isLocalLogin = () => {
  const user = JSON.parse(localStorage.getItem('user')) ?? localStorageData;
  return user.isLogin;
}