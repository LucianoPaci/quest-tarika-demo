/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { styled } from '@mui/material/styles';

 
const TarikaTopBar1 = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  height: `76px`,  
  width: "100%",  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const TopBar = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.05)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `26px 10px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const WorkOrders = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(38, 38, 38, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Segoe UI`,  
  fontWeight: `700`,  
  fontSize: `18px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  width: `108.17px`,  
  margin: `0px`,  
});
 
function TarikaTopBar(props) {
  return (
    <TarikaTopBar1 className={props.className} >
      <TopBar >
        <WorkOrders >
          {`Work Orders`}
            </WorkOrders>
      </TopBar>
    </TarikaTopBar1>
  );
}

export default TarikaTopBar;
