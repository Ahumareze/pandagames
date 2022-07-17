//styles
import './App.css';

//components
import {Switch, Route, Redirect} from 'react-router-dom';
import { Home, Auth, Dashboard, Deposit, Withdraw, HowToInvest, Wallets, Referalls, Aboutus, Faq, Terms, Profile} from './containers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { init } from './redux/actions/actions';

function App() {
  //init
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);

  const token = useSelector(state => state.token);

  let container;

  if(token){
    container = (
      <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/deposit' component={Deposit} />
          <Route path='/withdraw' component={Withdraw} />
          <Route path='/how-to-invest' component={HowToInvest} />
          <Route path='/companys-wallet' component={Wallets} />
          <Route path='/referrals' component={Referalls} />
          <Route path='/about' component={Aboutus} />
          <Route path='/faq' component={Faq}/>
          <Route path='/terms' component={Terms} />
          <Route path='/profile' component={Profile} />
          <Route path='/' component={Home} exact />
          <Redirect to='/dashboard' />
        </Switch>
    )
  }else{
    container = (
      <Switch>
        <Route path='/accounts' component={Auth} />
        <Route path='/' component={Home} exact />
        <Route path='/about' component={Aboutus} />
        <Route path='/faq' component={Faq} />
        <Route path='/terms' component={Terms} />
        <Redirect to='/' />
      </Switch>
    )
  }

  

  return (
    <div className="App">
        {container}
    </div>
  );
}

export default App;