const Toggle = () => {
	function toggleIcon() {
		if (document.body.classList.contains("dark-theme")) {
			document.body.classList.remove("dark-theme");
		} else {
			document.body.classList.add("dark-theme");
		}
	}

	return (
		<section className="toggle">
			{!document.body.classList.contains("dark-theme") ? (
				<img
					src="/images/icon-sun-dark.svg"
					alt="icon-sun-dark"
				/>
			) : (
				<img
					src="/images/icon-sun-light.svg"
					alt="icon-sun-light"
				/>
			)}
			<div				onClick={toggleIcon}
			>
				<p></p>
			</div>
			{!document.body.classList.contains("dark-theme") ? (
				<img
					src="/images/icon-moon-dark.svg"
					alt="icon-moon-dark"
				/>
			) : (
				<img
					src="/images/icon-moon-light.svg"
					alt="icon-moon-light"
				/>
			)}
		</section>
	);
};

export default Toggle;
