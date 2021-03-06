import * as React from "react"
import { observer, inject } from "mobx-react"

@inject("globleStore")
@observer
class Home extends React.Component {
    render() {
        const { background } = this.props.globleStore
        return (
            <div style={{ background: background }}>
                <div class="image_test"></div>
            </div>
        )
    }
}

export default Home;