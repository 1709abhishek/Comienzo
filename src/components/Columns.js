import React from 'react'

function Columns() {
    const item = []
    return (
        // instead of react.fragments you can use empty opening and closing tags but keys cant be passed
        <React.Fragment>
            {
                item.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Abhishek</td>
        </React.Fragment>
    )
}

export default Columns
