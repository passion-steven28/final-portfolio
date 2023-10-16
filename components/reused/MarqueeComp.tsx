import React from "react";
import Marquee from "react-fast-marquee";

import { FaReact } from 'react-icons/fa';
import { BsWordpress } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoTypescript, BiLogoFirebase, BiLogoVisualStudio, BiLogoPostgresql, BiLogoFigma, BiLogoTailwindCss } from 'react-icons/bi';

const App = () => (
    <Marquee autoFill pauseOnHover gradient gradientColor="black">
        <FaReact size={50} />
        <BiLogoTypescript size={50} />
        <BiLogoFirebase size={50} />
        <BsWordpress size={50} />
        <AiFillGithub size={50} />
        <BiLogoVisualStudio size={50} />
        <BiLogoPostgresql size={50} />
        <BiLogoTailwindCss size={50} />
        <BiLogoFigma size={50} />
    </Marquee>
);

export default App;