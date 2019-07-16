import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInMobile from './pages/sign-in-mobile/sign-in-mobile.component';
import SignUpMobile from './pages/sign-up-mobile/sign-up-mobile.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';

export const App = ({checkUserSession, currentUser}) => {

  useEffect(() => checkUserSession, [checkUserSession]);

  const breakpoints = {
      desktop: 1024,
  }
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path ='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
            render={
                () => currentUser 
                ? (<Redirect to='/' />) 
                : (window.innerWidth >= breakpoints.desktop 
                    ? <SignInAndSignUpPage />
                    : <SignInMobile/>
                    )
              }/>
          <Route exact path ='/signup-mobile' component={SignUpMobile} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
