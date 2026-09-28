type Book = {
    title: string;
    author: string;
    year: number;
    isRead: boolean;
};
export declare function createBook(title: string, author: string, year: number): Book;
export declare function markAsRead(book: Book): Book;
export declare function getBookInfo(book: Book): string;
export declare function countReadBooks(books: Book[]): number;
export {};
//# sourceMappingURL=library.d.ts.map