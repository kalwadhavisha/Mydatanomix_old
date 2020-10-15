const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const datanomixSchema = new Schema({
    Symbol: String,
    AssetType: String,
    Name: String,
    Description: String,
    Exchange: String,
    Currency: String,
    Country: String,
    Sector: String,
    Industry:String,
    Address:String,
    FullTimeEmployees:String,
    FiscalYearEnd:String,
    LatestQuarter:String,
    MarketCapitalization:String,
    EBITDA:String,
    PERatio:String,
    PEGRatio:String,
    BookValue:String,
    DividendPerShare:String,
    DividendYield:String,
    EPS:String,
    RevenuePerShareTTM:String,
    ProfitMargin:String,
    OperatingMarginTTM:String,
    ReturnOnAssetsTTM:String,
    ReturnOnEquityTTM:String,
    RevenueTTM:String,
    GrossProfitTTM:String,
    DilutedEPSTTM:String,
    QuarterlyEarningsGrowthYOY:String,
    QuarterlyRevenueGrowthYOY:String,
    AnalystTargetPrice:String,
    TrailingPE:String,
    ForwardPE:String,
    PriceToSalesRatioTTM:String,
    PriceToBookRatio:String,
    EVToRevenue:String,
    EVToEBITDA:String,
    Beta:String,
    52WeekHigh:String,
    52WeekLow:String,
    50DayMovingAverage:String,
    200DayMovingAverage:String,
    SharesOutstanding:String,
    SharesFloat:String,
    SharesShort:String,
    SharesShortPriorMonth:String,
    ShortRatio:String,
    ShortPercentOutstanding:String,
    ShortPercentFloat:String,
    PercentInsiders:String,
    PercentInstitutions:String,
    ForwardAnnualDividendRate:String,
    ForwardAnnualDividendYield:String,
    PayoutRatio:String,
    DividendDate:String,
    ExDividendDate:String,
    LastSplitFactor:String,
    LastSplitDate:String,
})

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/mydatanomixDB");
mongoose.connection
	.once("open", function () {
		console.log("Connection made to the database");
	})
	.on("error", function (error) {
		console.log("Connection Error", error);
	});
