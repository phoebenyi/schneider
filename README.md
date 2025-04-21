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

## 📁 Project Structure
``` bash
demand-forecasting-app/
├── backend/
│   ├── main.py                
│   ├── forecast.py            
│   ├── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── FileUpload.jsx
│   │   │   ├── ChartSection.jsx
│   │   │   ├── Insights.jsx
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
├── sample.xlsx                # Sample input file
```

## 📊 Sample Workflow
- User uploads an .xlsx file with these columns:
  - Geography (7) Country
  - Offer Referential (6.1) Family Code
  - Date
  - Quantity
- Backend parses the file, filters by selected fields, and runs ARIMA and Holt-Winters.
- Best model is chosen based on AIC.
- App displays:
  - Forecast chart for 6 months
  - Selected model
  - MAPE and interpretation

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
- ✅ Advanced filtering by product & region
- ✅ Forecast export as PDF or Excel
- ✅ Trend analysis + anomaly detection
- ✅ User authentication (multi-role)
