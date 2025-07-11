export function Cost(props: { price: number, count: number }): React.ReactElement {

    const costBook = props.price * props.count

    return (
        <div className="mx-3">
            <h1>{costBook}</h1>
        </div>
    )
}