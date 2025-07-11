export function Counter(): React.ReactElement {

    function handleClickIncrement() {
        console.log('increment')
    }

    function handleClickDecrement() {
        console.log('decrement')
    }

    return (
        <div className="d-flex">
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleClickIncrement}>
                Increment
            </button>
            <div className="">Count</div>
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleClickDecrement} >
                Decrement
            </button>
        </div>
    )
}