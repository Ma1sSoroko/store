import { useEffect } from "react"
import { useState } from "react"
import { BookBookmarks } from "../components/books-card/book-bookmarks/BookBookmarks"
import { Container } from "../components/container/Container"
import { Loader } from "../components/loader/Loader"
import type { Book } from "../types"
import { Check } from "../components/check/Check"

export function Bookmarks() {
    const [books, setBooks] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchBooks()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    async function fetchBooks() {
        const response = await fetch("https://api.itbook.store/1.0/new")
        const data = await response.json()
        setBooks(data.books)
        setIsLoading(false)
    }

    return (
            <Container>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {books.map(book => (
                        <BookBookmarks
                            key={book.isbn13}
                            {...book}
                        />
                    ))}
                </div>
                <Check />
            </Container>
    )
}