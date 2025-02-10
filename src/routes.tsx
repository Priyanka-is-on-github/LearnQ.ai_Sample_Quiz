import {createBrowserRouter} from 'react-router-dom'
import Error from './components/Error'
import SelectDifficulty from './components/Select-Difficulty'
import Questions from './components/Questions'
import QuizScore from './components/QuizScore'


export const router = createBrowserRouter([
    {
        path:'/',
        element: <SelectDifficulty/>,
        errorElement:<Error/>
    },
    {
        path:'/:id/question',
        element:<Questions/>,
        errorElement:<Error/>
    },
    {
        path:'/quizscore',
        element:<QuizScore/>,
        errorElement:<Error/>
    },
    
])

