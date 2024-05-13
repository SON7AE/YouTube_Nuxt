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
    source: { id: null; name: "[Removed]" };
    title: string;
    url: string;
    urlToImage: string;
}
