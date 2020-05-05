import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { userService } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, loginSuccess, loginFailed, logout } from '../../redux/actions/login/index';

const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const error = useSelector(state => state.loginReducer.error);
    const loading = useSelector(state => state.loginReducer.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        // userService.logout();
        // dispatch(logout());
        const pathname = window.location.pathname;
        if (pathname === '/login') {
            userService.logout();
            dispatch(logout());
        }
    }, [window.onload]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === 'username' ? setUsername(value) : setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!(username && password)) {
            return;
        }

        dispatch(loginAction());
        userService.login(username, password)
            .then(
                user => {
                    const { from } = props.location.state || { from: { pathname: "/home" } };
                    props.history.push(from);
                    dispatch(loginSuccess(user));
                },
                error => dispatch(loginFailed(error))
            );
    }

    return (
        <Col>
            <div className="alert alert-info">
                <Container>
                    <Row>
                        <span>Username: admin</span>
                    </Row>
                    <Row>
                        <span>Password: admin</span>
                    </Row>
                </Container>
            </div>
            <h2>Login</h2>
            <form name="form" onSubmit={(e) => handleSubmit(e)}>
                <div className={'form-group' + (!username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => handleChange(e)} />
                    {submitted && !username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (!password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => handleChange(e)} />
                    {submitted && !password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" disabled={loading}>Login</button>
                    {submitted && loading &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="Loading.."/>
                    }
                </div>
                {submitted && error &&
                    <div className={'alert alert-danger'}>{error}</div>
                }
            </form>
        </Col>
    );
}

export { LoginPage }; 