import "../sponsors/sponsors.scss";
import idea from "../../../resources/img/png/sponsors__idea.png";
import amara from "../../../resources/img/png/sponsors__amara.png";
import lightAI from "../../../resources/img/png/sponsors__ai.png";
import circle from "../../../resources/img/png/sponsors__circle.png";
import muzica from "../../../resources/img/png/sponsors__muzica.png";
import lightAI2 from "../../../resources/img/png/sponsors__ai2.png";
const Sponsors = () => {
	return (
		<section className="sponsors">
			<div className="wrapper">
				<div className="sponsors__title">
					<h2>Our <span>Sponsors</span></h2>
				</div>
				<div className="sponsors__text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Felis, nec donec in morbi pulvinar.
						Enim non pulvinar neque.</p>
				</div>
				<div className="sponsors-companys">
					<div className="sponsors-companys__column">
						<img src={idea} alt="ideaa" />
						<img src={amara} alt="amara" />
						<img src={lightAI} alt="LightAI" />
						<img src={circle} alt="circle" />
						<img src={muzica} alt="muzica" />
						<img src={lightAI2} alt="LightAI" />
					</div>
				</div>
			</div>
		</section>
	)

}
export default Sponsors;