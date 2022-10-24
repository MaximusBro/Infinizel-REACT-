import Future from "./future/Future";
import Sponsors from "./sponsors/Sponsors";
import Features from "./features/Features";
import Era from "./era/Era";
import Customize from "./customize/Customize";
import Genres from "./genres/Genres";
import News from "./news/News";
import Community from "./community/Community";
const Main = () => {
	return (
		<main className="main">
			<Future />
			<Sponsors />
			<Features />
			<Era />
			<Customize />
			<Genres />
			<News />
			<Community />
		</main>

	)
}

export default Main;