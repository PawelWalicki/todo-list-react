import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button className="buttons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} Ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div >
    )
};

export default Buttons;