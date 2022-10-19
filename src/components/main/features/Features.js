import "../features/features.scss";
import FutureTitle from "../../UI/futureTitle/FutureTitle";
import romb from "../../../resources/img/png/romb.png";
const FeaturesCard = (props) => {
	const text = "Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci"
	return (
		<div className="features-card">
			<div className="features-card__title">
				<img src={romb} alt="" /><span>{props.title}</span>
			</div>
			<div className="features-card__text">
				<p>{text}</p>
			</div>
		</div>
	)
}
const Features = () => {
	return (
		<section className="features">
			<div className="wrapper">
				<div className="features__title">
					<FutureTitle />
					<h2>Your one stop shop gaming needs!</h2>
					<p>Sed ut perspiciatis unde omnis iste natus error
						sit voluptatem accusantium doloremque laudantium,
						totam rem aperiam</p>
				</div>
				<div className="features__column">
					<FeaturesCard title="All New Gameplay"  ></FeaturesCard>
					<FeaturesCard title="Generation Graphics" />
					<FeaturesCard title="Lastest Game Engine" />
					<FeaturesCard title="Multiplayer on the go" />
				</div>

			</div>
		</section>
	)

}
export default Features;