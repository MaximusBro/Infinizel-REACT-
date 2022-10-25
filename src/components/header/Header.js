import "../header/header.scss";
import "../header/headerMedia.scss";
import logo from "../../resources/img/png/logo.png";
import shop from "../../resources/img/svg/shop.svg";
import { useState } from "react";
import BurgerBtn from "../UI/burgerBtn/BurgerBtn";
import { Link } from "react-router-dom";
const Header = ({ setActive }) => {

	const [shopCount, setCount] = useState(0);
	const addNewShopItem = () => {
		setCount(shopCount + 1);
	}
	const [activeState, setActiveState] = useState(false)
	const changeActiveState = () => {
		setActiveState(!activeState);
	}
	return (
		<header className="header">
			<div className="wrapper">
				<BurgerBtn onClick={changeActiveState} />
				<div className="header__logo">
					<img src={logo} alt="" />
				</div>
				<nav className="header__nav">

					<ul className={`sidebar ${activeState ? 'active' : ''}`}>
						<li>
							<Link to="/">Home</Link></li>
						<li>
							<Link to="/about">About</Link></li>
						<li>
							<Link to="/team">Team</Link></li>
						<li>
							<Link to="/shop" >Shop</Link></li>
						<li>
							<Link href="/pages">Pages</Link></li>
						<div className="header-interective">
							<div className="header-interective__shop">
								<button><img src={shop} alt="shop" onClick={addNewShopItem} /></button>
								<div>
									<span>{shopCount}</span>
								</div>
							</div>
							<div className="header-interective__contact">
								<button onClick={() => setActive(true)}> Contact Us</button>
							</div>
						</div>
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
						<button onClick={() => setActive(true)}>Contact Us</button>
					</div>
				</div>
			</div>

		</header >
	)
}
export default Header;