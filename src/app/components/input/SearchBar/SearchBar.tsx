"use client"
import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { CiSearch } from "react-icons/ci";
import { FiDelete } from 'react-icons/fi';

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void; 
}

const SearchBar = ({ placeholder = "어떤 숙소를 찾으시나요?", onSearch }: SearchBarProps) => {
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
        <div className={styles.searchBar}>
            
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={styles.searchInput}
                
            />
            <CiSearch className={styles.searchIcon} />
            {query && (
                <button onClick={clearInput} className={styles.clearButton}>
                    <FiDelete />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
