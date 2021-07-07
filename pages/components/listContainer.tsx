import { useContext, useState } from 'react';
import PersonCard from './personCard';
import PeopleContext from "../../utils/PeopleContext";
import useWindowDimensions from '../../utils/useWindowDimensions';

export default function ListContainer() {
    const { height, width } = useWindowDimensions();
    const [people, setPeople] = useContext(PeopleContext);

    const [listOpen, setListOpen] = useState(false);
    const [listOptions, setListOptions] = useState([
        {
            label: 'List',
            selected: true
        },
        {
            label: 'Grid',
            selected: false
        }
    ])

    function selectItem(index) {
        const newListOptions = [...listOptions];
        newListOptions.forEach((lo) => lo.selected = false);
        newListOptions[index].selected = true;
        setListOptions(newListOptions);
        setListOpen(false);
    }

    function selectedItem() {
        return listOptions.find((lo) => lo.selected);
    }

    const listContainerStyle: any = {
        flexFlow: 'column wrap',
        overflowY: 'unset'
    }

    if (selectedItem().label === 'Grid' && width >= 600) {
        listContainerStyle.flexFlow = 'row wrap';
    }
    else if (width < 600) {
        listContainerStyle.flexFlow = '';
        listContainerStyle.width = '90vw';
        listContainerStyle.overflowX = 'auto';
        listContainerStyle.height = '300px';

    }

    return (
        <div>
            <div className="list-header">
                <div className="list-header__left">
                    <span className="list-header__title">Previous Rulings</span>
                </div>
                { width >= 600 &&
                    (<div className="list-header__right">
                        <div className="list-header__dropdown">
                            <button
                                type="button"
                                className="dd-header"
                                onClick={() => setListOpen(!listOpen)}
                            >
                                <div className="list-header__dropdown-text">{selectedItem().label}</div>
                                <div className="list-header__dropdown-icon">{listOpen
                                    ? <>&#9650;</>
                                    : <>&#9660;</>}</div>
                            </button>
                            {listOpen && (
                                <div
                                    role="list"
                                    className="dd-list"
                                >
                                    {listOptions.map((item, i) => (
                                        <button
                                            type="button"
                                            className="dd-list-item"
                                            key={item.label}
                                            onClick={() => selectItem(i)}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>)
                }
            </div>
            <div className="list-container" style={listContainerStyle} data-testid="list">
                {people?.map((item, i) => {
                    return (
                        <PersonCard key={i} person={item} viewType={selectedItem().label} index={i} width={width} data-testid={'list-' + i}></PersonCard>
                    )
                })}
            </div>
            <style jsx>{`
                .list-header {
                    bottom: 0;
                    display: flex;
                    width: 100%;
                    height: 3rem;
                    background-color: var(--color-light-background);
                }
                .list-header__left {
                    color: var(--color-dark-gray);
                    display: flex;
                    width: 47vw;
                    align-items: center;
                    justify-content: flex-start;
                }
                .list-header__title {
                    font-size: 25px;
                }
                .list-header__right {
                    color: var(--color-dark-gray);
                    display: flex;
                    width: 47vw;
                    align-items: center;
                    justify-content: flex-end;
                }
                .list-header__dropdown {
                    width: 200px;
                }
                .list-header__dropdown button {
                    display: flex;
                    line-height: 30px;
                    width: 100%;
                }
                .list-header__dropdown-text {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                }
                .list-header__dropdown-icon {
                    margin-top: 5px;
                    display: flex;
                    justify-content: flex-end;
                }
                .list-container {
                    justify-content: space-between;
                    height: 100%;
                    display: flex;
                    margin-bottom: 10px;
                    margin-right: 5%;
                }
                @media all and (min-width: 600px) {
                    .list-container {
                        justify-content: space-evenly;
                    }
                }
            `}
            </style>
        </div>
    )
} 