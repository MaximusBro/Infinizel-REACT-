import "../burgerBtn/burgerBtn.scss";
const BurgerBtn = ({ onClick }) => {
	return (
		<div className="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label className="menu__btn" htmlFor="menu__toggle" onClick={onClick}>
				<span></span>
			</label>
		</div>
	)
}

export default BurgerBtn;