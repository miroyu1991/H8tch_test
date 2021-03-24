import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import { addItem, removeItem } from "../../actions";
import './Home.scss'


const Home = () => {

  const dispatch = useDispatch()
  const colOne = useSelector(state => state.columnOne)
  const colTwo = useSelector(state => state.columnTwo)

  const [sortColOne, setSortColOne] = useState(colOne)
  const [sortColTwo, setSortColTwo] = useState(colTwo)
  const [searchStr, setSearchStr] = useState("")
  const [itemName, setItemName] = useState("")
  const [selectcol, setSelectCol] = useState("")


  const handleAddItemClicked = (itemName, selectcol) => {
    if(itemName !== undefined && itemName !== "" && selectcol === "1" || selectcol === "2"){
      dispatch(addItem(itemName, selectcol))
      setSearchStr("")
    }
  }

  const handleSearchChange = (event) => {
    setSearchStr(event.target.value)
    const newColOne = filterCol(colOne, event.target.value)
    const newColTwo = filterCol(colTwo, event.target.value)
    setSortColOne(newColOne)
    setSortColTwo(newColTwo)
  }

  const filterCol = (data, str) => {
    return data.filter(item => item.includes(str))
  }

  const handleRemoveItemClicked = (index, selectcol) => {
    dispatch(removeItem(index, selectcol))
  }

  useEffect(()=>{
    setSortColOne(colOne)
    setSortColTwo(colTwo)
  },[colOne,colTwo])

  return (
    <div className="pageContainer">
      <div className="homeContainer">
        <div className="homeDesc">
            <h1>Marvelous!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
        </div>
        <div className="homeTitle"><span>ADD AN ITEM</span></div>
        <div className="toolContainer">
          <div className="addToolContainer">
            <div className="toolItem">
              <input type="text" id="itemname" name="itemname" placeholder="ENTER ITEM" onChange={(event)=>setItemName(event.target.value)}/>
            </div>

            <div className="toolItem">
              <select id="itemcol" name="itemcol" defaultValue="" onChange={(event)=>setSelectCol(event.target.value)}>
                <option value="" disabled selected hidden>CHOOSE COLUMN</option>
                <option value="1">COLUMN 1</option>
                <option value="2">COLUMN 2</option>
              </select>
            </div>

            <div>
              <button className="addItemBtn" onClick={() => handleAddItemClicked(itemName, selectcol)}><span>ADD ITEM</span></button>
            </div>

            <div className="toolItem">
              <span className="searchContent">SEARCH AN ITEM</span>
              <input type="text" id="itemsearch" name="itemsearch" placeholder="SEARCH" onChange={(event)=>handleSearchChange(event)} value={searchStr}/>
            </div>
          </div>

          <div className="showToolContainer">
              <div className="colContainer">
                <div className="colTitle"><span>COLUMN 1</span></div>
                {sortColOne?.map((item, index)=>
                <div className="itemList">
                  <div key={index} className="itemContainer">
                    <div><span className="itemContent">{item}</span></div>
                    <div><button className="itemBtn" onClick={() => handleRemoveItemClicked(index, '1')}>X</button></div>
                  </div>
                </div>
                )}
              </div>
              <div className="colContainer">
                <div className="colTitle"><span>COLUMN 2</span></div>
                {sortColTwo?.map((item, index)=>
                <div className="itemList">
                  <div key={index} className="itemContainer">
                    <div><span className="itemContent">{item}</span></div>
                    <div><button className="itemBtn" onClick={() => handleRemoveItemClicked(index, '2')}>X</button></div>
                  </div>
                </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
    
      
  );
};

export default Home;