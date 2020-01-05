
export interface PostsResponse {
  uid: number;
  id: number;
  title: string;
  body: string;
}

export class Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  constructor(value: PostsResponse) {
    this.userId = value.uid;
    this.id = value.id;
    this.title = value.title;
    this.body = value.body;
  }
}
