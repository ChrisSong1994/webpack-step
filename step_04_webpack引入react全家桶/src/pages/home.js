import * as React from "react"
import { observer, inject } from "mobx-react"

@inject("globleStore")
@observer
class Home extends React.Component {
    render() {
        const { background } = this.props.globleStore
        return (
            <div style={{ background: background }}>
                Home
                <h4 class="h4_css">step_02_webpack配置丰富</h4>
                <h4 class="h4_less">step_02_webpack配置丰富</h4>
                <h4 class="h4_scss">step_02_webpack配置丰富</h4>
                <div class="image_test"></div>
            </div>
        )
    }
}

export default Home;