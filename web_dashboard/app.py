import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import io
import pandas as pd
#import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
import os
import random
from io import StringIO
from flask import Response
#from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
#from matplotlib.figure import Figure
import pickle

app = Flask(__name__)
model = pickle.load(open("model1.pkl", 'rb'))
train_store = pickle.load(open("train_store2.pkl", 'rb'))
train = pickle.load(open("train.pkl", 'rb'))
test_store = pickle.load(open("test_store.pkl", 'rb'))
#train_store = pickle.load(open("train_store.pkl", 'rb'))
test_features =['Store', 'CompetitionDistance', 'Promo', 'Promo2', 'SchoolHoliday', 'StoreType',
    'Assortment', 'StateHoliday', 'DayOfWeek', 'Month', 'Day', 'Year', 'WeekOfYear', 'Weekend', 'Weekday',
    'NumDaysToHoliday', 'NumDaysAfterHoliday',
    'PosInMonth', 'CompetitionOpen', 'PromoOpen', 'IsPromoMonth']

@app.route('/')
def home():
    return render_template('dashboard.html')
@app.route('/icons')
def icons():
    return render_template('icons.html')
@app.route('/predict')
def predict():
    return render_template('index.html')


@app.route('/onestore')
def json_one_store():
                       store_num = request.args.get('num')
                       X = test_store[test_features][test_store.Store == int(store_num)]
                       y_preds = model.predict(X)
                       data = {'y_preds': y_preds,
                               'Dates': X.index.values
                               }

                       df = pd.DataFrame(data, columns = [ 'y_preds','Dates'])
                       df['Dates'] = df['Dates'].dt.strftime('%Y/%m/%d')

                       return jsonify(dict(zip(df.Dates,df.y_preds)))


@app.route('/allstores')
def allstores():
                       X2 = test_store[test_features]
                       y_preds2 = model.predict(X2)

                       cars = {'y_preds': y_preds2,
                               'Dates': X2.index.values
                               }

                       df = pd.DataFrame(cars, columns = ['y_preds','Dates'])


                       df['Date'] = df['Dates'].values
                       df = df.groupby('Dates')['y_preds'].sum()
                       df['Date'] = df.index.strftime('%Y/%m/%d')

                       return dict(zip(df.Date,df.values))


@app.route('/trainingallstores')
def trainingallstores():
                       year = request.args.get('year')
                       X2 = train_store
                       sales=train.groupby('Date')['Sales'].mean()
                       sales = sales[sales.index.year == int(year)]
                       #decomposition = seasonal_decompose(sales, model='additive', freq=400)
                       #seasonal = decomposition.seasonal
                       #trend = decomposition.trend
                       #trend.fillna('5000')
                       #seasonal['Date'] = seasonal.index.strftime('%Y/%m/%d')
                       return dict(zip(sales.index.strftime('%Y/%m/%d'),sales.values))

@app.route('/salesbytype')
def salesbytype():
                       type = request.args.get('type')
                       X2 = train_store
                       #sales=train.groupby('Date')['Sales'].mean()
                       X2 = X2[X2.StoreType == type]
                       data = {'Sales': X2.Sales,
                               'Dates': X2['Dates']
                               }
                       df = pd.DataFrame(data, columns = ['Sales','Dates'])
                       df['Date'] = df['Dates'].values
                       df = df.groupby('Dates')['Sales'].sum()
                       print(df)
                       df['Date'] = df.index.strftime('%Y/%m/%d')
                       return dict(zip(df.Date,df.values))


if __name__ == "__main__":
    app.run(debug=True)