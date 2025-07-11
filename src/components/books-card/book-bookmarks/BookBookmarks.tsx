import { Link } from "react-router"
import { Counter } from "../../counter/Counter"
import { FaTrash } from "react-icons/fa"
import { Cost } from "../../cost/Cost"

export function BookBookmarks(props: { title: string, authors: string, year: string, image: string, isbn13: string }) {
    const { title, image, isbn13 } = props

    return (
        <div className="card w-100 d-flex flex-row align-items-center justify-content-between mb-4">
            <Link to={`/book/${isbn13}`}>
                <div>
                    <img src={image} alt="#" className="" />
                </div>
                <div className="p-3">
                    <p className="font-weight-bold font-size-10 text-dark">{title}</p>
                </div>
            </Link>
            <div className="d-flex flex-row p-3">
                <Counter />
                <Cost price={10} count={10} />
                <button className="btn btn-outline-dark">
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}