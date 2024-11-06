
import PropTypes from 'prop-types'

function ShowDetails({dados}){
    return(
        <>
            <ul>
                <li>{dados.ticker.buy}</li>
                <li>{dados.ticker.data}</li>
                <li>{dados.ticker.high}</li>
                <li>{dados.ticker.last}</li>
                <li>{dados.ticker.lowest}</li>
                <li>{dados.ticker.open}</li>
                <li>{dados.ticker.pain}</li>
                <li>{dados.ticker.sell}</li>
                <li>{dados.ticker.vol}</li>
            </ul>
        </>
    )
}

ShowDetails.propTypes = {
    dados: PropTypes.shape({
        ticker: PropTypes.shape({
            buy: PropTypes.string.isRequired,
            data:PropTypes.number.isRequired,
            high:PropTypes.string.isRequired,
            last:PropTypes.string.isRequired,
            lowest:PropTypes.string.isRequired,
            open:PropTypes.string.isRequired,
            pain:PropTypes.string.isRequired,
            sell:PropTypes.string.isRequired,
            vol:PropTypes.string.isRequired,
        })
    })
}

export default ShowDetails;