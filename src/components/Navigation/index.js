import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import { Button, Container, Menu } from 'semantic-ui-react';



const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>  
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>


  <div>
    <Container textAlign='right'>
      {/* <Menu>
        <Menu.Item
          name='Sign In'
          active={activeItem === 'Sign In'}
          onClick={this.handleItemClick}        
        >
          Sign In
          </Menu.Item>
      </Menu> */}
      <Link to={routes.SIGN_IN}><Button primary>Sign In</Button></Link>
      <Link to={routes.LANDING}>Landing</Link>
      {/* <Link to={routes.SIGN_IN}>Sign In</Link> */}
    </Container>
  </div>
    
// export default Navigation;

export default Navigation;
