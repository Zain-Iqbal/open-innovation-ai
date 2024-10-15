import React from "react";

import {IItemDetailHome} from "../../../../interface";

const ItemDetailHome: React.FC<IItemDetailHome> = (props) => {
    const {selectedData, close} = props
    const {
        created = '',
        group_id = '',
        name = '',
        notes = null,
        popularity = 0,
        series_count = 0
    } = selectedData || {}

    return !!selectedData ? <div className={'bottom-home-section'}>
        <i className="fa-solid fa-rectangle-xmark" onClick={close}/>
        <p><b>Name: </b>{name}</p>
        <p><b>created: </b>{created}</p>
        <p><b>Group id: </b>{group_id}</p>
        <p><b>Popularity: </b>{popularity}</p>
        <p><b>Series Count: </b>{series_count}</p>
        {!!notes && <p><b>Notes: </b>{notes}</p>}
    </div> : null
}

export default ItemDetailHome
