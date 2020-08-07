import React, { Fragment } from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.png'
import { Route, Link } from 'react-router-dom'
// import './Navbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

// import { AuthConsumer } from './AuthContext'

// const Wrapper = styled.nav`
//   width: 100%;
//   height: 65px;
//   line-height: 65px;
//   background-color: black;
//   color: white;
//   margin-left: auto;
//   margin-right: auto;
//   max-width: 100%;
// `

// const Container = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   max-width: 1300px;
// `

// const Nav = styled.nav`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `

// const Left = styled.div`
//   flex-basis: auto;
//   align-self: flex-start !important;
// `

// const Right = styled.div`
//   flex-basis: 12%;
//   align-self: flex-end !important;
//   margin-right: 24px;

//   a {
//     color: #fff;
//     text-decoration: none;
//     cursor: pointer
//   }
// `

// const Menu = styled.ul`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding:0;
//   margin:0;
//   list-style-type: none;
// `

// const Logo = styled.span`
//   font-family: 'Poppins-ExtraBold';
//   font-weight: bold;
//   font-size: 20px;

//   a {
//     font-size: inherit;
//     font-weight: inherit;
//     font-family: inherit;
//     color: #fff;
//     text-decoration: none;
//   }
// `

// const Header = styled.div`
//   display: grid;
//   grid-template-areas: "logo nav";
//   background-color: black;
// `
// const Nav =styled.div`
//   grid-area: nav;
//   display; grid;
//   grid-template-columns: repeat(2, auto);
//   align-item:center;
//   justify-items; center
//   text-decoration: none;

  
// `

// const Toolbar =styled.div`
//   background-color: #000000;
//   color: #fff;
//   width: 100%
//   height: 56px;
//   position: fixed;
//   top: 0;
//   left: 0;
// }
// `

// const Toolbar_nav =styled.div`
//   background-color: #000000;
//   color: #fff;
// }
// `

// const Toolbar_logo =styled.div`
//   background-color: #000000;
//   color: #fff;
// }
// `

// const Toolbar_navitem =styled.div`
//   color: #fff;
//   display: flex;
// }
// `

const Toolbar =styled.div`
/* position: fixed; */
width: 100%;
background: black;
height: 75px;
top:0;
left:0;

` 

const Toolbar_nav = styled.div`
display: flex;
align-items: center;
height: 100%;
padding: 0 1rem;
`



const List = styled.div`
a {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
  padding: 0 0.5rem;
  &:hover{
    color: #ffc114;
   
  }
}
`
const Navitems = styled.div`
  margin: 1rem;
  padding: 0;
  display: flex;
  @media(max-width: 768px) {
   display:none;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const Toolbar_logo = styled.div`
    margin-left: 0.5rem;

`

const Navbar = (props) => {
  return (

    <Toolbar>
      <Toolbar_nav>
        <div>
          <DrawerToggleButton/>
        </div>
        <Toolbar_logo><Link to="/"><img src={Logo} alt="reviewagon logo" className="logo" /></Link></Toolbar_logo>
        <Spacer/>
        <div>
          <Navitems>
            <List><Link to="/">Home</Link></List>
            <List><Link to="/login">Login</Link></List>
            <List><Link to="/register">Signup</Link></List>
          </Navitems>
        </div>
      </Toolbar_nav>
    </Toolbar>
    // <header className="toolbar">
      
    //   <nav className="toolbar_nav">
    //   <div></div>
    //   <div className="toolbar_logo"><Link to="/"><img src={Logo} alt="reviewagon logo" className="logo"/></Link></div>
    //   <div className="toolbar_navitem">
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/login">Login</Link></li>
    //     </ul>
    //   </div>
    //   </nav>
    // </header>
    // <AuthConsumer>
    //   { ({ isAuth, logout }) => (
    //     <Wrapper>
    //       <Container>
    //         <Nav>
    //           <Left>
    //             <Logo><Link to="/">Reviewagon</Link></Logo>
    //           </Left>
    //           <Right>
    //             <Menu>
    //                 { 
    //                 isAuth ? 
    //                 <Fragment>
    //                   <li><Link to="/">Home</Link></li>
    //                   <li><a onClick={logout}>Log Out</a></li>
    //                 </Fragment> :
    //                 <Fragment>
    //                   <li><Link to="/login">Login</Link></li>
    //                   <li><Link to="/register">Signup</Link></li>
    //                 </Fragment>
    //               }
    //             </Menu>
    //           </Right>
    //         </Nav>  
    //       </Container>
    //     </Wrapper>
    //   )}
    // </AuthConsumer>
  )
}

export default Navbar