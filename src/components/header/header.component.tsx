import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './header.component.css';
const { Header} = Layout;

const HeaderMain:React.FC = () => {
    return (
        <Header className="">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key='1'><NavLink to="/">Home</NavLink></Menu.Item> 
            <Menu.Item key='2'><NavLink to="/countries">Countries</NavLink></Menu.Item> 
            </Menu>
        </Header>
    )
}

export default HeaderMain;