import './Loader.css'

export default function Loader (props) {
    return(
        <div>
            <div className ={`lds-circle-${props.loader1}`}>
                <div></div>
            </div>

            <div className ={`lds-ellipsis-${props.loader2}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}