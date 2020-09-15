from flask import Flask, jsonify
from flask_cors import CORS
from apscheduler.schedulers.background import BackgroundScheduler
import atexit
import requests
import json
import pickle

app = Flask(__name__)
cors = CORS(app)

def get_project_details():
    res = requests.get("https://script.google.com/macros/s/AKfycbw33V3utIboH-9H-S-dZj_zL25_CaHH4-1cyBz1IognJmONis9r/exec").json()
    details = dict()
    details['Project'] = []
    cnt = 0
    for project_details in res['projects']:
        detail = dict()
        detail['url'] = project_details['url']
        detail['mentor_name'] = project_details['mentors']
        detail['project_name'] = project_details['project']
        url = project_details['url'].replace("github.com", "api.github.com/repos")
        data = requests.get(url).json()
        print(cnt)
        cnt += 1
        detail['github_data'] = data
        details['Project'].append(detail)
    with open('out.pickle', 'wb') as f:
        pickle.dump(details, f)

sched = BackgroundScheduler(daemon=True)
sched.add_job(get_project_details,'interval',minutes=2)
sched.start()

@app.route('/project_details', methods=['GET'])
def project_details():
    with open('out.pickle', 'rb') as f:
        out = pickle.load(f)
    return jsonify(out)


if __name__ == "__main__":
    app.run(debug=True)