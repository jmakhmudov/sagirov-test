const Card = ({ top, value, bottom }) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="top-text">
                    {top}
                    1
                </div>
                <div className="value-text">
                    {value}
                    2000
                </div>
                <div className="bottom-text">
                    {bottom}
                    1
                </div>
            </div>
        </div>
    )
}

export default Card