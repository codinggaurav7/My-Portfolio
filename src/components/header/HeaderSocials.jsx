import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gaurav0704/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/codinggaurav7" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://wellfound.com/u/gaurav-gupta-448" target="_blank" rel="noreferrer" ><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials