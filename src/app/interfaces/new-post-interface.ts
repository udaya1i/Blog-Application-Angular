export interface NewPostInterface {
    title:string;
    permLink:string,
    category:{
        categoryId:string,
        category:string
    },
    ImagePath:string,
    excerpt:string;
    content:string,
    isFeatured:boolean,
    views:number,
    status:string,
    createdAt:Date
}
