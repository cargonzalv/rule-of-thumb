import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import { useState, useMemo, useContext } from 'react'
import { PeopleContext } from "./PeopleContext.js";

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')


export default function PersonCard(props) {
    const [activeButton, setActiveButton] = useState(0);
    const [voted, setVoted] = useState(false);
    const [people, setPeople] = useContext(PeopleContext);
    const thumbsUp = useMemo(() => getThumbsUp(), [props.person.votes.positive, props.person.votes.negative]);
    const thumbsDown = useMemo(() => getThumbsDown(), [ props.person.votes.positive, props.person.votes.negative]);

    function isPositive() {
        return props.person.votes.positive > props.person.votes.negative;
    }

    function getThumbsUp() {
        return Math.round(100 * props.person.votes.positive / (props.person.votes.positive + props.person.votes.negative));
    }

    function getThumbsDown() {
        return Math.round(100 * props.person.votes.negative / (props.person.votes.positive + props.person.votes.negative));
    }

    function vote() {
        if (voted) {
            setVoted(false);
            setActiveButton(0);
            return;
        }
        const newPeople = [...people];
        if (activeButton === 1) {
            newPeople[props.index].votes.positive++;
        }
        else if (activeButton === 2) {
            newPeople[props.index].votes.negative++;
        }
        newPeople[props.index].lastUpdated = new Date().toISOString();
        setPeople(newPeople);
        setVoted(true);
    }

    let backgroundStyle = {
            backgroundImage: `url("../img/${props.person.picture}")`
    }

    let background2Style = {
        left: '25%',
        width: '75%'
    }

    let contentStyle = {
        marginLeft: '25%'
    };

    let cornerStyle = {}

    if (props.viewType === 'Grid' || props.width < 600) {
        backgroundStyle.width = '100%';
        contentStyle.marginLeft = '30px';
        cornerStyle.top = '50%';
        background2Style.left = 0;
        background2Style.width = '100%'
    }

    return (
        <div className="person-card">
            <div className='icon-button corner' style={cornerStyle} aria-label={isPositive() ? 'thumbs up' : 'thumbs down'}>
                {isPositive() ? (<img src="img/thumbs-up.svg" alt="thumbs up" />) :
                (<img src="img/thumbs-down.svg" alt="thumbs down" />)}
            </div>
            <div className="person-card__background" style={backgroundStyle} />
            <div className="person-card__background2" style={background2Style}></div>
            <div className="person-card__content" style={contentStyle}>
                <div className="person-card__text">
                    <h2 className="person-card__title">{props.person.name}</h2>
                    <p className="person-card__desc">
                        {props.person.description}
                    </p>
                </div>
                <div className="person-card__detail">
                    <div className="person-card__last-updated">
                        {timeAgo.format(new Date(props.person.lastUpdated))} in {props.person.category}
                    </div>
                    <div className="person-card__voting">
                        {!voted ? 
                            <button className={`icon-button ${activeButton === 1 ? 'selected' : ''}`} aria-label="thumbs up" onClick={() => setActiveButton(1)}>
                                <img src="img/thumbs-up.svg" alt="thumbs up" />
                            </button> : ''}
                        {!voted ? 
                            <button className={`icon-button ${activeButton === 2 ? 'selected' : ''}`} aria-label="thumbs down" onClick={() => setActiveButton(2)}>
                                <img src="img/thumbs-down.svg" alt="thumbs down" />
                            </button> : ''}
                        <button disabled={!activeButton} className='vote-button' aria-label="Vote now" onClick={() => vote()}>
                            {voted ? 'Vote Again' : 'Vote Now'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="person-card__votes">
                <div className="icon-button" aria-label="thumbs up" style={{width: thumbsUp + '%'}}>
                    <img src="img/thumbs-up.svg" alt="thumbs up" />
                    <div>{thumbsUp}%</div>
                </div>
                <div className="icon-button" aria-label="thumbs down" style={{width: thumbsDown + '%'}}>
                    <div>{thumbsDown}%</div>
                    <img src="img/thumbs-down.svg" alt="thumbs down" />
                </div>
            </div>
            <style jsx>{`
            .person-card {
                position: relative;
                top: 1.5rem;
                left: 1rem;
                margin-bottom: 5%;
                padding-bottom: 50px;
                height: 200px;
                ${props.viewType === 'List' && props.width >= 600 ? 'flex-grow: 1' : 'flex-basis: 230px; margin: 10px'}
            }
            .icon-button.corner {
                position: absolute;
                z-index: 5;
                margin: 0;
            }
            .person-card__text {
                width: ${props.viewType === 'List' && props.width >= 600 ? '70%' : '100%'}
            }
            .person-card__title {
                height: 50px;
                width: 100%;
                font-size: 1.5rem;
                font-weight: 400;
                line-height: 1;
                color: white;
                margin: 0;
            }
            .person-card__desc {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: 300;
            }
            .person-card__content {
                display: flex;
                flex-wrap: wrap;
                margin-left: 25%;
                position: relative;
                padding: 1rem;
                color: var(--color-white);
            }
            .person-card__background {
                position: absolute;
                width: 25%;
                height: 100%;
                background-size: cover;
                background-repeat: round;
                filter: 
            }
            .person-card__background2 {
                position: absolute;
                height: 100%;
                background:
                center no-repeat linear-gradient(
                    var(--color-dark-background),
                    var(--color-dark-gray)
                );
            }
            .person-card__detail {
                width: ${props.viewType === 'List' && props.width >= 600 ? '25%' : '100%'};
                align-text: center;
            }
            .person-card__last-updated {
                display: flex;
                margin: 0;
                font-size: 0.7rem;
                font-weight: 500;
                justify-content: flex-end;
            }
            .person-card__voting {
                display: flex;
                justify-content: flex-end;
                margin-top: 10px;
                height: 50px;
            }
            button.icon-button {
                cursor: pointer;
            }
            .icon-button {
                text-align: center;
                height: 35px;
                width: 35px;
                margin: 5px;
            }
            .icon-button > img {
                width: 25px;
            }
            .person-card__voting .icon-button:active, .person-card__voting > .icon-button.selected {
                border: 3px solid white;
            }
            .vote-button {
                cursor: pointer;
                margin: 4px;
                width: 50%;
                color: var(--color-white);
                background-color: var(--color-dark-background);
                border: 1px solid var(--color-white);   
            }
            .vote-button:hover {
                background-color: var(--color-dark-gray);;
            }
            .vote-button:disabled {
                border: none;
            }
            .vote-button:disabled:hover {
                cursor: default;
                background-color: var(--color-dark-background);
            }

            .person-card__votes {
                bottom: 0;
                position: absolute;
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            
            .person-card__votes > .icon-button {
                display: flex;
                align-items: center;
                color: white;
                margin: 0;
                padding: 0 10px;
                z-index: 10;
                width: 50%;
                height: 2.75rem;
            }
            
            .person-card__votes > .icon-button > img {
                max-width: 1.25rem;
                margin: 5px;
            }
            .person-card__votes .icon-button[aria-label="thumbs up"] {
                justify-content: flex-start;
                transition: width 2s;
            }
            .person-card__votes .icon-button[aria-label="thumbs down"] {
                justify-content: flex-end;
                transition: width 2s;
            }
            @media all and (min-width: 600px) {
                .person-card {
                    height: 150px;
                }
            }
            @media all and (min-width: 1100px) {
                .person-card {
                    ${props.viewType === 'Grid' ? 'flex-basis: 500px; height: 400px;' : 'flex: 1'}
                }
                .person-card__content {
                    ${props.viewType === 'Grid' ? 'margin-top: 150px;' : ''};
                }
            }
        `}
            </style>
        </div>
    )
}