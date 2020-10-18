This project is made to demonstrate several development tools, patterns or techniques:

## Redux Cycle

Action Creator => Action => dispatch => Reducers => State

## Redux-Middleware(Thunk) Cycle

Action Creator => Action => dispatch => Middleware => Reducers => State

## Action Creator Rules

    - must return the action JS plain object OR a function when a middleware is mounted
    - the action object must have a 'type' property
    - the action object can optionally have a 'payload' property

## Reducers Rules

    - must return any value beside the 'undefined'
    - produce 'STATE' using only the previous 'STATE' and 'ACTION'
    - are pure function (the return value is only determined by its input values without side effects)
    - must not mutate the 'STATE' input

## React-Redux library

Expose the Provider and Connect components which allow a direct communication between the Parent component and any Child component.
