import { Component } from "react"
import "../news/news.scss";
import "../news/newsMedia.scss";
import FutureTitle from "../../UI/futureTitle/FutureTitle";
import newsImg from "../../../resources/img/jpg/news__esports.jpg";
import naviImg from "../../../resources/img/jpg/news__navi.jpg";
import aesportImg from "../../../resources/img/jpg/news__aesport.jpg";
import razerImg from "../../../resources/img/jpg/news__razer.jpg";
import rxsecureImg from "../../../resources/img/jpg/news__rxsecure.jpg";
class News extends Component {
	state = {
		arrayNews: [{
			picture: "",
			text: ""
		}]
	}

	render() {
		return (
			<section className="news">
				<div className="wrapper">
					<div className="news-title">
						<FutureTitle />
						<div className="news-title__head">
							<h2>Latest News & Articles</h2>
							<button>Read More</button>
						</div>
					</div>
					<div className="news-column">
						<div className="news-column__main">
							<NewsCard picture={newsImg} data="April 2, 2021" title="Esports Group teams up with the Indianapolis Colts" />
						</div>
						<div className="news-column__row">
							<NewsCard picture={naviImg} data="April 2, 2021" title="NAVI reveals s1mple fifth anniversary" />
							<NewsCard picture={aesportImg} data="April 2, 2021" title="A1esports Shares new picture" />
							<NewsCard picture={razerImg} data="April 2, 2021" title="T1 unveil partnership with Razer" />
							<NewsCard picture={rxsecureImg} data="April 2, 2021" title="RX secures content partnership with" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
const NewsCard = (props) => {
	return (
		<div className="news-column__card">
			<div className="news-column__card-title">
				<img src={props.picture} alt="" />
			</div>
			<div className="news-column__card-subtitle">
				<p>{props.data}</p>
				<h3>{props.title}</h3>
			</div>
		</div>
	)

}
export default News;