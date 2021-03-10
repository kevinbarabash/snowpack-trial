import * as React from "react";

const {useState} = React;

// Class components don't work with fast refresh.
class Hello extends React.Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return <h1 onClick={this.handleClick}>
            Hello, world x {this.state.count}
        </h1>;
    }
}

// Wrapping a class component within a functional component will result
// in the wrapped component being remounted, but at least it's remounting
// now.
const ClsHello = () => {
    return <Hello />;
}

const FnHello = () => {
    const [count, setCount] = useState(0);

    return <h1 onClick={() => setCount(count + 1)}>
        Hello, world times {count}
    </h1>;
}

export {ClsHello, FnHello};
