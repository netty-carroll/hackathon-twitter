import './iconInput.css';

const IconInput = (props) => {
    return (
        <div className="input-icon-container">
            <input className="icon" type="text" placeholder="Search Twitter"></input>
            <div className="icon-container">
                <div className={props.className}></div>
            </div>
        </div>
    )
}
export default IconInput;