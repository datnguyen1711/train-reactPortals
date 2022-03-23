import { CHANGE_THEME } from "./constants";

export const toggleTheme = (payload) => ({
  type: CHANGE_THEME,
  payload,
});
