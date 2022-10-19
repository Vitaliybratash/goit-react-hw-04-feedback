import PropTypes from 'prop-types';
export const FeedbackOptions = ({options,onLeaveFeedback})=> {
    return (
        <>
        {options.map((el) => {
          return (<button key={el} type="button" onClick={()=>onLeaveFeedback(el)}>{el}</button>)
        })}
        </>
    )
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
}