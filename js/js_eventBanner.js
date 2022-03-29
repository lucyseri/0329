'use strict';
const bUl = document.querySelector('.bottom-con>ul');
const bLi = document.querySelectorAll('.bottom-con>ul>li');
const bLiImg = document.querySelectorAll('.bottom-con>ul>li img');

const topCon = document.querySelector('.top-con');


bLi.forEach((el, idx) => {
  el.addEventListener('click', (e) => {
    const eTarget = e.target;
    const eCTarget = e.currentTarget;
    console.log(e.target)
    console.log(e.currentTarget)

    bLiImg.forEach((el2, idx2) => {
      if (eTarget === el2) {
        const imgSrc = el2.getAttribute('src');
        const imgAlt = el2.getAttribute('alt');

        const topConImg = topCon.children[0];
        const topConImgTxt = topCon.children[1];

        topConImg.setAttribute('src', imgSrc);
        topConImg.setAttribute('alt', imgAlt);

        topConImgTxt.innerText = imgAlt;
        el2.classList.add('on')
      } else {
        el2.classList.remove('on');
      }
    });
  });
});