export class Product {
    public id: number;
    public title: string;
    public price: number;
    public rating: number;
    public desc: string;
    public categories: Array<string>;
    constructor(id: number,
        title: string,
        price: number,
        rating: number,
        desc: string,
        categories: Array<string>) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
}
