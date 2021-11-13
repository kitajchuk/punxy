// Select helpers for extracting punxy data units
export const selectUser = (state) => state.punxy.user;
export const selectStatus = (state) => state.punxy.status;
export const selectItems = (endpoint) => (state) => state.punxy.items[endpoint];