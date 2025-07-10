import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { Container } from "../components/container/Container"
import type { Book } from "../types"
import { BookCard } from "../components/book-card/BookCard"

export function BookPage(): React.ReactElement {
    const [book, setBook] = useState<Book | null>(null)
    const { isbn13 } = useParams()

    useEffect(() => {
        if (!isbn13) return

        fetchBook(isbn13)
    }, [isbn13])

    async function fetchBook(isbn13: string) {
        const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
        const data = await response.json()
        setBook(data)
    }

    if (!book) return <div>Книга не найдена</div>

    return (
        <Container>
            <BookCard 
                title={book.title}
                subtitle={book.subtitle}
                authors={book.authors}
                publisher={book.publisher}
                pages={book.pages.toString()}
                year={book.year.toString()}
                rating={book.rating.toString()}
                desc={book.desc}
                price={book.price}
                image={book.image}
            />
        </Container>
    )
}