import Toggle from "./Toggle";
import Welcome from "./Welcome";
import QuizType from "./QuizType";

const Home = () => {
	return (
		<section className="home">
			<Toggle />
			<section className="home-det">
				<Welcome />
				<QuizType />
			</section>
		</section>
	);
};

export default Home;
