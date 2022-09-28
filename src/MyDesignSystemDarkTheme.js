
import { createTheme } from "@mui/material/styles";

   
const globalTheme = createTheme({
  palette: {
   "mode": "dark"
 },
  typography: {},
  customShadows: {
   "shadows": {
     "boxShadow": "0px 3px 12px rgba(0, 0, 0, 0.12)"
   },
   "bg blur": {
     "backdropFilter": "blur(24px)",
     "WebkitBackdropFilter": "blur(24px)"
   }
 },
});

const questTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
  }
}, globalTheme);

export default questTheme;
