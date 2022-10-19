import "../future/future.scss";
import FutureTitle from "../../UI/futureTitle/FutureTitle";
import futurePic from "../../../resources/img/png/future__pic.png";
const Future = () => {
	return (
		<section className="future">
			<div className="wrapper">
				<div className="future__liks">
					<ul>
						<li>
							<a href="https://twitch.tv">TWITCH</a>
						</li>
						<li>
							<a href="https://instagram.com">INSTAGRAM</a>
						</li>
						<li>
							<a href="https://facebook.com/">FACEBOOK</a>
						</li>
					</ul>
				</div>
				<div className="future-info">
					<FutureTitle />
					<div className="future-info__title">
						<h1>Unleash the Next <span>Generation</span> of Gaming</h1>
					</div>
					<div className="future-info__text">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Felis, nec donec in morbi pulvinar.
							Enim non pulvinar neque.</p>
					</div>
					<div className="future-info__btns">
						<button>Explore More</button>
						<button>View our team</button>
					</div>
				</div>
				<div className="future__picture">
					<img src={futurePic} alt="character" />
				</div>
			</div>
		</section>
	)
}
export default Future;