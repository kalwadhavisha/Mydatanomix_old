const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

const apiKey = "TBFKVIJZT7IK5VTB";

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("partials/index", {
		companyName: null,
		companyTicker: null,
		companyCIK: null,
		companySector: null,
		companyIndustry: null,
		companyHQ: null,
		companyWebsite: null,
	});
	console.log("In get");
});

app.post("/", function (req, res) {
	let compName = req.body.searchBar;
	let url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${compName}&apikey=${apiKey}`;

	request(url, function (err, response, body) {
		console.log("In post");
		let payload = JSON.parse(body);
		console.log(payload);
		if (err) {
			res.render("partials/index", {
				companyName: null,
				companyTicker: null,
				companyCIK: null,
				companySector: null,
				companyIndustry: null,
				companyHQ: null,
				companyWebsite: null,
			});
		} else {
			res.render("partials/index", {
				companyName: payload.Name,
				companyTicker: payload.Symbol,
				companyCIK: null,
				companySector: payload.Sector,
				companyIndustry: payload.Industry,
				companyHQ: payload.Address,
				companyWebsite: null,
			});
		}
	});
});

app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});
