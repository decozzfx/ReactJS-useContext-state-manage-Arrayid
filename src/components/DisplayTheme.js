import {useAppContext} from '../contexts/app-context'
export default function DisplayTheme() {
    const context = useAppContext()
    return(
        <div>
            {context.theme}
        </div>
    )
}