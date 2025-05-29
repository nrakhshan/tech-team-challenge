import Confetti from 'react-confetti';
import React from 'react';
import { useState, useEffect } from 'react';

function ConfettiBtn() {
    const [showConfetti, setShowConfetti] = useState(false);
    
    return (
        <>
            <button onClick={() => {setShowConfetti(true); setTimeout(() => setShowConfetti(false), 5000);}} id = 'btn-confetti'>HYPE!!! HYPE!!! HYPE!!!</button>
            {showConfetti && (
                <Confetti 
                    width={window.innerWidth} 
                    height={window.innerHeight}
                    style={{ position: 'fixed', top:0, left: 0, zIndex:1000 }} 
                />
            )}
        </>
    )
}

export default ConfettiBtn;