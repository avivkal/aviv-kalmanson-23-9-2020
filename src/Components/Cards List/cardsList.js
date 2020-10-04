import React from 'react'
import Card from '../Card/card'

const cardsList = (props) => {
    return (
        <div className="row justify-content-center">
            {(Array.isArray(props.current.fiveDaysForecast) && props.current.fiveDaysForecast.length) ? props.current.fiveDaysForecast.map((currentDay, index) => {
                return <Card currentDay={currentDay}
                    today={props.today}
                    index={index}
                    unit={props.unit}
                    key={currentDay.Date} />
            }
            ) : null}
        </div>
    );
}

export default cardsList;
