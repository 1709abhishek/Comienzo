import React from 'react'

function NameList() {
    const names = ['Charlie', 'Alan', 'Jake']
    // if key is not passed in props then react gives warning and sometimes it becomes inefficient also
    // try not using index as a key if filter or alteration done
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
