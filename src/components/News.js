import React,{Component} from "react"
class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            xx:"测试"
        }
    }
    render() {
        return (
            <div className="xx">
                我是子组件 news
            </div>
        )
    }

}
export default News;