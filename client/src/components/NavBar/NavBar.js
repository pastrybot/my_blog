import React from 'react';
import {logo, container, header, nav} from './styles.css'
import Logo from './katie_logo.png';

const NavBar = () => {

		return (
			<div>
				<header className={header}>
					<img src={Logo} alt="logo"/>
					<nav className={nav}>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/articles">Blog</a></li>
							<li><a href="#">resume</a></li>
							<li><a href="/newPost">New Blog Post</a></li>
							<li><a href="/about">Meet The Team</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</nav>
				</header>
			</div>
		);

};




export default NavBar;
