import styled from 'styled-components'

export const StyledFormComponent = styled.section`
  width: 100%;
  display: flex;
  justify-content: end;
  padding:15px;
  gap: 10px;

  @media (min-width: 600px) {
    max-width: 550px;
  }
`

export const StyledImg = styled.img`
  height: 50px;
  width: 45px;
  border-radius: 30%;
  border: 2px solid #c6c6c6;
`
