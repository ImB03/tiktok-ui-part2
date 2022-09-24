import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useFef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import 'tippy.js/dist/tippy.css';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useFef();

  console.log(searchResult);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1]);
    }, 1000);
  }, []);

  return (
    <HeadlessTippy //thư viện cho các nav ẩn
      interactive //để có thể tương tác với kết quả tìm kiếm
      visible={searchResult.length > 0} //điều kiện để hiện kết quả tìm
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          // ref={inputRef}
          value={searchValue}
          placeholder="Search accouts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!!searchValue && (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              // inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}
