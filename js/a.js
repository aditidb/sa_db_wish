const tl = new TimelineMax();
// Left Divo : x = 220
// Right Divo : x = -170
tl.set(".diwaliTxt,#HAPPY,#flame,.txtPat ,#flame-1", {
	opacity: 0
});
tl.set("#agarbatti", {
	x: 300,
	y: 55,
	opacity: 0
});
tl.add("start");
tl.to(
	"#agarbatti",
	1,
	{
		x: 220,
		opacity: 1
	},
	"start"
);
tl.from(
	".pat-1",
	0.2,
	{
		opacity: 0,
		stagger: 0.1
	},
	"start"
);
tl.to("#flameAB", 0.5, {
	delay: 0.2,
	scale: 1.2,
	transformOrigin: "bottom"
});
tl.to("#flame-1", 0, {
	opacity: 1
});
tl.add("move");
tl.to(
	"#flameAB",
	0.2,
	{
		scale: 1
	},
	"move"
);
tl.to(
	"#agarbatti",
	2.5,
	{
		x: -170
	},
	"move"
);

tl.add("secDivo");
tl.from(
	".pat",
	0.4,
	{
		opacity: 0,
		stagger: 0.1
	},
	"secDivo"
);
tl.to(
	"#flameAB",
	0.5,
	{
		delay: 0.2,
		scale: 1.2,
		transformOrigin: "bottom"
	},
	"secDivo"
);
tl.to("#flame", 0, {
	opacity: 1
});
tl.add("blownOff");
tl.to(
	"#flameAB",
	0.2,
	{
		opacity: 0,
		delay: 1
	},
	"blownOff"
);
tl.to(
	"#agarbatti",
	0.5,
	{
		transformOrigin: "bottom",
		rotate: 20,
		repeat: 2,
		yoyo: true
	},
	"blownOff"
);
tl.to("#agarbatti", 2, {
	x: -500,
	rotate: 0,
	opacity: 0
});
tl.to(".txtPat ", 0.5, {
	opacity: 1,
	delay: 0.1
});
tl.to("#HAPPY ,.diwaliTxt", 1, {
	delay: 0.1,
	opacity: 1
});
