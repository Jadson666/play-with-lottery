import faker from 'faker'

export const users = new Array(20).fill(undefined).map((v, i) => ({
  id: i,
  name: faker.name.findName(),
  pic: faker.internet.avatar()
}))
