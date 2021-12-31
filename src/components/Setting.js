import {useAppContext} from '../contexts/app-context'

export const Setting = () => {
    const context = useAppContext()

    return (
        <input type='text' onChange={(e) => context.setUser({
            ...context.user, // merch data lama agar tidak hilang
            name : e.target.value,            
        })} placeholder='change name' value={context.user.name ?? ''}/>
    )
}
