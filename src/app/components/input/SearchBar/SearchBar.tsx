"use client"
import React, { useState } from 'react';
import cn from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { CiSearch } from "react-icons/ci";
import { FiDelete } from 'react-icons/fi';

const cx = cn.bind(styles);

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    className?: string;
}

const SearchBar = ({ placeholder = "어떤 숙소를 찾으시나요?", onSearch, className }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.trim()) {
            onSearch(query.trim());
        }
    };

    const clearInput = () => {
        setQuery('');
    };

    return (
        <div className={cx('searchBar', className)}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={cx('searchInput')}
            />
            <CiSearch className={cx('searchIcon')} />
            {query && (
                <button onClick={clearInput} className={cx('clearButton')}>
                    <FiDelete />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
