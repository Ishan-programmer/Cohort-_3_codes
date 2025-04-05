const express = require("express");
const app = express();

var users = [
	{
		name: "John",
		kidneys: [
			{
				healthy: false,
			},
			{
				healthy: true,
			},
		],
	},
];

app.use(express.json());

// input from query parameter (&n=))
app.get("/", function (req, res) {
	let johnKidneys = users[0].kidneys;
	let numberOfKidneys = johnKidneys.length;
	let healthyKidney = 0;
	for (let i = 0; i < numberOfKidneys; i++) {
		if (johnKidneys[i].healthy) healthyKidney++;
	}
	let unhealthyKidney = numberOfKidneys - healthyKidney;

	res.json({
		numberOfKidneys,
		healthyKidney,
		unhealthyKidney,
	});
});

app.post("/", function (req, res) {
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({
		healthy: isHealthy,
	});
	res.json({
		msg: "Done!",
	});
});

app.put("/", function (req, res) {
	for (let i = 0; i < users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true;
	}
	res.json({
		msg: "kidney replaced",
	});
});

app.delete("/", function (req, res) {
	let newKidneys = [];
	let atleastOneUnhealthyKidney = false;

	for (let i = 0; i < users[0].kidneys.length; i++) {
		if (!users[0].kidneys[i].healthy) {
			atleastOneUnhealthyKidney = true;
		}
	}
	if (atleastOneUnhealthyKidney) {
		for (let i = 0; i < users[0].kidneys.length; i++) {
			if (users[0].kidneys[i].healthy) {
				newKidneys.push({
					healthy: true,
				});
			}
		}
		users[0].kidneys = newKidneys;

		res.json({
			msg: "removed unhealthy kidney",
		});
	} else {
		res.sendStatus(411).json({
			msg: "all the kidneys are healthy",
		});
	}
});

app.listen(3000);
