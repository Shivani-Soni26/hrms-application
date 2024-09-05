import React from "react";
import Login from "./Login";
import Layout from "./Layout";

const IndexRoute=[
    {
        path: '/login',
        path1: '/',
        element: <Login/>,
        isPrivate: true,
        text: 'Login'
    },
    {
        path: '/layout',
        path1: '/',
        element: <Layout />,
        isPrivate: true,
        text: 'Login'
    },

]
export default IndexRoute;