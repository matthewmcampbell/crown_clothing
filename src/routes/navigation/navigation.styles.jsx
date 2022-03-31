import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
  }
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  transition: all 1s; 
  transition-timing-function: cubic-bezier(0, 1, 1.0, 2);
  
  :hover {
    transform: scale(1.05);
  }
  
  @media screen and (max-width: 800px) {
      width: 50px;
      padding: 0px;
  }
  /* All fade in related styling */
  -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 4s; /* Firefox < 16 */
      -ms-animation: fadein 4s; /* Internet Explorer */
      -o-animation: fadein 4s; /* Opera < 12.1 */
          animation: fadein 4s;

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
      width: 80%;
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  transition: all 1s;
  transition-timing-function: cubic-bezier(0, 1, 1.0, 2);

  :hover {
    transform: scale(1.05);
  }
`