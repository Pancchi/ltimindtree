
import './App.css';
import {
  BrowserRouter,
 Route,Routes
} from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/registration/Registration';
import EventForm from './components/event/event-form/EventForm';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
   
<Routes>
  {!props.isLoggedin? <>
  <Route path="/" element={<Login />}/>
  <Route path="/register" element={<Register />}/>
  </>:
  <Route path="/" element={<EventForm />}/>
}
 
</Routes>
    </BrowserRouter>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  
  isLoggedin: state.userReducer.isLoggedin,
  
 
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
 
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);