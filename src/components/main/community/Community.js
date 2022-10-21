import "../community/community.scss";
import "../community/communityMedia.scss";
const Community = () => {
	return (
		<section className="community">
			<div className="community__wrapper">
				<div className="community__title">
					<h2>Join the largest gaming <span>community</span></h2>
				</div>
				<div className="community__text">
					<p>Nulla porttitor accumsan tincidunt.
						Curabitur non nulla sit amet nisl tempus</p>
					<p>lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu ada feugiat.
						Nulla quis lorem ut libero malesuada feugiat.
						Vivamus magna justo</p>
				</div>
				<div className="community__form">
					<form action="">
						<input placeholder=" Your Email Address" type="text" />
						<button type="submit">Subscribe Now</button>
					</form>
				</div>
			</div>
		</section>
	)

}
export default Community;