import "../team/team.scss";
import frontender from "../../../resources/img/png/team__frontender.png";
import designer from "../../../resources/img/jpg/Unknown_person.jpg";
export const Team = () => {
	return (
		<section className="team">
			<div className="wrapper">
				<div className="team-column">
					<TeamCard name="Shydlovskyi Maksym"
						job="Frontend Developer"
						picture={frontender} />
					<TeamCard name="Unknown name (Flowzai)"
						job="Designer"
						picture={designer} />
				</div>
			</div>
		</section>
	);

}
const TeamCard = (props) => {
	return (
		<div className="team-column-card">
			<div className="team-column-card__title">
				<img src={props.picture} alt="frontender" />
			</div>
			<div className="team-column-card__subtitle">
				<h2>{props.name}</h2>
				<h3>{props.job}</h3>
			</div>
		</div>
	)

}