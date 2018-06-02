import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = (props) => (
    ce('div', null,
        ce('h4', {
            id: props.id,
            style: { color: props.color }
        },
            props.title
        )
    )
)
const MyFirstComponent = () => (
    ce('div', null,
        [
            ce('h1', { id: "hello-world-ccomponent" }, "hello world"),
            ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }),
            ce(MyTitle, { title: 'testing-green', id: 'title-green', color: 'green' }),
            ce(MyTitle, { title: 'testing-YellowGreen', id: 'title-YellowGreen', color: 'YellowGreen' }),
            ce(MyTitle, { title: 'testing-GreenYellow', id: 'title-GreenYellow', color: 'GreenYellow' }),
            ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }),
            ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }),
            ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }),
            ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }),
            ce(MyTitle, { title: 'testing-title', id: 'title-component', color: 'red' }),
        ]
    )
)

render(
    ce(MyFirstComponent),
    document.getElementById('app')
)