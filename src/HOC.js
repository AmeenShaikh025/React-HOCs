import React from "react";

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState({
                count: this.state.count + 1,
            })
        }

        render() {
            return <OriginalComponent
            incrementCount={this.incrementCount}
            count={this.state.count}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent;