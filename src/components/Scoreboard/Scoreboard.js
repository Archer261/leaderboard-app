import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import '../Scoreboard/Scoreboard.css';


const Scoreboard = () => {
    //     const { loading, error, data } = useQuery(gql`
    //     query {
    //       scores {
    //         name
    //         score
    //       }
    //     }
    //   `);

    //     if (loading) return <p>Loading...</p>;
    //     if (error) return <p>Error :</p>;

    const scores = [{ name: "bob", score: 2 }, { name: "bob", score: 2 }, { name: "bob", score: 2 }];
    return (
        <div className='scoreboard__container'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map(score => (
                        <tr key={score.name}>
                            <td>{score.name}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Scoreboard;
