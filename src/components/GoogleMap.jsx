import React from 'react'

const GoogleMap = () => {
    return (
        <>
            <section className='map'>
                <div style={{ width: '100%' }}>
                    <iframe
                        width="100%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                      
                        title='Ahmadabad'
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahemdabad+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a>
                    </iframe>
                </div>

            </section>
        </>
    )
}

export default GoogleMap