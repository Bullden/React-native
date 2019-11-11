import { takeEvery, call, put } from "redux-saga/effects";
import { callApi } from "../../service/api";

export function* doWeather():IterableIterator<any> {
    yield takeEvery(`@@weather/DO_WEATHER`, function*(action: any) {
        const answerApi = yield call(callApi,"GET");
        const weather = answerApi
        console.log('WEATHER',weather.data);       
        yield put({
            type:`@@weather/GET_WEATHER`,
            payload: {
                data: weather.data
            }
        })
    })
}