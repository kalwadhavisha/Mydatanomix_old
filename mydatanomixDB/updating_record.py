import pymongo, requests
from pymongo import MongoClient
import json
import time
#companyList = ["FB", "GOOGL", "TSLA", "GOOG", "NVDA", "PYPL", "NFLX", "INTC", "CMCSA", "PEP", "CSCO", "COST", "AMGN", "AVGO", "TMUS", "QCOM"]


response = requests.get("https://www.alphavantage.co/query?function=OVERVIEW&symbol=FB&apikey=TBFKVIJZT7IK5VTB")
payload = response.json()
companyOverviewData = {
"Symbol": payload['Symbol'],
"AssetType": payload['AssetType'],
"Name": payload['Name'],
"Description":  payload['Description'],
"Exchange": payload['Exchange'],
"Currency": payload['Currency'],
"Country": payload['Country'],
"Sector": payload['Sector'],
"Industry": payload['Industry'],
"Address": payload['Address'],
"FullTimeEmployees": payload['FullTimeEmployees'],
"FiscalYearEnd": payload['FiscalYearEnd'],
"LatestQuarter": payload['LatestQuarter'],
"MarketCapitalization": payload['MarketCapitalization'],
"EBITDA": payload['EBITDA'],
"PERatio": payload['PERatio'],
"PEGRatio": payload['PEGRatio'],
"BookValue": payload['BookValue'],
"DividendPerShare": payload['DividendPerShare'],
"DividendYield": payload['DividendYield'],
"EPS": payload['EPS'],
"RevenuePerShareTTM": payload['RevenuePerShareTTM'],
"ProfitMargin": payload['ProfitMargin'],
"OperatingMarginTTM": payload['OperatingMarginTTM'],
"ReturnOnAssetsTTM": payload['ReturnOnAssetsTTM'],
"ReturnOnEquityTTM": payload['ReturnOnEquityTTM'],
"RevenueTTM": payload['RevenueTTM'],
"GrossProfitTTM": payload['GrossProfitTTM'],
"DilutedEPSTTM": payload['DilutedEPSTTM'],
"QuarterlyEarningsGrowthYOY": payload['QuarterlyEarningsGrowthYOY'],
"QuarterlyRevenueGrowthYOY": payload['QuarterlyRevenueGrowthYOY'],
"AnalystTargetPrice":payload['AnalystTargetPrice'],
"TrailingPE": payload['TrailingPE'],
"ForwardPE": payload['ForwardPE'],
"PriceToSalesRatioTTM": payload['PriceToSalesRatioTTM'],
"PriceToBookRatio": payload['PriceToBookRatio'],
"EVToRevenue": payload['EVToRevenue'],
"EVToEBITDA": payload['EVToEBITDA'],
"Beta": payload['Beta'],
"52WeekHigh": payload['52WeekHigh'],
"52WeekLow": payload['52WeekLow'],
"50DayMovingAverage": payload['50DayMovingAverage'],
"200DayMovingAverage": payload['200DayMovingAverage'],
"SharesOutstanding": payload['SharesOutstanding'],
"SharesFloat": payload['SharesFloat'],
"SharesShort": payload['SharesShort'],
"SharesShortPriorMonth": payload['SharesShortPriorMonth'],
"ShortRatio": payload['ShortRatio'],
"ShortPercentOutstanding": payload['ShortPercentOutstanding'],
"ShortPercentFloat": payload['ShortPercentFloat'],
"PercentInsiders":payload['PercentInsiders'],
"PercentInstitutions": payload['PercentInstitutions'],
"ForwardAnnualDividendRate": payload['ForwardAnnualDividendRate'],
"ForwardAnnualDividendYield": payload['ForwardAnnualDividendYield'],
"PayoutRatio": payload['PayoutRatio'],
"DividendDate": payload['DividendDate'],
"ExDividendDate": payload['ExDividendDate'],
"LastSplitFactor": payload['LastSplitFactor'],
"LastSplitDate": payload['LastSplitDate']
}
#post_id = db.companyOverview.insert_one(companyOverviewData)
print(payload)


	



