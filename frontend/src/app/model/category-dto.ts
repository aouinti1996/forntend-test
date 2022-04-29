export class CategoryDto {

   id:number;
    name:string;
    description:string;
   createdDate:Date;
   numberOfArticles:number;


  constructor(id: number, name: string, description: string, createdDate: Date, numberOfArticles: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdDate = createdDate;
    this.numberOfArticles = numberOfArticles;
  }
}
