import './style.css'

export const ButtonPage = ({ onClick, disabled }) => {
    return (
        <button 
        className="btn-next" 
        onClick={onClick}
        disabled={disabled}
        >
        Load more films
        </button>
    )
}