import styled from 'styled-components'

const CoursesSection = styled.section`
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const CourseCard = styled.div`
  background: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const Courses = () => {
  return (
    <CoursesSection>
      <h1>Learning Programs</h1>
      <p>Expand your knowledge with our specialized courses.</p>
      <CourseGrid>
        <CourseCard>
          <h3>AI Fundamentals</h3>
          <p>Master the basics of artificial intelligence</p>
        </CourseCard>
        <CourseCard>
          <h3>Creative Design</h3>
          <p>Learn advanced design principles</p>
        </CourseCard>
      </CourseGrid>
    </CoursesSection>
  )
}

export default Courses
