import flask
import pickle

app = flask.Flask(__name__)


@app.route('/api/getMessage', methods=['GET'])
def hello_world():
    resp = flask.Response("Hello world!")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


# @app.route('/api/getPredictions', methods=['POST'])
# def xgb_predict():
#     pickle_in = open("filename.pkl", "rb")
#     xgb = pickle.load(pickle_in)

if __name__ == '__main__':
    app.run()
