import {Flex, Picker, List, ImagePicker, Button} from "antd-mobile"
import React from "react"
import {CityData} from "../Common/liandong.js"
import arrayTreeFilter from 'array-tree-filter';


const typedata = [
    {value: 1, label: "供应"},
    {value: 2, label: "求购"},
]

const varietydata = [
    {value: 1, label: "葵花籽"},
    {value: 2, label: "胡芦籽"},
    {value: 3, label: "油葵"},
    {value: 4, label: "西瓜籽"},
    {value: 5, label: "葵花小籽"},
    {value: 6, label: "其他"},
]

const data = [];


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
        files: data,
    }

    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
            return '';
        }
        const treeChildren = arrayTreeFilter(CityData, (c, level) => c.value === value[level]);
        return treeChildren.map(v => v.label).join(',');
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }

    render() {
        const {files} = this.state;
        return (<div>
            <Picker
                data={typedata}
                cols={this.state.cols}
                value={this.state.InfoTypes}
                onChange={v => this.setState({InfoTypes: v})}
                onOk={v => this.setState({InfoTypes: v})}
            >
                <List.Item arrow="horizontal" onClick={this.onClick}>分类</List.Item>
            </Picker>
            <Picker
                data={varietydata}
                cols={this.state.cols}
                value={this.state.Variety}
                onChange={v => this.setState({Variety: v})}
                onOk={v => this.setState({Variety: v})}
            >
                <List.Item arrow="horizontal" onClick={this.onClick}>品种</List.Item>
            </Picker>
            <Picker
                visible={this.state.visible}
                data={CityData}
                value={this.state.pickerValue}
                onChange={v => this.setState({pickerValue: v})}
                onOk={() => this.setState({visible: false})}
                onDismiss={() => this.setState({visible: false})}
            >
                <List.Item arrow="horizontal" activeStyle={{flexBasis: "70%"}} wrap={true} extra={this.getSel()}
                           onClick={() => this.setState({visible: true})}>
                    地区
                </List.Item>
            </Picker>
            <div style={{width: "100%", height: "8rem", margin: "1rem 0 1rem 0"}}>

                <div style={{width: "100%", position: 'absolute'}}>
                    <div style={{
                        width: "20%",
                        height: "8rem",
                        lineHeight: "8rem",
                        display: "inline-block",
                        paddingLeft: 15,
                        position: 'absolute'
                    }}>内容
                    </div>
                    <div style={{width: "80%", display: "inline-block"}}>
                    <textarea
                        style={{width: "80%", height: "8rem", display: "inline-block", position: 'absolute',top:0, right: 0}}
                        defaultValue="请填写您出售或求购瓜子的详细信息...">

                    </textarea>
                    </div>

                </div>
            </div>
            <div>
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 4}
                    accept="image/gif,image/jpeg,image/jpg,image/png"
                />
            </div>
            <Button type="primary" loading={true} disabled={true} style={{margin:"",width:"100%",position:"fixed",bottom:0}}>发布</Button>
        </div>);
    }
}
