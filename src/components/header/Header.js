import "../header/header.scss";
import logo from "../../resources/img/png/logo.png";
import shop from "../../resources/img/svg/shop.svg";
import { useState } from "react";
const Header = () => {

	const [shopCount, setCount] = useState(0);
	const addNewShopItem = () => {
		setCount(shopCount + 1);
	}
	return (
		<header className="header">
			<div className="wrapper">
				<div className="header__logo">
					<img src={logo} alt="" />
				</div>
				<nav className="header__nav">
					<ul>
						<li>
							<a href="#">Home</a></li>
						<li>
							<a href="#">About</a></li>
						<li>
							<a href="#">Team</a></li>
						<li>
							<a href="#" >Shop</a></li>
						<li>
							<a href="#">Pages</a></li>
					</ul>
				</nav>
				<div className="header-interective">
					<div className="header-interective__shop">
						<button><img src={shop} alt="shop" onClick={addNewShopItem} /></button>
						<div>
							<span>{shopCount}</span>
						</div>
					</div>
					<div className="header-interective__contact">
						<button>Contact Us</button>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;