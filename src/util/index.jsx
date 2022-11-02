// import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';


export const errHandler = (err) => {
    if (err) {
        console.log(err)
        if (err.code === 4001) {
            tips("you have cancelled the subscription")
        } else if (err.code === 'NETWORK_ERROR') {
            tips("Please check your network connection!")
        } else {
            tips(err.message)
        }
    } else {
        console.log("ignorant error")
        tips("ignorant error")
    }
}

export const toHex = (val) => new window.Web3().utils.toHex(val)

// export const tips = (html) => {
//     toast(html, {
//         position: "top-right",
//         autoClose: 4000,
//     });
// }

export const simpleAddress = (address, first, second) => {
    let one; let two; let newAddress;
    if (address && first && second) {
        one = address.slice(0, first);
        two = address.slice(address?.length - second, address.length);
    } else {
        one = address.slice(0, 4);
        two = address.slice(address?.length - 4, address.length);
    }
    newAddress = one + '...' + two;
    return newAddress;
}
export const copyToClipboard = (text) => {
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    tips(text);
};
