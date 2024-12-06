import styled from 'styled-components'

const ConsultationSection = styled.section`
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Consultation = () => {
  return (
    <ConsultationSection>
      <h1>Book a Consultation</h1>
      <p>Let's discuss your next project.</p>
    </ConsultationSection>
  )
}

export default Consultation
