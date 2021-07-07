import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import { useState, useMemo, useContext } from 'react'
import { PeopleContext } from "./PeopleContext.js";

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')


export default function PersonCard(props) {
    const [activeButton, setActiveButton] = useState(0);
    const thumbsUp = useMemo(() => getThumbsUp(), [props.person.votes.positive, props.person.votes.negative]);
    const thumbsDown = useMemo(() => getThumbsDown(), [ props.person.votes.positive, props.person.votes.negative]);
    const [voted, setVoted] = useState(false);
    const [people, setPeople] = useContext(PeopleContext);

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
        console.log(newPeople);
        setPeople(newPeople);
        setVoted(true);
    }

    return (
        <div className="person-card">
            <div className='icon-button corner' aria-label={isPositive() ? 'thumbs up' : 'thumbs down'}>
                {isPositive() ? (<img src="img/thumbs-up.svg" alt="thumbs up" />) :
                (<img src="img/thumbs-down.svg" alt="thumbs down" />)}
            </div>
            <div className="person-card__background" style={{
                backgroundImage: `url("../img/${props.person.picture}")`
            }} />
            <div className="person-card__background2"></div>
            <div className="person-card__content">
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
                top: 5.5rem;
                left: 1rem;
                overflow: hidden;
                width: 90vw;
                margin-bottom: 5%;
            }
            .icon-button.corner {
                position: absolute;
                z-index: 5;
                margin: 0;
            }
            .person-card__text {
                width: 70%;
            }
            .person-card__title {
                width: 100%;
                font-size: 3rem;
                font-weight: 400;
                line-height: 1;
                color: white;
            }
            .person-card__desc {
                overflow: hidden;
                max-height: 10.5rem;
                -webkit-box-orient: vertical;
                font-size: 1.25rem;
                font-weight: 300;
                -webkit-line-clamp: 6;
                text-overflow: ellipsis;
            }
            .person-card__content {
                display: flex;
                margin-left: 30%;
                position: relative;
                padding: 1rem;
                color: var(--color-white);
            }
            .person-card__background {
                position: absolute;
                width: 30%;
                height: 100%;
                background-size: cover;
                background-repeat: round;
                filter: 
            }
            .person-card__background2 {
                position: absolute;
                left: 30%;
                width: 70%;
                height: 100%;
                background:
                center no-repeat linear-gradient(
                    var(--color-dark-background),
                    var(--color-dark-gray)
                );
            }
            .person-card__detail {
                width: 30%;
                align-text: center;
            }
            .person-card__last-updated {
                display: flex;
                margin: 0;
                font-weight: 300;
                justify-content: flex-end;
            }
            .person-card__voting {
                display: flex;
                justify-content: flex-end;
                margin-top: 20px;
                height: 50px;
            }
            button.icon-button {
                cursor: pointer;
            }
            .icon-button {
                text-align: center;
                height: 40px;
                width: 40px;
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
        `}
            </style>
        </div>
    )
}