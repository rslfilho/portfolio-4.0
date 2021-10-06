import React, { useEffect, useState } from 'react';
import { getFeaturedSkills } from '../../firebase';

const MainSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await getFeaturedSkills();
      response.forEach((doc) => {
      setSkills((prevState) => [...prevState, doc.data()])
      })
    };
    fetchSkills();
  }, [])

  return (
    <>
     {
       skills.map(({ name }, index) => <p key={`Skill ${index}`}>{ name }</p>)
     }
    </>
  )
}

export default MainSkills
