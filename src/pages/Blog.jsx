import styled from 'styled-components'

const BlogSection = styled.section`
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const BlogPost = styled.article`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`

const Blog = () => {
  return (
    <BlogSection>
      <h1>Latest Insights</h1>
      <p>Discover our thoughts on AI, creativity, and innovation.</p>
      <BlogGrid>
        <BlogPost>
          <h3>The Future of AI in Creative Industries</h3>
          <p>Exploring how AI is reshaping creative processes...</p>
        </BlogPost>
      </BlogGrid>
    </BlogSection>
  )
}

export default Blog
