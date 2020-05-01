# Penn State Dining Predictions
This project is deployed on http://dining-predictions.herokuapp.com/
## How to get started with this project
Pre-requisites - pip, npm, Heroku. 

### Setting up Flask. 
1. Clone this repo
2. Download PyCharm as an IDE - you can get an Ultimate version for students. 
3. Open this project in PyCharm. 
4. Run: `pip install -r requirements.txt` on terminal.
5. Hit run on PyCharm - Your backend server should be ready to use on localhost:5000! 
6. Using the built templates, you can see the client side on the 5000 port as well!

### Setting up Vue
#### For dev mode:
1. Navigate to the frontend directory, Execute `npm install` on a Terminal. 
2. Execute, `npm run serve`. - Your client side server is ready to use on: localhost:8080 (copy & paste into browser) and you should see the website running in dev mode with the form page as the main page.

#### For production mode:
1. run `npm run build` in the frontend directory and copy/replace all the files and folders in the frontend directory to the root directory of the project. This will be your new build - ready to be deployed with your flask server!

### Heroku Deployment
1. Procfile, requirements.txt, Pipfile are required for heroku production. Please read more about how to deploy to Heroku on https://github.com/gtalarico/flask-vuejs-template 
2. Please set up your account on https://signup.heroku.com/ 
3. Add and Commit all your changes to git and then execute `git push heroku` for Heroku deployment. 


### Machine Learning Model
1. `1.model` is the model  file we've generated and are using to get predictions. 
2. `1.model` is a result of an XGBoost model that was trained on the data found in `supervised_learning` directory of this project. 
To learn more about XGBoost - visit https://xgboost.readthedocs.io/en/latest/. We've used the sklearn API for XGBoost in this project. 
3. The model is built in Test.ipynb in the same directory.
4. Descriptions of data files used: 
- `processed_buffet.csv:` Data from the buffet area of Pollock Commons
- `mix.csv`: Data from The Mix at Pollock Commons
- `edge.csv`: Data from the Edge at Pollock Commons
- `merged_data.csv`: processed data for the model to use. 

##### For any more information or access to this repo, please raise an issue on GitHub and I will respond promptly. 
