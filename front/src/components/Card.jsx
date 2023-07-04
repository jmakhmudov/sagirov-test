const Card = ({ top, value, bottom }) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="top-text">
                    {top}
                </div>
                <div className="value-text">
                    {value}
                </div>
                <div className="bottom-text">
                    {bottom}
                </div>
            </div>
        </div>
    )
}

export default Card