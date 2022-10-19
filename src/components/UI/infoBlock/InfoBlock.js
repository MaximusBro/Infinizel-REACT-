import FutureTitle from "../futureTitle/FutureTitle";
import "../infoBlock/infoBlock.scss";
const InfoBlock = (props) => {
	return (
		<>
			<FutureTitle />
			<div className="ui-info__block-title">
				<h2>{props.title}</h2>
			</div>
			<div className="ui-info__block-text">
				<p>{props.text}</p>
			</div>
			{props.btn ? <ButtonMore /> : ""}

		</>
	)
}
const ButtonMore = () => {
	return (
		<div className="ui-info__block-btns">
			<button>Explore More</button>
		</div>
	)

}
export default InfoBlock;