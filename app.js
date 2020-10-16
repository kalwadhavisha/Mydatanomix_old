const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const CompanyOverview = require("./models/setting-schema");
const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));

const apiKey = "TBFKVIJZT7IK5VTB";

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const dbURL =
	"mongodb+srv://MadhuHavisha:Mishi1234@cluster0.8etrz.mongodb.net/mydatanomixDB?retryWrites=true&w=majority";

mongoose
	.connect(dbURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((resultDB) =>
		app.listen(1000, function () {
			console.log("App listening on port 1000!");
		})
	)
	.catch((err) => console.log(err));

app.get("/", function (req, res) {
	res.render("index", {
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

app.get("/company-search", function (req, res) {
	/*
	const companyOverview = new CompanyOverview({
		Symbol: "PYPL",
		AssetType: "Common Stock",
		Name: "PayPal Holdings, Inc",
		Description:
			"PayPal Holdings, Inc. operates as a technology platform and digital payments company that enables digital and mobile payments on behalf of consumers and merchants worldwide. Its payment solutions include PayPal, PayPal Credit, Braintree, Venmo, Xoom, and iZettle products. The company's payments platform allows consumers to send and receive payments, withdraw funds to their bank accounts, and hold balances in their PayPal accounts in various currencies. It also offers gateway services that enable merchants to accept payments online with credit or debit cards, as well as digital wallets. PayPal Holdings, Inc. was founded in 1998 and is headquartered in San Jose, California.",
		Exchange: "NASDAQ",
		Currency: "USD",
		Country: "USA",
		Sector: "Financial Services",
		Industry: "Credit Services",
		Address: "2211 North First Street, San Jose, CA, United States, 95131",
		FullTimeEmployees: "23200",
		FiscalYearEnd: "December",
		LatestQuarter: "2020-06-30",
		MarketCapitalization: "238883880960",
		EBITDA: "3660000000",
		PERatio: "90.4908",
		PEGRatio: "2.0802",
		BookValue: "15.038",
		DividendPerShare: "None",
		DividendYield: "0",
		EPS: "2.179",
		RevenuePerShareTTM: "16.37",
		ProfitMargin: "0.1344",
		OperatingMarginTTM: "0.1516",
		ReturnOnAssetsTTM: "0.0327",
		ReturnOnEquityTTM: "0.1527",
		RevenueTTM: "19217999872",
		GrossProfitTTM: "7987000000",
		DilutedEPSTTM: "2.179",
		QuarterlyEarningsGrowthYOY: "0.87",
		QuarterlyRevenueGrowthYOY: "0.222",
		AnalystTargetPrice: "220.2",
		TrailingPE: "90.4908",
		ForwardPE: "44.0529",
		PriceToSalesRatioTTM: "12.1793",
		PriceToBookRatio: "13.1211",
		EVToRevenue: "11.8297",
		EVToEBITDA: "49.4009",
		Beta: "1.1131",
		"52WeekHigh": "212.45",
		"52WeekLow": "82.07",
		"50DayMovingAverage": "193.492",
		"200DayMovingAverage": "164.6696",
		SharesOutstanding: "1173299968",
		SharesFloat: "1170894503",
		SharesShort: "17283459",
		SharesShortPriorMonth: "14160002",
		ShortRatio: "1.9",
		ShortPercentOutstanding: "0.01",
		ShortPercentFloat: "0.0147",
		PercentInsiders: "0.127",
		PercentInstitutions: "86.617",
		ForwardAnnualDividendRate: "0",
		ForwardAnnualDividendYield: "0",
		PayoutRatio: "0",
		DividendDate: "None",
		ExDividendDate: "None",
		LastSplitFactor: "None",
		LastSplitDate: "None",
	});
	companyOverview
		.save()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
	*/
	res.render("index", {
		companyName: null,
		companyTicker: null,
		companyCIK: null,
		companySector: null,
		companyIndustry: null,
		companyHQ: null,
		companyWebsite: null,
	});
	//console.log("In get");
});

app.post("/company-search", function (req, res) {
	console.log("In post");
	const compName = req.body.searchBar.toUpperCase();
	console.log(compName);
	console.log({ Symbol: compName });
	CompanyOverview.find({ Symbol: compName })
		.then((result) => {
			res.render("index", {
				companyName: result[0].Name,
				companyTicker: result[0].Symbol,
				companySector: result[0].Sector,
				companyIndustry: result[0].Industry,
				companyHQ: result[0].Address,
				companyWebsite: null,
				companyDescription: result[0].Description,
				companyTrailingPE: result[0].TrailingPE,
				companyForwardPE: result[0].ForwardPE,
			});

			/*
			console.log(result[0].Name);
			console.log(result[0].PERatio);
			console.log(result[0].BookValue);
			*/
		})
		.catch((err) => {
			console.log(err);
		});
});
