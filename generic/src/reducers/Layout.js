const SET_MOBILE_NAV_VISIBILITY = "LAYOUT/SET_MOBILE_NAV_VISIBILITY";

export const setMobileNavVisibility = (visibility) => ({
  type: SET_MOBILE_NAV_VISIBILITY,
  visibility,
});

export const toggleMobileNavVisibility = () => (dispatch, getState) => {
  const { mobileNavVisibility } = getState().Layout;
  dispatch(setMobileNavVisibility(!mobileNavVisibility));
};

export default function layoutReducer(
  state = { mobileNavVisibility: false },
  action
) {
  switch (action.type) {
    case SET_MOBILE_NAV_VISIBILITY:
      return { ...state, mobileNavVisibility: action.visibility };
    default:
      return state;
  }
}
