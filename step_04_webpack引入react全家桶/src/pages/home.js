import * as React from "react"
import { observer, inject } from "mobx-react"

@inject("globleStore")
@observer
class Home extends React.Component {
    componentDidMount() {
        const { background } = this.props.globleStore
        console.log(background)
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default Home;