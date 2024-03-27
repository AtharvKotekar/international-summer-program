import React from 'react'
import './Blog.css'

const CurriculumComponents = () => {
  return (
    <>
      <div className='container'>
        <p>Yale Young Global Scholars emphasises an open, exploratory, and collaborative approach to learning. Our program is designed to allow students to experience learning in a variety of different university contexts, from large lectures to small seminars, and even the spontaneous learning that happens outside the classroom in conversations with one another.</p>
        <br />
        <li>With no grades or course credit, YYGS encourages students to approach all aspects of the program creatively with the understanding that they set their own limits. Students receive an electronic certificate of completion at the end of the session.</li>
        <br />
        <li>The diverse and inclusive community at YYGS enhances learning by inviting students to analyse issues from multiple perspectives. Living and learning alongside peers from around the world allows students to broaden their own world views by learning about countries and cultures they have never encountered before.</li>
        <br />
        <li>Explore Yale by living on campus and taking advantage of opportunities that the Yale community offers.</li>
      </div>

      <div className='container'>
        <p>The curriculum ties together all YYGS sessions and is the foundation of the academic program. Students work with a different group of peers and learning contexts, which allows for a wide range of peer-to-peer interaction. These learning contexts include:</p>
        <br />
        <br />
        <table>
          <tr>
            <td>Breakout Discussion</td>
            <td>Dig deeper into lecture content by sharing knowledge, posing questions, and brainstorming real-world implications with a small group of peers.</td>
          </tr>
          <br />
          <tr>
            <td>Capstone Project</td>
            <td>Brainstorm and explore a collaborative project under the mentorship of YYGS staff.</td>
          </tr>
          <br />
          <tr>
            <td>Family Time</td>
            <td>Develop strong bonds with peers from around the world through identity reflection, courageous conversations, active listening, and fun social activities.</td>
          </tr>
          <br />
          <tr>
            <td>Lectures</td>
            <td>Dig deeper into lecture content by sharing knowledge, posing questions, and brainstorming real-world implications with a small group of peers.</td>
          </tr>
          <br />
          <tr>
            <td>Seminars</td>
            <td>Pursue your passion or find a new one through the 1000+ unique and exciting seminars offered each summer.</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default CurriculumComponents