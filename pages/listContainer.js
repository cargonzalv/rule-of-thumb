import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useState } from 'react';

export default function ListContainer() {
    const [listOpen, setListOpen] = useState(false);
    const [listOptions, setListOptions] = useState([
        { 
            label: 'List', selected: true
        },
        { 
            label: 'Grid', selected: false
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

    return (
        <div>
            <div className="list-header">
                <div className="list-header__left">
                    <span className="list-header__title">Previous Rulings</span>
                </div>
                <div className="list-header__right">
                    <div className="list-header__dropdown">
                        <button
                            type="button"
                            className="dd-header"
                            onClick={() => setListOpen(!listOpen)}
                        >
                            <div className="list-header__dropdown-text">{selectedItem().label}</div>
                            <div className="list-header__dropdown-icon">{listOpen
                                ? <ArrowDropUpIcon size="2x" />
                                : <ArrowDropDownIcon size="2x" />}</div>
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
                </div>
            </div>
            <div className="list-container">

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
            `}
            </style>
        </div>
    )
}