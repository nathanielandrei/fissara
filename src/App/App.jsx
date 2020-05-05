import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Jumbotron, Container, Row, Col} from 'react-bootstrap'
import { PrivateRoute } from '../components/PrivateRoute';
import { HomePage } from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';
import { NavigationBar } from '../components/NavBar';
import style from './App.module.css';

const App = () => {
    return (
        <Router>
            <NavigationBar></NavigationBar>
            <Jumbotron className={style.jumbotron}>
                <Container>
                    <Row className="justify-content-md-center">
                        
                            <Col></Col>
                            <Col lg={4}>
                                <PrivateRoute exact path="/home" component={HomePage} />
                                <Route path="/" component={LoginPage} />
                                <Route path="/login" component={LoginPage} />
                            </Col>
                            <Col></Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Router>
    );
}

export { App }; 