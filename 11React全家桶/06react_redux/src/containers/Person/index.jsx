import {Component} from "react";
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPersonAction} from "../../redux/actions/person";


class Person extends Component {

    addPerson = ()=> {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件,上方组件值为{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.rens.map((p) => {
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    }
                </ul>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    rens: state.personReducer.person,
    count: state.countReducer.count
})

const mapDispatchToProps = dispatch => ({
    addPerson: data=>dispatch(addPersonAction(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Person)