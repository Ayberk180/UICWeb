import React from "react";
import { Home } from './pages/HomePage/Home';
import { Staff } from './pages/Staff/Staff';
import { Services } from './pages/Services/Services';
import { Contact } from './pages/Contact/Contact';
import { Donate } from './pages/Donate';
import { Funeral } from './pages/Services/Funeral/Funeral';
import { Marriage } from './pages/Services/Marriage/Marriage';
import { Memorial } from './pages/Services/Memorial/Memorial';
import { Studies } from './pages/Services/Studies/Studies';


export const Routes = () => {
        return(
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><link to={'/'} className="nav-link"> Home </link></li>
                            <li><link to={'/Staff'} className="nav-link"> Staff </link></li>
                            <li><link to={'/Services'} className="nav-link"> Services </link></li>
                            <li><link to={'/Contact'} className="nav-link"> Contact </link></li>
                            <li><link to={'/Donate'} className="nav-link"> Donate </link></li>
                        </ul>
                    </nav>
                    <hr />
                    <switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Staff' component={Staff} />
                        <Route exact path='/Services' component={Services} />
                        <Route exact path='/Contact' component={Contact} />
                        <Route exact path='/Donate' component={Donate} />
                        <Route exact path='/Services/Funeral' component={Funeral} />
                        <Route exact path='/Services/Marriage' component={Marriage} />
                        <Route exact path='/Services/Memorial' component={Memorial} />
                        <Route exact path='/Services/Studies' component={Studies} />
                    </switch>
                </div>
            </Router>

        );
}

export default App;