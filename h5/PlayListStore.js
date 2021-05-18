'use strict';

function save(item) {
    const storeArray = getStoreArray('playList');
    storeArray.push(item);
    localStorage.setItem('playList', JSON.stringify(storeArray)); // 数组对象 转换为 字符串.
}

function loadPlayList() {
    var savedSongs = getSavedSongs();
    let ul = document.getElementById('playList');
    if (savedSongs != null) {
        for (let i = 0; i < savedSongs.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = savedSongs[i];
            ul.appendChild(li);
        }
    }
}

function getStoreArray(key) {
    let playListArray = localStorage.getItem(key);
    if (playListArray == null || playListArray === '' || playListArray === undefined) {
        playListArray = []; // new Array();
    } else {
        playListArray = JSON.parse(playListArray);
    }
    return playListArray;
}

function getSavedSongs() {
    return getStoreArray('playList');
}