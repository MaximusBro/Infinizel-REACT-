
import "../era/era.scss";
import playBtn from "../../../resources/img/png/play__button.png";
import InfoBlock from "../../UI/infoBlock/InfoBlock";
import trailerMW2 from "../../../resources/videos/CallofDuty_Modern Warfare II-World GameplayRevealTrailer.mp4";
const Era = () => {

	/* const videoOptions = {
		autoplay: false,
		controls: false,
		sources: [{
			src: trailerMW2,
			type: 'video/mp4'
		}]
	} */
	return (
		<section className="era">
			<div className="wrapper">
				<div className="era__title">
					<InfoBlock
						title="The new era of cloud gaming here"
						text="Sed ut perspiciatis unde omnis iste natus error
				 sit voluptatem accusantium doloremque 
				 laudantium, totam rem aperiam,
				 eaque ipsa quae ab illo inventore
				 veritatis et quasi architecto beatae
				  vitae dicta sunt explicabo. Nemo enim
				  ipsam voluptatem quia" btn={true} />
				</div>
				<div className="era__video">
					<img src={playBtn} alt="PLAY" />
					<video className="video"
						src={trailerMW2}
						autoPlay
						muted
						controls

					></video>

				</div>
			</div>

		</section >
	)
}
export default Era;