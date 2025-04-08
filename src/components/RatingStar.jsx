import React from 'react';

const RatingStar = ({offset}) => {
    return (
        <svg
        
            viewBox="0 0 25 22"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={`linearGradient-${offset}`}>
                <stop
                    style={{ stopColor: '#FAAF00', stopOpacity: 1 }}
                    offset={offset}/>
                <stop
                    style={{ stopColor: '#D9D9D9', stopOpacity: 1 }}
                    offset={offset}/>
                </linearGradient>
                <linearGradient
                    href={`#linearGradient-${offset}`}
                    id={`linearGradient5-${offset}`}
                    gradientUnits="userSpaceOnUse"
                    x1="0.84792435"
                    y1="10.979321"
                    x2="24.152082"
                    y2="10.979321"
                    spreadMethod="pad" />
            </defs>
            <path
                d="M10.6299 1.93346C11.2824 0.212024 13.7176 0.212023 14.3701 1.93346L15.9396 6.07366C16.2342 6.85078 16.9786 7.36475 17.8097 7.36475H22.1485C24.1596 7.36475 24.9129 9.99935 23.2058 11.0625L20.2529 12.9013C19.4419 13.4064 19.1014 14.4146 19.4401 15.308L20.6874 18.5985C21.3658 20.3882 19.3847 22.0169 17.76 21.0052L13.5573 18.3879C12.91 17.9848 12.09 17.9848 11.4427 18.3879L7.23997 21.0052C5.6153 22.0169 3.63415 20.3882 4.31257 18.5985L5.55994 15.308C5.89861 14.4146 5.55808 13.4064 4.74705 12.9013L1.79422 11.0625C0.0871105 9.99935 0.840395 7.36475 2.85147 7.36475H7.19028C8.02136 7.36475 8.76583 6.85078 9.06042 6.07367L10.6299 1.93346Z"
                fill={`url(#linearGradient5-${offset})`}/>
        </svg>
    );
};

export default RatingStar;