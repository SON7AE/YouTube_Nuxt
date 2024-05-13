export interface Api {
    articles: Article[];
    status: string;
    totalResults: number;
}

export interface Article {
    author?: null;
    content: string;
    description: string;
    publishedAt: string;
    source: { id?: number; name?: string };
    title: string;
    url: string;
    urlToImage: string;
}
