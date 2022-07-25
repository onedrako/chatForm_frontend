import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`

export const PreviewInfo = styled.p`
  display: flex;
  align-items: center;
  width: 75%;
  margin: 0 15px 15px auto;
  font-size: 1.5rem;
  min-height: 50px;
  background:  #f074dc;
  border-radius: 5px;
  padding: 10px;
`
export const ConfirmPreview = styled.p`
  display: flex;
  align-items: center;
  width: 75%;
  margin: 0 15px 15px auto;
  font-size: 1.5rem;
  min-height: 50px;
  background:  #f0f0f0;
  border-radius: 5px;
  padding: 10px;
`

export const CompleteInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 15px 15px auto;
  min-height: 50px;
  background:  #f074dc;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  
  & p {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 1.5rem;
  }
`
