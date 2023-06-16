import React from 'react';
import classnames from 'classnames';
import { usePagination } from './usePagination';
import { DOTS } from './usePagination';
import { PagesList, PaginationContainer, PaginationUnderList } from './paginationStyles';

// Assets
import NextActive from '../../images/next-active.svg';
import PrevDisabled from '../../images/prev-disabled.svg';
import NextDisabled from '../../images/next-disabled.svg';


const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
        <PaginationUnderList
        className={classnames('pagination-container', { [className]: className })}
        >
            {/* Left navigation arrow */}
            <PagesList
                className={classnames('pagination-item', {
                disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow left">
                    <img src={PrevDisabled} alt='Icon' />
                </div>
            </PagesList>
            {paginationRange.map(pageNumber => {
                
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                return <PagesList className="pagination-item dots">&#8230;</PagesList>;
                }
                
                // Render our Page Pills
                return (
                <PagesList
                    className={classnames('pagination-item', {
                    selected: pageNumber === currentPage
                    })}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </PagesList>
                );
            })}
            {/*  Right Navigation arrow */}
            <PagesList
                className={classnames('pagination-item', {
                disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow right">
                    <img className='active-icon' src={NextActive} alt='icon' />
                    <img className='disabled-icon' src={NextDisabled} alt='icon' />
                </div>
            </PagesList>
        </PaginationUnderList>
    </PaginationContainer>
  );
};

export default Pagination;