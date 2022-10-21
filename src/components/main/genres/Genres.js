import "../genres/genres.scss";
import "../genres/genresMedia.scss";
import fpsPic from "../../../resources/img/png/genres__fps.png"
import multiplayerPic from "../../../resources/img/png/genres__multiplayer.png"
import openWorldPic from "../../../resources/img/png/genres__openworld.png"
const Genres = () => {
	return (
		<section className="genres">
			<div className="genres__wrapper">
				<GenresCard text="Smooth FPS" img={fpsPic} />
				<GenresCard text="Multiplayer" img={multiplayerPic} />
				<GenresCard text="Open World" img={openWorldPic} />
			</div>
		</section>
	)
}
const GenresCard = (props) => {
	return (
		<div className="genres-card">
			<div className="genres-card__wrapper">
				<div className="genres-card__title">
					<img src={props.img} alt="fps genre" />
				</div>
				<div className="genres-card__text">
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	)
}
export default Genres;