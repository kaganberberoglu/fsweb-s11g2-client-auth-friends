import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { AuthContext } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

let friendsLS = localStorage.getItem('friends');

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [friends, setFriends] = useState(friendsLS ? friendsLS : []);

  useEffect(() => {
    if (localStorage.getItem('appToken')) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, friends, setFriends }}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/friend-list" component={FriendsList} />
          <PrivateRoute path="/add-friend" component={AddFriend} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
