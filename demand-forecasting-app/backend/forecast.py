import pandas as pd
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_percentage_error

def forecast_best_model(df):
    df = df.copy()
    df['Date'] = pd.to_datetime(df['Date'], dayfirst=True)
    df = df.groupby('Date')['Quantity'].sum().sort_index()
    df = df.asfreq('MS')

    train = df[:-3]
    test = df[-3:]

    # ARIMA
    try:
        arima = ARIMA(train, order=(1,1,1)).fit()
        arima_pred = arima.forecast(steps=3)
        arima_aic = arima.aic
        arima_mape = mean_absolute_percentage_error(test, arima_pred)
    except:
        arima_aic, arima_mape = float('inf'), float('inf')

    # Holt-Winters
    try:
        hw = ExponentialSmoothing(train, trend='add', seasonal=None).fit()
        hw_pred = hw.forecast(3)
        hw_aic = hw.aic if hasattr(hw, 'aic') else float('inf')
        hw_mape = mean_absolute_percentage_error(test, hw_pred)
    except:
        hw_aic, hw_mape = float('inf'), float('inf')

    if arima_aic < hw_aic:
        return {
            'model': 'ARIMA',
            'forecast': arima.forecast(steps=6).tolist(),
            'mape': arima_mape
        }
    else:
        return {
            'model': 'Holt-Winters',
            'forecast': hw.forecast(6).tolist(),
            'mape': hw_mape
        }
