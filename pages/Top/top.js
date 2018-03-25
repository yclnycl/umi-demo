import React from "react"
import TopCss from "./top.css"
import {Icon} from "antd"
import $ from "jquery"
import Link from 'umi/link';

export default class TopGrop extends React.Component {
    goTop = () => {
        $("boyd").scrollTop(0)
    }
    render() {
        return (
            <div className={TopCss.top_div_css}>
                <Link to="/Info/info"><div className={TopCss.top_div_item} ><Icon type="form" style={{ fontSize: "1rem", color: '#08c' }}/></div></Link>
            </div>
        )
    }
}