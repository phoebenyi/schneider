import pandas as pd
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_percentage_error

def run_forecast(df, model_choice):
    df = df.copy()
    df['Date'] = pd.to_datetime(df['Date'], dayfirst=True)
    df = df.groupby('Date')['Quantity'].sum().sort_index()
    df = df.asfreq('MS')

    train = df[:-3]
    test = df[-3:]

    result = {}

    if model_choice in ["arima", "auto"]:
        try:
            arima = ARIMA(train, order=(1,1,1)).fit()
            arima_pred = arima.forecast(steps=3)
            arima_aic = arima.aic
            arima_mape = mean_absolute_percentage_error(test, arima_pred)
            result['arima'] = {
                'forecast': arima.forecast(steps=6).tolist(),
                'aic': arima_aic,
                'mape': arima_mape
            }
        except Exception as e:
            result['arima'] = {'error': str(e)}

    if model_choice in ["holtwinters", "auto"]:
        try:
            hw = ExponentialSmoothing(train, trend='add', seasonal=None).fit()
            hw_pred = hw.forecast(3)
            hw_aic = getattr(hw, 'aic', float('inf'))
            hw_mape = mean_absolute_percentage_error(test, hw_pred)
            result['holtwinters'] = {
                'forecast': hw.forecast(6).tolist(),
                'aic': hw_aic,
                'mape': hw_mape
            }
        except Exception as e:
            result['holtwinters'] = {'error': str(e)}

    if model_choice == "auto":
        arima_aic = result['arima'].get('aic', float('inf'))
        hw_aic = result['holtwinters'].get('aic', float('inf'))
        best = 'arima' if arima_aic < hw_aic else 'holtwinters'
        best_model = result[best]
        return {'model': best, 'forecast': best_model['forecast'], 'mape': best_model['mape']}

    elif model_choice in result:
        selected = result[model_choice]
        return {'model': model_choice, 'forecast': selected['forecast'], 'mape': selected['mape']}

    return {'error': 'Invalid model selection'}
