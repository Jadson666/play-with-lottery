import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import userService, { User } from '../../lib/userService'

export const ResultPage = () => {
  const router = useRouter()
  const { uid } = router.query
  const [user, setUser] = useState<User>()
  useEffect(() => {
    setUser(userService.getUserById(uid as string))
  })
  return (
    <ResultView>
      <Head>抽獎結果</Head>
      <Contain>
        <Avatar src={user?.pic}></Avatar>
        <NameBlock>{user?.name}</NameBlock>
      </Contain>
    </ResultView>
  )
}

const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ececec;
`

const Avatar = styled.img`
  width: 300px;
  height: 300px;
`

const NameBlock = styled.div`
  text-align: center;
  height: 30px;
  line-height: 30px;
  background-color: white;
`

const Head = styled.h2`
  text-align: center;
  font-weight: bold;
`

const Contain = styled.div`
  box-shadow: 0 0 2px 1px #c7c6c6;
  border-radius: 5px;
  overflow: hidden;
`

export default ResultPage
