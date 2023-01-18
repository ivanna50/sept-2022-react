import './App.css';

import React from 'react';
// import {Simpson} from "./components/Simpson/Simpson";
import {Characters} from "./components/characters/characters";

const App = () => {
    return (
        <div>

            {/*<Simpson name={'Merge'} surname={'Simpson'} image={'https://toleranten.files.wordpress.com/2011/03/original.jpg'}/>*/}
            {/*<Simpson name={'Bart'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}/>*/}
            {/*<Simpson name={'Megi'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Maggie_Simpson.png/200px-Maggie_Simpson.png'}/>*/}
            <Characters/>
        </div>
    );
};
export {App};