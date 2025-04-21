# Schneider Electric Demand Forecasting Application 📈

A full-stack web application for time-series forecasting using uploaded Excel files. The system automatically selects the best model (ARIMA or Holt-Winters) based on AIC and visualizes the forecasted trends.

### ⚠️ Disclaimer: No confidential information (business, operational, or customer data) is used, shared or exposed in this repository.

> ℹ️ **Note**
>
> This project was developed as an exploration of demand forecasting as an Intern in Schneider Electric's Global Supply Chain (East Asia Pacific Japan) Department. While the column headers may resemble actual internal conventions, **the row-level data itself is entirely fictitious and was manually generated for prototyping and demonstration purposes only**.

---

## 🌍 Features

- ✅ Upload `.xlsx` Excel files for processing
- ✅ Filter by `Geography (7) Country` and `Family Code`
- ✅ Automatically selects best model (ARIMA or Holt-Winters)
- ✅ Uses AIC for model comparison and MAPE for accuracy
- ✅ Renders monthly forecast with labeled trend chart
- ✅ Provides model explanation and insight
- ✅ Responsive UI

---

## 🛠️ Tech Stack

| Layer        | Technology                 |
|--------------|----------------------------|
| Frontend     | React + Vite + Tailwind CSS|
| Backend      | FastAPI (Python)           |
| Forecasting  | statsmodels + scikit-learn |
| File Upload  | `FormData` + FastAPI       |
| Visualization| Recharts (React)           |

---

## 🧪 Getting Started

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

## 📊 Sample Workflow
<p align="center"><strong>Model Recommendation Guide</strong></p>
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
- Model Selection: Lowest AIC
- Evaluation: MAPE on last 3 months as test

## 🎨 Design & Theme
- Schneider Electric's iconic #00b140 green colour palette
- Responsive layout (Tailwind)
- Clean chart UI with Recharts

## 📦 Future Improvements
- ✅ Include more statistical models
- ✅ Advanced filtering by product & region
- ✅ Forecast export as PDF or Excel
- ✅ Trend analysis + anomaly detection
- ✅ User authentication (multi-role)
