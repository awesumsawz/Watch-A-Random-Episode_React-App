import NavbarLinks from "./NavbarLinks";

// todo add a mobile menu

const Navbar = () => {
	return (
		<nav className="navbar">
			<a className="title" href="/">Randomize Series Episode</a>
			<div className="links desktop tablet">
				<NavbarLinks />
			</div>
		</nav>
	);
}
 
export default Navbar;