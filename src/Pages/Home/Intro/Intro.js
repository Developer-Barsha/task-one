import React from 'react';
import './Intro.css'

const Intro = () => {
    return (
        <div id='intro'>
            <div>
                <h4>Nice to meet you</h4>
                <h1>Hello & Welcome here!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint laudantium voluptatem ipsa temporibus velit dolores reprehenderit quidem. Doloribus reiciendis nulla porro iusto, distinctio nam praesentium magni iure illo suscipit inventore placeat voluptates impedit, deleniti minus voluptatum soluta nemo quo!</p>
                <button className='primary-btn'>Explore more <span><i class="fa-solid fa-arrow-right moving-icon"></i></span> </button>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/9c/83/88/9c838839fcf2197a8d8007b27ba713a3.gif" alt="" />
            </div>
        </div>
    );
};

export default Intro;