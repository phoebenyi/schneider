from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from forecast import run_forecast
from io import BytesIO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...), model: str = Form("auto")):
    contents = await file.read()
    df = pd.read_excel(BytesIO(contents))
    df = df[["Geography (7) Country", "Offer Referential (6.1) Family Code", "Date", "Quantity"]]
    response = run_forecast(df, model)
    return response
