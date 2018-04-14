import * as React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props : any) {
    super(props)

  }

  public render() {
    return (
      <div className="App">
        <header id="header" className="page-header">
          <div className="title">
            <h1>Wombat Coffee Roasters</h1>
            <div className="slogan">We love coffee</div>
          </div>
        </header>

        <nav className="menu" id="main-menu">
          <button className="menu-toggle" id="toggle-menu">
            toggle menu
          </button>
          <div className="menu-dropdown">
            <ul className="nav-menu">
              <li>
                <a href="/about.html">About</a>
              </li>
              <li>
                <a href="/shop.html">Shop</a>
              </li>
              <li>
                <a href="/menu.html">Menu</a>
              </li>
              <li>
                <a href="/brew.html">Brew</a>
              </li>
            </ul>
          </div>
        </nav>

        <aside id="hero" className="hero">
          Welcome to Wombat Coffee Roasters! We are passionate about our craft, striving
          to bring you the best hand-crafted coffee in the city.
        </aside>

        <main id="main">
          <div className="row">
            <section className="column">
              <h2 className="subtitle">Single-origin</h2>
              <p>We have built partnerships with small farms around the world to hand-select
                beans at the peak of season. We then carefully roast in
                <a href="/batch-size.html">small batches</a>
                to maximize their potential.</p>
            </section>
            <section className="column">
              <h2 className="subtitle">Blends</h2>
              <p>Our tasters have put together a selection of carefully balanced blends. Our
                famous
                <a href="/house-blend.html">house blend</a>
                is available year round.</p>
            </section>
            <section className="column">
              <h2 className="subtitle">Brewing Equipment</h2>
              <p>We offer our favorite kettles, French presses, and pour-over cones. Come to
                one of our
                <a href="/classes.html">brewing classes</a>
                to learn how to brew the perfect pour-over cup.</p>
            </section>
          </div>
        </main>
      </div>
    );
  }

  public componentDidMount() {
    this.handlers()
  }

  protected handlers() {
    const menuButton = document.getElementById('toggle-menu');
    if (!menuButton) {
      return
    }
    menuButton.addEventListener('click', (event) => {
      event.preventDefault();
      const menu = document.getElementById('main-menu');
      if (!menu) {
        return
      }
      menu
        .classList
        .toggle('is-open');
    });
  }
}

export default App;
