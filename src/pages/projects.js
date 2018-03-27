import React from "react"
import { PageTitle, Punctuation } from "../components/utils/PageTitle"
import ProjectsWrapper from "../components/ProjectsWrapper";
import { Paragraph, Highlight } from "../components/utils/Paragraph"
import Thumb from "../components/utils/Thumb"

const ProjectsPage = () => (  
    <div>
        <PageTitle>Projects<Punctuation>.</Punctuation></PageTitle>
        <ProjectsWrapper>
            <Paragraph>
                <Thumb name="Extraction in Ghana" link="./projects"></Thumb>
                <Thumb name="Imagine Boston 2030"></Thumb>
                <Thumb name="Town of Acton"></Thumb>
                <Thumb name="NASA Develop"></Thumb>
                <Thumb name="Earth Images"></Thumb>
            </Paragraph>
        </ProjectsWrapper>
    </div>
)

export default ProjectsPage