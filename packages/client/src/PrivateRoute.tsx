import AuthStateStore from './stores/AuthStateStore';
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ component }) {
  if (!AuthStateStore.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return component;
}
