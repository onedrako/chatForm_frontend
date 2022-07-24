import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100vw;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 15px;
  background: #f074dc;
  justify-content: center;
  align-items: center;

  & h2{
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
  }

  & img{
    height: 50px;
  }

  & div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    & img{
      height: 15px;
    }

    & p{
    font-size: 1.5rem;
    text-align: center;
    }
  }
`
