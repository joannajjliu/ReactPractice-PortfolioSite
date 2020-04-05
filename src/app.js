import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/portfolio/:id" component={PortfolioWorkPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>  
);

const NotFoundPage = () => (
    <div>
        <h1>Not Found</h1>
        <p>Your search is not found 404!</p>
    </div>
);

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
);

const HomePage = () => (
    <div>
        <h1>Welcome</h1>
        <p>This is my site. Take a look around!</p>
    </div>
);

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>Check out the following things I've done:</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
    </div>
);

const PortfolioWorkPage = (props) => (
    <div>
        <h1>A Thing I've Done</h1>
        <p>This page is for the idem with id of {props.match.params.id}</p>
    </div>
);

const ContactPage = () => (
    <div>
        <h1>Conact Me</h1>
        <p>You can reach me at test@gmail.com</p>
    </div>
);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
