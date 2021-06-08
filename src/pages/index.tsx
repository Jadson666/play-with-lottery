import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { clearTimer, setUsers, startCount } from '../action'
import { NumericInput } from '../components/NumericInput'
import { Record } from '../components/Record'
import { formatTime } from '../lib/formatTime'
import userService from '../lib/userService'
import { useSelector } from '../lib/useSelector'

const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { targetTime, currentTime, users } = useSelector((state) => state)
  const [countdown, setCountdown] = useState('')
  const handleOnChange = (e) => setCountdown(e.target.value)
  const setupCountdown = () => {
    if (countdown === '') {
      alert('How many lucky minutes do you want?')
      return
    }
    dispatch(startCount(countdown))
  }
  const isButtonDisabled = users.length <= 0

  useEffect(() => {
    userService.getUsers().then((users) => dispatch(setUsers(users)))
    return () => {
      dispatch(clearTimer())
    }
  }, [])

  useEffect(() => {
    if (!targetTime || !targetTime) return
    if (targetTime <= currentTime) {
        const user = userService.getRandomUser()
        router.push(`/result?uid=${user.id}`)
    }
  }, [currentTime])

  return (
    <Main>
      <section>
        <Head>抽獎時間</Head>
        <Row>
          <NumericInput
            type='text'
            value={countdown}
            onChange={handleOnChange}
            style={{ width: 100 }}
          />
          <span style={{ margin: '0 37px 0 15px' }}>分鐘</span>
          <Button variant='dark' onClick={setupCountdown} disabled={isButtonDisabled}>
            設定
          </Button>
        </Row>
        <Counter>{formatTime(targetTime, currentTime)}</Counter>
      </section>
      <section>
        <Head style={{ textAlign: 'center' }}>參與抽獎名單</Head>
        <UserListContain>
          <UserList>
            {users.map(({ id, name, pic }) => {
              return (
                <Record key={id} url={pic}>
                  {name}
                </Record>
              )
            })}
          </UserList>
        </UserListContain>
      </section>
    </Main>
  )
}

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`

const Counter = styled.div`
  color: #2743ce;
  font-size: 7em;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 5%;
  padding: 5% 15%;
`

const Head = styled.h2`
  font-weight: bold;
`

const UserList = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  padding: 10px 0;
`
const UserListContain = styled.div`
  overflow-y: auto;
  height: calc(80vh - 3em);
  width: 300px;
  box-shadow: 0 0 2px 0 #848484;
  border-radius: 2px;
`

export default Home
