import "../customize/customize.scss";
import InfoBlock from "../../UI/infoBlock/InfoBlock";
import custimizeBcg from "../../../resources/img/png/customize__bcg.png"
import customizeImg1 from "../../../resources/img/png/customize__slide1.png";
import customizeImg2 from "../../../resources/img/png/customize__slide2.png";
import customizeImg3 from "../../../resources/img/png/customize__slide3.png";
const Customize = () => {
	return (
		<section className="customize">
			<div className="customize__bcg">
				<img src={custimizeBcg} alt="" />
			</div>
			<div className="wrapper">
				<div className="customize__info">
					<InfoBlock title="Customize your Own Character"
						text="Sed ut perspiciatis unde 
				omnis iste natus error sit voluptatem
				accusantium doloremque laudantium,
				totam rem aperiam, eaque ipsa quae ab illo
				inventore veritatis et quasi architecto beatae."
						btn={true}
					/>
					<div className="customize__column">

						<img src={customizeImg1} alt="" />
						<img src={customizeImg2} alt="" />
						<img src={customizeImg3} alt="" />
					</div>
				</div>
			</div>
		</section>
	)

}
export default Customize