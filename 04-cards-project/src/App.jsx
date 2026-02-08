
import {Bookmark} from 'lucide-react'
import Card from './components/cards'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    name: "Meta",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
    name: "NVIDIA",
    datePosted: "3 days ago",
    post: "Graphics Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    name: "Tesla",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
    name: "Adobe",
    datePosted: "5 days ago",
    post: "Frontend UI Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$47/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    name: "IBM",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$46/hr",
    location: "Mumbai, India"
  }
];
console.log(jobOpenings)

  return(
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        console.log(idx);;

        return <div key={idx}> 
        <Card company = {elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} brandLogo={elem.brandLogo} />
        </div>
      })}
    </div>
  )
}

export default App
