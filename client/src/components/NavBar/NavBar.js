import React from 'react';
import ReactDOM from 'react-dom';

const NavBar = () => {

		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<ul>
							<li><a href="/">Home</a></li>
							<li>Blog
								<ul className="dropdown">
									<li><a href="/articles">All Posts</a></li>
									<li><a href="/newPost">New Blog Post</a></li>
									<li><a href="#">Dropdown Option here</a></li>
								</ul>
							</li>
							<li><a href="/about">About</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);

};


ReactDOM.render(<NavBar />, document.querySelector('navbar'));

export default NavBar;
