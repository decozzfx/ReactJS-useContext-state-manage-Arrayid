import {useAppContext} from '../contexts/app-context'

export const Setting = () => {
    const [state,dispatch] = useAppContext()

    return (
        <input type='text' onChange={(e) => dispatch({type : 'updateUser', payload : {...state.user, name : e.target.value}})} placeholder='change name' value={state.user.name ?? ''}/>
    )
}
