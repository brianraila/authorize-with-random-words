import React, { useEffect, useState } from 'react';
import { generateSlug } from 'random-word-slugs';
import './style.css';
import { Button } from '@mui/material';

export default function App() {
  let [pad, setPad] = useState(null);
  let [pass, setPass] = useState('');
  let [attempt, setAttempt] = useState('');

  let keyIn = async (word) => {
    if (attempt.indexOf(word) > -1 || attempt.split(' ').length > 5) {
      console.log(pass[0]);
      console.log(attempt[0]);
      console.log();
      return;
    }
    // if(!attempt) = attempt
    setAttempt(attempt + ' ' + word);
    return;
  };
  useEffect(() => {
    const password = generateSlug(5, { format: 'lower' });
    const buffer = generateSlug(4, { format: 'lower' });

    setPad(password.split(' ').concat(buffer.split(' ').sort()).sort());
    setPass(password);
  }, []);
  return (
    <div>
      <h1>They {pass.trim() === attempt.trim() ? 'match' : "don't match"}</h1>
      <p>{pass}</p>
      <p>{attempt ? attempt : ''}</p>
      <div style={{ maxWidth: '70%' }}>
        {pad ? (
          pad.map((item) => {
            return (
              <Button
                sx={{ mx: '7' }}
                variant="outlined"
                onClick={(e) => {
                  keyIn(item);
                }}
              >
                {item}
              </Button>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div>
        {pass.trim() === attempt.trim() && (
          <>
            <br />
            <Button
              variant="contained"
              onClick={(e) => alert('Paid !!!')}
              color="success"
              sx={{ minWidth: '60%' }}
            >
              CONFIRM PAYMENT
            </Button>
          </>
        )}
      </div>
      <div>
        {pad && (
          <>
            <br />
            <Button
              variant="contained"
              onClick={(e) => setAttempt('')}
              color="error"
              sx={{ minWidth: '60%' }}
            >
              Reset
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
