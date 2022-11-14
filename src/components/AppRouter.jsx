import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profile/Profile'
import EditProfile from '../pages/Profile/Update'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import TestPage from '../pages/TestPage'
import IndexClient from '../pages/TargetClientList/IndexClient'
import CreateClient from '../pages/TargetClientList/Create'
import UpdateClient from '../pages/TargetClientList/UpdateClient'
import SocialWorker from '../pages/SocialWorker/SocialWorker'
import CreateSocialWorker from '../pages/SocialWorker/Create'
import UpdateSocialWorker from '../pages/SocialWorker/Update'
import Reports from '../pages/Reports/Index'
import Examine from '../pages/Exams/Examine'
import Index from "../pages/Appointment/Index"
import Anouncement from '../pages/Announcement/Announcements'

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/profile/edit' component={EditProfile} />
          <ProtectedRoute exact path='/test' component={TestPage} />
          <ProtectedRoute exact path='/social-worker' component={SocialWorker} />
          <ProtectedRoute exact path='/exams' component={Examine} />
          <ProtectedRoute exact path='/appoint' component={Index} />
          <ProtectedRoute exact path='/anounce' component={Anouncement} />
          <ProtectedRoute exact path='/target-client-list' component={IndexClient} />
          <ProtectedRoute exact path='/reports' component={Reports} />
          <ProtectedRoute exact path='/forgot-password' component={ForgotPasswordPage} />
          <ProtectedRoute exact path='/reset-password' component={ResetPasswordPage} />
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  )
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth()

  const { path } = props
  const location = useLocation()

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgot-password' ||
    path === '/reset-password'
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? '/target-client-list'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: path },
      }}
    />
  )
}
