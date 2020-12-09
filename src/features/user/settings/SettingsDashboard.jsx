
import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import BasicPage from './BasicPage';
import AboutPage from './AboutPage'; 
import PhotosPage from './PhotosPage'; 
import AccountPage from './AccountPage'; 
import  {updatePassword} from '../../auth/AuthActions';
import  {updateProfile} from '../../user/userActions';


const actions = {
    updatePassword,
    updateProfile
}

const mapState = (state) => ({
    providerId: 
    state.firebase.auth.isLoaded &&
    state.firebase.auth.providerData[0].providerId,
    user: state.firebase.profile
}) 




const SettingsDashboard = ({updatePassword, providerId, user, updateProfile}) => {
    return (
        <Grid>
          <Grid.Column width={12}>
           <Switch>
           <Redirect exact from="/settings" to="/settings/basic"/>
               <Route
                  path="/settings/basic"
                  render={() => <BasicPage 
                  initialValues={user}
                  updateProfile={updateProfile}
                  />}
               />
               <Route 
                  path="/settings/about"
                  render={() => <AboutPage
                  initialValues={user}
                  updateProfile={updateProfile}
                  />}
               />
               <Route path="/settings/photos" component={PhotosPage}/>
               <Route 
                    path="/settings/account"
                    render={() => <AccountPage 
                    updatePassword={updatePassword}
                    providerId={providerId}    
                  />}
               />
           </Switch>
          </Grid.Column> 
          <Grid.Column width={4}>
               <SettingsNav/>
          </Grid.Column> 
        </Grid>
    )
}

export default connect(mapState, actions)(SettingsDashboard)
