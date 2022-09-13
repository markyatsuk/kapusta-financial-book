const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth?.email;

const getUserBalance = state => state.auth?.balance;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getUserGoogleEmail = state => state.auth?.googleEmail;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrent,
  getUserBalance,
  getUserGoogleEmail,
};

export default authSelectors;
