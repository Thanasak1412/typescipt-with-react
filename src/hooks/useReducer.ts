type Increment = {
    readonly type: "increment";
    readonly decrementStep: number;
}

type Decrement = {
    readonly type: "decrement";
    readonly decrementStep: number;
}

type Double = {
    readonly type: "double";
}

type Reset = {
    readonly type: "reset";
}

type Action = Increment | Decrement | Double | Reset;


type State = {
    count: number
}

const neverReached = (never: never) => { }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + action.decrementStep
            }
        case "decrement":
            return {
                count: state.count - action.decrementStep
            }
        case "double":
            return {
                count: state.count * 2
            }
        case "reset":
            return {
                count: state.count
            }
        default:
            neverReached(action);
    }

    return state;
}

export default reducer;