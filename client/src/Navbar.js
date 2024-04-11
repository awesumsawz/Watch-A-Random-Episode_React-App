import { useEffect, useState } from "react";
import NavbarLinks from "./NavbarLinks";

// todo add a mobile menu

const Navbar = () => {
	const [navLinks, setNavLinks] = useState(null);
	
	useEffect(() => {
		fetch("http://localhost:8000/navlinks")
		.then(res => {
			return res.json()
		})
		.then(data=> {
			setNavLinks(data)
		})
	}, []); //The empty dependency array restricts builds to initial only

	return (
		<nav className="navbar">
			<a className="title" href="/">Randomize Series Episode</a>
			<div className="links desktop tablet">
				{navLinks && <NavbarLinks navlinks={navLinks} />}
			</div>
		</nav>
	);
}
 
export default Navbar;