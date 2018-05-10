import { TimelineMax, Power4, Linear, Back } from "gsap";

export const timeLine = data => {
	if (!data) return null;

	const {
		projects,
		propject,
		img,
		projectTitle,
		projectSubTitle,
		projectPixels,
		text,
		btnContainer,
		pixel,
		bp,
	} = data;
	
	const mainTL = new TimelineMax().set(projects, { autoAlpha: 1 });

	const tl2 = new TimelineMax()
		.to(projectSubTitle, 0.3, { autoAlpha: 0, yPercent: "100", ease: Back.easeOut })
		.staggerFrom(bp, 0.3, { autoAlpha: 0, yPercent: "-100", ease: Back.easeOut }, 0.1)
		.from(text, 0.3, { autoAlpha: 0, x: "-100%", ease: Power4.easeInOut }, "-=0.2");

	const tl = new TimelineMax({ repeat: -1, repeatDelay: 2 })
		.set([projectTitle, projectSubTitle, pixel], { autoAlpha: 0 })
		.fromTo(
			img,
			0.4,
			{ autoAlpha: 0, xPercent: "-200" },
			{ autoAlpha: 1, xPercent: "-10", ease: Power4.easeInOut }
		)
		.add("imgIn")
		.staggerFromTo(
			pixel,
			0.3,
			{ autoAlpha: 0, x: "-=10" },
			{ autoAlpha: 1, x: "0", ease: Power4.easeInOut },
			0.02
		)
		.add("pixelIn")
		.fromTo(
			projectTitle,
			0.7,
			{ autoAlpha: 0, xPercent: "-50" },
			{ autoAlpha: 1, xPercent: "-5", ease: Power4.easeInOut },
			"-=0.1"
		)
		.fromTo(
			projectSubTitle,
			0.7,
			{ autoAlpha: 0, xPercent: "-50" },
			{ autoAlpha: 1, xPercent: "0", ease: Power4.easeInOut },
			"-=0.2"
		)
		.add("titleIn")
		.add(tl2, "+=2")
		.to(projectTitle, 2, { xPercent: "+=5", ease: Linear.easeNone }, "titleIn-=0.1")
		.to(projectSubTitle, 2, { xPercent: "+=2", ease: Linear.easeNone }, "titleIn-=0.2")
		.add("titleOut")
		.to(img, 5, { xPercent: "0", ease: Linear.easeNone }, "imgIn")
		.add("titleOut")
		.to(projectPixels, 4.1, { x: -5, ease: Linear.easeNone }, "pixelIn")
		.to(
			[projectTitle, projectSubTitle, btnContainer],
			0.5,
			{ autoAlpha: 0, xPercent: "+=10", ease: Power4.easeInOut },
			"titleOut"
		)
		.to(img, 0.4, { autoAlpha: 0, xPercent: "+=80", ease: Power4.easeInOut }, "titleOut");

};


// import { TimelineMax, Power4, Linear, Back } from "gsap";
// import { findDOMNode } from "react-dom";

// export const timeLine = data => {

// 	if (data[0] === null) return null;
// 		console.log('some', data[2])
// 		const mainTL = new TimelineMax().set(data[0], { autoAlpha: 1 });		
// 		data.forEach( el => {
// 			const project = Array.prototype.slice.call(el.project.children)

// 			const img = project[0]
// 			const projectTitle = project[1]
// 			const btnContainer = project[2]
// 			const projectSubTitle = project[3]

// 			const imgChildren = Array.prototype.slice.call(img.children)
// 			const btnCildren = Array.prototype.slice.call(btnContainer.children)
// 			const btnCildren2 = Array.prototype.slice.call(btnCildren[0].children)
// 			const projectPixels = imgChildren[1]
// 			const text = btnCildren2[3]
// 			const pixel = findDOMNode(projectPixels).getElementsByClassName("pixel")
// 			const bp = findDOMNode(btnContainer).getElementsByClassName("bp")
			
// 			const tl2 = new TimelineMax()
// 				.to(projectSubTitle, 0.3, { autoAlpha: 0, yPercent: "100", ease: Back.easeOut })
// 				.staggerFrom(bp, 0.3, { autoAlpha: 0, yPercent: "-100", ease: Back.easeOut }, 0.1)
// 				.from(text, 0.3, { autoAlpha: 0, x: "-100%", ease: Power4.easeInOut }, "-=0.2");

// 			const tl = new TimelineMax({ repeat: -1, repeatDelay: 2 })
// 				.set([projectTitle, projectSubTitle, pixel], { autoAlpha: 0 })
// 				.fromTo(
// 					img,
// 					0.4,
// 					{ autoAlpha: 0, xPercent: "-200" },
// 					{ autoAlpha: 1, xPercent: "-10", ease: Power4.easeInOut }
// 				)
// 				.add("imgIn")
// 				.staggerFromTo(
// 					pixel,
// 					0.3,
// 					{ autoAlpha: 0, x: "-=10" },
// 					{ autoAlpha: 1, x: "0", ease: Power4.easeInOut },
// 					0.02
// 				)
// 				.add("pixelIn")
// 				.fromTo(
// 					projectTitle,
// 					0.7,
// 					{ autoAlpha: 0, xPercent: "-50" },
// 					{ autoAlpha: 1, xPercent: "-5", ease: Power4.easeInOut },
// 					"-=0.1"
// 				)
// 				.fromTo(
// 					projectSubTitle,
// 					0.7,
// 					{ autoAlpha: 0, xPercent: "-50" },
// 					{ autoAlpha: 1, xPercent: "0", ease: Power4.easeInOut },
// 					"-=0.2"
// 				)
// 				.add("titleIn")
// 				.add(tl2, "+=2")
// 				.to(projectTitle, 2, { xPercent: "+=5", ease: Linear.easeNone }, "titleIn-=0.1")
// 				.to(projectSubTitle, 2, { xPercent: "+=2", ease: Linear.easeNone }, "titleIn-=0.2")
// 				.add("titleOut")
// 				.to(img, 5, { xPercent: "0", ease: Linear.easeNone }, "imgIn")
// 				.add("titleOut")
// 				.to(projectPixels, 4.1, { x: -5, ease: Linear.easeNone }, "pixelIn")
// 				.to(
// 					[projectTitle, projectSubTitle, btnContainer],
// 					0.5,
// 					{ autoAlpha: 0, xPercent: "+=10", ease: Power4.easeInOut },
// 					"titleOut"
// 				)
// 				.to(img, 0.4, { autoAlpha: 0, xPercent: "+=80", ease: Power4.easeInOut }, "titleOut")

// 				mainTL.add(tl)
// 		})
// };

