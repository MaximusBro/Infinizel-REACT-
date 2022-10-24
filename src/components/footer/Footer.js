import "../footer/footer.scss";
import "../footer/footerMedia.scss";
import logoImg from "../../resources/img/png/logo.png"
import instagramImg from "../../resources/img/png/instagram.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {

	const [activeBurger, setBurgerState] = useState(false)
	const changeBurgerState = () => {
		setBurgerState(!activeBurger);
	}
	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="hamburger-menu">
					<input id="menu__toggle-footer" type="checkbox" />
					<label className="menu__btn" htmlFor="menu__toggle-footer" onClick={changeBurgerState}>
						<span></span>
					</label>
				</div>
				<div className="footer__logo">
					<img src={logoImg} alt="" />
					<div className="footer__text">
						<p>Lorem ipsum dolor amet, consectetur adipiscing elit.
							Eget nisl nunc quam ac sed turpis volutpat.
							Cursus sed massa non .</p>
					</div>
				</div>
				<div className={`footer__nav ${activeBurger ? 'active' : ''}`}>
					<div className="footer__block">
						<FooterTitle
							title="Menu Items"
						/>
						<FooterList li1="About"
							li2="Blog"
							li3="Shop"
							li4="Contact us"
							href1="/about"
							href2="/blog"
							href3="/shop"
							href4="/contact" />
					</div>
					<div className="footer__block">
						<FooterTitle
							title="Other Pages "
						/>
						<FooterList li1="Styleguide"
							li2="Changelog"
							li3="licenses"
							li4="Team"
							href1="/styleguide"
							href2="/changelog"
							href3="/licence"
							href4="/team" />

					</div>
					<div className="footer__block">
						<FooterTitle
							title="Social Icons" />
						<FooterList
							img1={instagramImg}
							img2={instagramImg}
							img3={instagramImg}
							img4={instagramImg} />
					</div>

				</div>

			</div>
			<div className="footer__copyright">
				<p>Copyright by 2021 Flowzai</p>
			</div>
		</footer>
	)
}
const FooterTitle = (props) => {
	return (
		<div className="footer__title">
			<h3>{props.title}</h3>
		</div>
	)
}
const FooterList = (props) => {
	return (
		<div className="footer__list">
			<ul>
				<li><Link to={props.href1}>{props.li1 || <img src={props.img1} alt="" />}
				</Link>
				</li>
				<li><Link to={props.href2}>{props.li2 || <img src={props.img2} alt="" />}
				</Link>
				</li>
				<li><Link to={props.href3}>{props.li3 || <img src={props.img3} alt="" />}
				</Link>
				</li>
				<li><Link to={props.href4}>{props.li4 || <img src={props.img4} alt="" />}
				</Link>
				</li>
			</ul>
		</div >
	)
}
export default Footer;