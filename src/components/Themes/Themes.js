import React from 'react'
import styled from 'styled-components'
import theme from 'styled-theming';


export const light = {
    bgColor: '#F3F2F2',
    bgInner: '#fff',
    textColor: '#1A1A2E',
    inputTextColor: '#1A1A2E',
    linkColor:
        `#4D88ED;
        text-decoration: none;`,
    font:
        `font-family: Roboto;
        font-style: normal;`,
    border: ' 1px solid #C0BFBF',
    button: {
        sizes: {
            middle:
                `width: 200px;
                height: 50px;`,
        },

    },
    input: {
        color: `
        background:none`
    },
    background: '#4D88ED',
    sliderPosition: '4px'
}

export const dark = {
    bgColor: '#3D315B',
    bgInner: '#444B6E',
    textColor: '#F0F7EE',
    inputTextColor: '#1A1A2E',
    linkColor:
        `#84E6F8;
        text-decoration: none;`,
    font:
        `font-family: Roboto;
        font-style: normal;`,
    border: ' 1px solid #5D737E',
    button: {
        sizes: {
            middle:
                `width: 200px;
                height: 50px;`,
        },
    },
    input: {
        color: `
        background:none`
    },
    background: '#2ec1ac',
    sliderPosition: '30px'
}


