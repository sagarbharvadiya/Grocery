import React from 'react'
import dataJson from '../Data/data.json'
const LeftSideBar = () => {
    return (
        <>
          
                <div className='col-lg-3 left_side_bar'>
                    <div className='sideBar_weeper'>
                        <h4>Top Categories</h4>
                        <ul>
                            {
                                dataJson.LeftSideBar.map((d, i) => (
                                    <React.Fragment key={d.id}>
                                        <div className='d-flex'>
                                            <div className='list'>
                                                <img src={d.icon} alt="icon" className='icon' />
                                                <li>{d.list}</li>
                                            </div>
                                            <div>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))
                            }

                        </ul>
                    </div>
                </div>
        </>
    )
}

export default LeftSideBar