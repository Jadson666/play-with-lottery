import { users } from '../data/mock'

export interface User {
  id: number
  name: string
  pic: string
}

class UserService {
  private users: User[]
  constructor(userArr) {
    this.users = userArr
  }

  getRandomUser() {
    if (this.users.length <= 0) return null
    return this.users[Math.floor(Math.random() * this.users.length)]
  }

  getUserById(targetId: string) {
    if (this.users.length <= 0) return null
    return this.users.find(({ id }) => id === Number(targetId))
  }

  async getUsers (): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.users), 200)
    })
  }
}

export default new UserService(users)
