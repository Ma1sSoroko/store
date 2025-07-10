import { ListOfBooks } from "../components/list-of-books/ListOfBooks"

export function AllBooksPage(): React.ReactElement {
    return (
        <>
            <div>
                <ListOfBooks title="title" subtitle="subtitle" isbn13={123} price="123" image="image" url="url" />
            </div>
        </>
    )
}