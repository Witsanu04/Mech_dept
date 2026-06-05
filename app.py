from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

CSV_URL = "ใส่ลิงก์ CSV"

@app.route("/")
def index():
    df = pd.read_csv(CSV_URL)

    products = df.to_dict(orient="records")

    return render_template("index.html", products=products)

if __name__ == "__main__":
    app.run(debug=True)