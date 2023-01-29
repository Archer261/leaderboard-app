import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Member from '../../components/Member/Member'
import { urlFor, client } from '../../client'

import './ScoreboardWrapper.css'

export default function ScoreboardWrapper() {


    // const members = [{ name: "bob", score: 3 }, { name: "bob", score: 3 }, { name: "bob", score: 3 }, { name: "bob", score: 3 }, { name: "bob", score: 3 }, { name: "bob", score: 3 }, { name: "bob", score: 3 }, { name: "bob", score: 3 }]

    const [members, setSkills] = useState([]);

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data);
            })
    }, [])

    return (
        <div className='scoreboard-wrapper'>
            {members.sort(function (a, b) {
                return a.changeResult - b.changeResult;
            }).reverse().map((m, index) => (
                <Member key={index} placement={index} name={m.name} score={m.changeResult} isActive={m.isActive} image={(m.pic) ? urlFor(m.pic) : "https://via.placeholder.com/150"} />
            ))}
        </div>
    );
}