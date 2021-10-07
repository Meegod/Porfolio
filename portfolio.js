const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Meegod',
  title: 'Godfrey.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Godfrey Omeka',
  role: 'Front End Engineer',
  description:'I am a self taught frontend engineer with 2 years experience in building  and maintaining responsive website,proficiency in HTML,CSS JAVSCRIPT and REACT JS',
  // resume: 'https://docs.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/godfrey-omeka-4771881a4/',
    github: 'https://github.com/Meegod',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'godfreyomeka@gmail.com',
}

export { header, about, projects, skills, contact }
