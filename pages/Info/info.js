import {Flex} from "antd-mobile"
import React from "react"




export default () => {
    return (
        <div>
            <Flex>
                <Flex.Item><Variety/></Flex.Item>
            </Flex>
        </div>
    )
}


class Variety extends React.Component {
    state = {
        cols: 1,
        Variety: null,
        InfoTypes: null,
        Area: null,
        AreaArr: null,
        disabled:false,
    }

    render() {
        return (<div>
       123
        </div>);
    }
}
