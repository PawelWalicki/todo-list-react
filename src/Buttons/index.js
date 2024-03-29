import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone,setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    className="buttons__button"
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;