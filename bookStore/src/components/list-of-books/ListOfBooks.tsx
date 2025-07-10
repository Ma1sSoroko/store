export function ListOfBooks(props: { title: string, subtitle: string, isbn13: number, price: string, image: string, url: string }): React.ReactElement {
    const { title, subtitle, isbn13, price, image, url } = props

    return (
        <div className="card w-25 ">
            <div>
                <img src={image} alt="#" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{subtitle}</p>
                <p className="card-text">{price}</p>
            </div>
        </div>
    )
}