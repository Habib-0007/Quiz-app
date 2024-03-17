import { Link } from "react-router-dom";

const QuizTypeCard = ({ imgLink, title }) => {
	var titleVal = title.toLowerCase();
	return (
			<div className="each-card">
		<Link to={`/quiz/${titleVal}`}>
				<img
					src={imgLink}
					alt={title}
				/>
				<strong>{title}</strong>
		</Link>
			</div>
	);
};

export default QuizTypeCard;
