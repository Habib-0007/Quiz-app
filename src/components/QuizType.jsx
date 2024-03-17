import QuizTypeCard from "./QuizTypeCard";

const QuizType = () => {
	return (
		<section className="all-cards">
			<QuizTypeCard
				imgLink="images/icon-html.svg"
				title="HTML"
			/>
			<QuizTypeCard
				imgLink="images/icon-css.svg"
				title="CSS"
			/>
			<QuizTypeCard
				imgLink="images/icon-javascript.svg"
				title="JavaScript"
			/>
			<QuizTypeCard
				imgLink="images/icon-accessibility.svg"
				title="Accessibility"
			/>
		</section>
	);
};

export default QuizType;
