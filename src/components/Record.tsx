import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

const Contain = styled.div`
  display: flex;
  width: ${({ width }) => width }px;
  height: ${({ height }) => height }px;
  border-radius: 5px;
  overflow: hidden;
`

const Img = styled.img`
  width: ${({ width }) => width }px;
  height: ${({ height }) => height }px;
`

const Name = styled.div`
  width: ${({ width }) => width }px;
  height: ${({ height }) => height }px;
  line-height: ${({ height }) => height }px;
  flex-grow: 1;
  text-align: center;
  background-color: #e8e8e8;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 10px;
`

interface RecordProps {
  url: string;
  children?: ReactNode;
  width?: number;
  height?: number;
}

export const Record: FunctionComponent<RecordProps> = ({ children, url, width = 220, height = 50 }) => {
  return (
    <Contain width={width} height={height}>
      <Img width={height} height={height} src={url} alt="未取得大頭照"/>
      <Name width={width- height} height={height}>{children}</Name>
    </Contain>
  )
}
