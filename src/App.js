import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Layout from './components/Layout';
import routes from './components/Routes';
import ErrorPage from './Dashboard/ErrorPage';

console.log('Checking route', routes);
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/layout/layout" element={<Layout />} />
                    <Route path="/*" element={<ErrorPage />} />
                    {routes.map((route, index) => {
                        if (route.isAdmin === true) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    // element={route.element}
                                    element={<Layout />}
                                />
                            );
                        }
                        if (route.isManager === true) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Layout />}
                                />
                            );
                        }
                        if (route.isUser === true) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Layout />}
                                />
                            );
                        }
                        if (route.isHr === true) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Layout />}
                                />
                            );
                        }

                        return null;
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;