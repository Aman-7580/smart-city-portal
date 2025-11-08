from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # ✅ Allows React (frontend) to fetch data from Flask

@app.route("/api/analytics", methods=["GET"])
def get_analytics():
    data = {
        "totalProjects": 12,
        "completed": 7,
        "ongoing": 3,
        "investment": 45,
        "departments": [
            {"department": "IT", "budget": 3.2},
            {"department": "Transport", "budget": 2.5},
            {"department": "Urban Affairs", "budget": 1.8},
            {"department": "Tourism", "budget": 4.0},
        ],
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
