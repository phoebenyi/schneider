# Schneider Electric Demand Forecasting Application 📈

A full-stack web application for time-series forecasting that:
- Processes Excel files (.xlsx) demand data
- Automatically selects the best model (ARIMA or Holt-Winters) based on lowest AIC
- Generates forecast charts and tables with business-friendly insights

## 🔒 Disclaimer

⚠️ This is a **personal internship project** hosted publicly for educational and demonstration purposes. **No confidential Schneider Electric data (business, operational, or customer) is used, shared, or exposed.** All input samples are **synthetic**.

> ℹ️ This project was developed as part of a personal exploration during an internship with **Schneider Electric's Global Supply Chain Department**. While column headers may resemble internal conventions, **all data rows are fictitious**.

---

## 🌍 Live Demo
[http://34.87.39.153](http://34.87.39.153) — *hosted on GKE LoadBalancer*
> ⚠️ Demo is public — no authentication, so please use sample or non-sensitive data only.

---

## 🚀 Features

- 📁 Upload `.xlsx` demand data (sample format included)
- 🌐 Filter by Country (`Geography (7) Country`) and Family Code
- 🧠 Automatically select best model using AIC (ARIMA or Holt-Winters)
- 📉 Show 6-month forecast charts
- 📊 View Mean Absolute Percentage Error (MAPE)
- 📖 See model explanation & selection reasoning
- 🔀 Toggle between **table** and **chart** view
- 🧭 **Model Recommendation Guide** included

---

## 🛠️ Tech Stack

| Layer        | Technology                 |
|--------------|----------------------------|
| Frontend     | React + Vite + Tailwind CSS|
| Backend      | FastAPI (Python)           |
| Forecasting  | statsmodels + scikit-learn |
| Visualizations| Recharts (React)          |
| Deployment   | Docker + Kubernetes (GKE)  |
| Cloud        | Google Cloud Platform (GKE)|

---

## 📦 Deployment Architecture

```text
[React Frontend]
   |
   |  Docker
   v
[FastAPI Backend]  ← Forecast logic + .xlsx processing
   |
   |  ClusterIP (K8s internal)
   v
[GKE Cluster] → LoadBalancer → http://34.87.39.153
```

---

## 📊 Sample Workflow
<p align="center"><strong>Model Recommendation Guide</strong></p>
<p align="center">Choose model based on model recommendation guide and upload .xlsx file.</p>
<p align="center">If auto is selected, best model is chosen based on lowest AIC.</p>
<p align="center">
  <img width="600" alt="model-reco" src="https://github.com/user-attachments/assets/19017224-2bda-458e-bc65-06307c2540cb">
</p>

<p align="center"><strong>Forecast Chart, Selected Model, MAPE and Interpretation</strong></p>
<p align="center">
  <img width="600" alt="model-reco" src="https://github.com/user-attachments/assets/30b15a82-37b9-4cbb-b4db-125ec4f80004">
</p>

<p align="center"><strong>Forecast Table, Selected Model, MAPE and Interpretation</strong></p>
<p align="center">
  <img width="600" alt="model-reco" src="https://github.com/user-attachments/assets/9f611e54-e4bd-49ec-a43a-f2d48fddf049">
</p>


## 🧠 Forecasting Logic
- ARIMA: AutoRegressive Integrated Moving Average
- Holt-Winters: Exponential Smoothing
- Model Selection: Lowest AIC ((Akaike Information Criterion)
- Evaluation: MAPE on last 3 months as test

## 📦 Future Improvements
- ✅ Include more statistical models
- ✅ Advanced filtering by product & region
- ✅ Forecast export as PDF or Excel
- ✅ Trend analysis + anomaly detection
- ✅ Multi-role user authentication system

---
  
## ⚒️ Local Development:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/demand-forecasting-app.git
cd demand-forecasting-app
```

### 2️⃣ Backend Setup (FastAPI) 
``` bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
🔗 Backend runs at: http://localhost:8000

### 3️⃣ Frontend Setup (React + Tailwind)
``` bash
cd ../frontend
npm install
npm run dev
```
🖥️ Frontend runs at: http://localhost:5173

### 💚 Built by Phoebe Neo
Intern @ Schneider Electric Global Supply Chain
