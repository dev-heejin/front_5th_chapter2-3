import { User } from "../../user/model/user.model.ts"

export interface Post {
  id: number
  userId: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: string
    dislikes: string
  }
  views: number
  author?: User
}
