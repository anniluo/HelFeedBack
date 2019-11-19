/**
 * Root reducer
 *
 * @author Huy Trinh <dinhhuyams@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {reducer as surveyReducer} from './Survey'
import {reducer as channelReducer} from './Channel'
import {reducer as categoriesReducer} from './Categories'
import {reducer as appReducer} from './App'
import {reducer as feedbackReducer} from './Feedback'

const rootReducer = () =>
	combineReducers({
		survey: surveyReducer,
		channel: channelReducer,
		categories: categoriesReducer,
		app: appReducer,
		feedback: feedbackReducer,
	})

export default rootReducer
