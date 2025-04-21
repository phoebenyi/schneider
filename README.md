# Schneider Electric Demand Forecasting Application 📈

A full-stack web application for time-series forecasting that:
- Processes Excel files (.xlsx) demand data
- Automatically selects the best model (ARIMA or Holt-Winters) based on lowest AIC
- Generates forecast charts and tables with business-friendly insights

## 🔒 Disclaimer

⚠️ This is a **personal internship project** hosted publicly for educational and demonstration purposes. **No confidential Schneider Electric data (business, operational, or customer) is used, shared, or exposed.** All input samples are **synthetic** and randomly generated. The model is not intended for production use and should not be relied upon for any business decisions. ⚠️
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

## 🛠️ Technnology Stack Overview

<p align="center"><strong>Frontend</strong></p>
<p align="center">
<a href="https://vitejs.dev/"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Vite" height="50"/></a>&nbsp;&nbsp;
<a href="https://react.dev/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="60"/></a>&nbsp;&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" height="50"/></a>&nbsp;&nbsp;
<a href="https://tailwindcss.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" height="40"/></a>&nbsp;&nbsp;
<br>
<i>Vite · React · JavaScript · Tailwind CSS</i>
</p>
<br> 

<p align="center"><strong>Backend</strong></p>
<p align="center">
<a href="https://www.python.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png" alt="Python" height="50"/></a>&nbsp;&nbsp;
<a href="https://fastapi.tiangolo.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg" alt="FastAPI" width="120"/></a>&nbsp;&nbsp;
<br>
<i>Python · FastAPI</i>
</p>
<br> 

<p align="center"><strong>Forecasting & Visualisations</strong></p>
<p align="center">
<a href="https://www.statsmodels.org/stable/index.html"><img src="https://github.com/user-attachments/assets/7dfafb26-8fc7-4598-b5a9-1cacc590db57" alt="statsmodels" height="60"/></a>&nbsp;&nbsp;
<a href="https://scikit-learn.org/stable/"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit-learn" width="100"/></a>&nbsp;&nbsp;
<a href="https://react.dev/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="60"/></a>&nbsp;&nbsp;
<br>
<i>statsmodels · scikit-learn · Recharts (React)</i>
</p>
<br> 

<p align="center"><strong>Deployment, Containerization, Cloud</strong></p>
<p align="center">
<a href="https://github.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" height="60"/></a>&nbsp;&nbsp;
<a href="https://www.docker.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker" height="40"/>
</a>&nbsp;&nbsp;
<a href="https://cloud.google.com/storage/"><img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="GKE" height="60"/></a>&nbsp;&nbsp;
<a href="https://github.com/features/actions"><img src="https://github.com/user-attachments/assets/84046b86-7745-4ddd-8c36-b39b6a9ead91" alt="GitHub Actions" height="60"/></a>&nbsp;&nbsp;
</p>
<p align="center">
<i>GitHub · Docker Compose · Google Kubernetes Engine (GKE) · GitHub Actions</i>
</p>
<br> 

---

## 📦 Deployment Architecture

```text
         +-------------+       +-------------------+       +----------------------+       +-------------+
         | GitHub Repo |  -->  | GitHub Actions CI |  -->  | Docker Images (x2)  |  -->  |  Docker Hub |
         +-------------+       +-------------------+       | - schneider-frontend |       +-------------+
                                                           | - schneider-backend  |
                                                           +----------------------+
                                                                    |
                                                                    v
                                                      +-----------------------------+
                                                      | Google Kubernetes Engine    |
                                                      |  (GKE Cluster)              |
                                                      |                             |
                                                      |  +-----------------------+  |
                                                      |  | React Frontend Pod     |  |
                                                      |  | - Exposed via          |  |
                                                      |  |   LoadBalancer Service |--> http://34.87.39.153
                                                      |  +-----------------------+  |
                                                      |            |                |
                                                      |            | HTTP (internal)|
                                                      |            v                |
                                                      |  +-----------------------+  |
                                                      |  | FastAPI Backend Pod   |  |
                                                      |  | - ClusterIP Service   |  |
                                                      |  | - Forecast logic      |  |
                                                      |  | - .xlsx processing    |  |
                                                      |  +-----------------------+  |
                                                      +-----------------------------+

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

© 2025 Phoebe Neo. All rights reserved.
