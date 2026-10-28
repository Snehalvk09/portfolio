// All site content lives here. Edit this file to update the portfolio.
// Empty string ('') = link not added yet; the button shows as "coming soon".

export const profile = {
  name: 'Snehal Kale',
  headline: 'Computer Engineering Student | Machine Learning | Python',
  intro:
    "Hi, I'm Snehal! I am a Computer Engineering student passionate about Python, Machine Learning, and Data Science. I enjoy building practical projects and solving real-world problems using technology.",
  about:
    'I am a final-year Computer Engineering student interested in Machine Learning, Data Science, and Software Development. I have practical experience in data preprocessing, feature engineering, classification algorithms, and model evaluation.',
  email: 'snehalvkale09@gmail.com',
  phone: '9322377424',
  linkedin: 'https://linkedin.com/in/snehal-kale-834572344',
  github: '', // TODO: add your GitHub profile URL, e.g. https://github.com/your-username
  resume: '/Snehal_Kale_Resume.pdf',
}

export const navLinks = [
  ['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Internship', '#internship'],
  ['Projects', '#projects'], ['Education', '#education'], ['Certifications', '#certifications'], ['Contact', '#contact'],
]

export const skills = [
  { group: 'Programming', items: ['Python', 'Java', 'C++'] },
  { group: 'Machine Learning', items: ['Supervised Learning', 'Classification', 'Feature Engineering', 'Data Preprocessing', 'Model Evaluation'] },
  { group: 'Libraries', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB'] },
  { group: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'Data Structures', items: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Sorting'] },
  { group: 'Tools', items: ['Git', 'VS Code', 'Jupyter Notebook'] },
]

export const internship = {
  role: 'Machine Learning Intern',
  company: 'R3 Systems India Pvt. Ltd.',
  duration: '45 days, on-site',
  points: [
    'Developed an Employee Attrition Detection System using Python and classification algorithms.',
    'Performed data cleaning, preprocessing, encoding, and feature engineering.',
    'Evaluated machine learning models.',
    'Achieved 87% prediction accuracy.',
  ],
}

export const projects = [
  {
    title: 'Employee Attrition Detection System',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    description: 'Used Logistic Regression and Random Forest to predict employee attrition. Achieved 87% prediction accuracy.',
    github: '', // TODO: repository URL
    demo: '', // TODO: live demo URL
  },
  {
    title: 'College Event Management System',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    description: 'A web-based event registration platform with an admin dashboard.',
    github: '',
    demo: '',
  },
  {
    title: 'Sponsorship Management System',
    tech: ['MySQL'],
    description: 'Designed a relational database and implemented CRUD operations.',
    github: '',
    demo: '',
  },
]

export const education = [
  { title: 'Bachelor of Engineering in Computer Engineering', year: '2023–2027', result: 'SGPA 8.33' },
  { title: 'HSC', year: '2023', result: '68%' },
  { title: 'SSC', year: '2021', result: '96.20%' },
]

export const certifications = ['Microsoft Azure AI Fundamentals', 'Infosys C++ Fundamentals', 'Infosys Python Basics']
