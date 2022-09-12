const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth?.user?.email;

const getUserBalance = state => state.auth.user.balance;

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
