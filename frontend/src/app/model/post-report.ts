export class PostReport {

  id: number;
  postId: number;
  userId: number;
  description: string


  constructor(id: number, postId: number, userId: number, description: string) {
    this.id = id;
    this.postId = postId;
    this.userId = userId;
    this.description = description;
  }
}
