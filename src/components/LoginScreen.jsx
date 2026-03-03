import React from 'react'
import { Pill } from 'lucide-react';
import './LoadingScreen.css';
const LoadingScreen = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="pill-animation-container">
                    <div className="outer-ring"></div>
                    <div className="inner-pill-circle">
                        <Pill className="pill-icon" size={32} />
                    </div>
                </div>
                <p className="loader-text">Loading...</p>
            </div>
        </div>
    )
}

export default LoadingScreen
