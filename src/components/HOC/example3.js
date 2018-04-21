import React from "react";

const color = [
	"#008000",
	"#8B0000",
	"#FFEFD5",
	"#FFEFD5",
	"#000080",
	"#FF00FF",
	"#FFFF00",
	"#2F4F4F",
	"#333335",
];

const ChangePosition = Component => {
	return class extends React.Component {
		render() {
			const style = {
				top: `${Math.floor(Math.random() * 100 + 1)}%`,
				left: `${Math.floor(Math.random() * 100 + 1)}%`,
				fontSize: `${Math.floor(Math.random() * 50 + 15)}px`,
				color: color[Math.floor(Math.random() * color.length + 1) - 1],
			};
			return <Component {...this.props} style={style} />;
		}
	};
};

export default ChangePosition;
