import flask
import pickle
import joblib
from flask import request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
from sklearn.model_selection import train_test_split
import xgboost as xgb
from sklearn.svm import SVR
from sklearn.metrics import mean_squared_error
import numpy as np
import math
from sklearn.externals import joblib

app = flask.Flask(__name__)
app.config.from_object(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/api/getPredictions', methods=['POST'])
def parse_form():


    post_data = request.get_json()
    print(type(post_data["week"]))
    pred = predict_xgb(post_data)
    response = flask.Response(pred)
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers[
        'Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, ' \
                                          'Accept, Authorization '
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
    response.headers['Access-Control-Expose-Headers'] = '*'

    return response


def predict_xgb(res):
    bst = xgb.XGBRegressor()
    bst.load_model("1.model")
    day = int(res["day"])
    meal = int(res["meal"])
    prec = float(res["prec"])
    snow = float(res["snow"])
    event = res['type']
    temp = float(res['temp'])
    year = int(res["year"])
    location = int(res["location"])
    week = int(res["week"])
    if res["semester"] == "Fall":
        semester = 1
    else:
        semester = 0
    NOAA = 0
    Football = 0
    if len(event) > 0:
        if len(event) == 1:
            if event[0] == "NOAA(Severe weather)":
                NOAA = 1
            else:
                Football = 1
        else:
            NOAA = 1
            Football = 1
    df_dict = dict()
    df_dict["Meal"] = meal
    df_dict["Date"] = year
    df_dict["Day of Week"] = day
    df_dict["Temp"] = temp
    df_dict["Percipitation Amt"] = prec
    df_dict["Snow Amount"] = snow
    df_dict["Semester"] = semester
    df_dict["Week Num"] = week
    df_dict["Football"] = Football
    df_dict["NOAA Event"] = NOAA
    df_dict["Location"] = location
    lst = [[meal, year, day, temp, prec, snow, semester, week, Football, NOAA, location]]
    df = pd.DataFrame(lst, columns=["Meal", "Date", "Day of Week", "Temp", "Percipitation Amt", "Snow Amount", "Semester", "Week Num", "Football", "NOAA Event", "Location"])

    prediction = bst.predict(df)
    print(prediction)
    return str(int(prediction[0]))


if __name__ == '__main__':
    app.run()
