import React from 'react';

class Page extends React.Component {
    
    style = () => {

        const {
            direction,
            fontSize,
            fontColor,
        } = this.props;

        const style = css`{
            height: 100%;
            width: 100%;
        }`

        return this.props.css ? css`${style};${this.props.css}` : style;
    }

    render () {
        return <main>页面</main>
    }
}