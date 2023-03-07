import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilterValue } from '../rtk/features/filter/filterSlice'
import { fetchPosts } from '../rtk/features/posts/postsSlice'

const SortFilter = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState({
        sort:'Default',
        filter:'All'
    })

    useEffect(() => {
        dispatch(fetchPosts(filter))
        dispatch(setFilterValue(filter))
    }, [filter.filter,filter.sort])
    const handleSort = (e) => {
        setFilter({
            ...filter,
            sort: e.target.value
        })
    }   
    const handleFilter = (e) => {
        setFilter({
            ...filter,
            filter:e.target.value
        })
    }
  return (
    <aside>
        <div className="sidebar-items">
        <div className="sidebar-content">
            <h4>Sort</h4>
            <select onChange={handleSort} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
            </select>
        </div>
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
            <div>
                <input onChange={handleFilter} value = 'All' type="radio" name="filter" id="lws-all" checked = {filter.filter === 'All'} className="radio" />
                <label htmlFor="lws-all">All</label>
            </div>
            <div>
                <input onChange={handleFilter} value = 'Saved' checked = {filter.filter === 'Saved'}  type="radio" name="filter" id="lws-saved" className="radio" />
                <label htmlFor="lws-saved">Saved</label>
            </div>
            </div>
        </div>
        </div>
    </aside>
  )
}

export default SortFilter