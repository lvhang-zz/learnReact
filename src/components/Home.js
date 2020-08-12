import React,{Component} from "react"
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            xx:"测试"
        }
    }
    render() {
        return (
            <div className="xx">
                我是子组件 Home
            </div>
        )
    }

}
export default Home;