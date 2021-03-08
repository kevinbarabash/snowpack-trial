import * as React from "react";

const {useState} = React;

class ClsHello extends React.Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return <h1 onClick={this.handleClick}>
            Hello, world times {this.state.count}
        </h1>;
    }
}

const FnHello = () => {
    const [count, setCount] = useState(0);

    return <h1 onClick={() => setCount(count + 1)}>
        Hello, world x {count}
    </h1>;
}

export {ClsHello, FnHello};
