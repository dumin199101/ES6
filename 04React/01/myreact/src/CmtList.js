import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './red.css'
class CmtList extends Component{
    constructor(){
        super();
        //私有数据
        this.state = {
            cmtlists:[
                {id:1,title:'苹果',content:'东西不错嘛'},
                {id:2,title:'梨子',content:'东西不错啊'},
                {id:3,title:'香蕉',content:'东西不错呀'},
                {id:4,title:'橘子',content:'东西不错哦'},
            ]
        }
    }

    handleClick = ()=>{
        console.log(this.state.cmtlists[0].title);
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.handleClick}>按钮</button>
                {this.state.cmtlists.map(function(v){
                    return (<div key={v.id}>
                        <h1 className="red">{v.title}</h1>
                        <hr/>
                        <p>{v.content}</p>
                    </div>)
                })}
            </div>
        )
    }
}

export default CmtList