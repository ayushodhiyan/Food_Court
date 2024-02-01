
import './App.css';

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo"
        alt="weblogo" src="https://hariomsweets.in/cdn/shop/files/34.jpg?v=1692285434"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>CART</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

const Rescard=()=>{
  return(
    <div className="res-card">
      <img className='res-logo' alt="logo" src="https://flexy-mobile.s3.amazonaws.com/photos/1697464437869Besan_Ladoo1.jpg"/>
      <h3>SitaRam-Foods</h3>
      <h4>Besan Laddu,Dessert</h4>
      <h4>5 stars</h4>
    </div>
  );
};

const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-cont">
        <Rescard/>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
