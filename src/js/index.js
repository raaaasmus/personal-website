const discordTip = document.querySelectorAll('#discord');
const thecodeTip = document.querySelectorAll('#thecode');
const hhughesTip = document.querySelectorAll('#hhughes');

tippy(discordTip, {
    arrow: true,
    arrowType: 'small',
    animation: 'shift-away',
    placement: 'left',
    touchHold: true
});

tippy(thecodeTip, {
    interactive: true,
    interactiveBorder: 2,
    theme: 'rgerdin',
    html: document.querySelector('#thecodequote'),
    animation: 'perspective',
    placement: 'bottom',
    touchHold: true
});

tippy(hhughesTip, {
    interactive: true,
    interactiveBorder: 2,
    theme: 'rgerdin',
    html: document.querySelector('#hhughesquote'),
    animation: 'perspective',
    placement: 'bottom',
    touchHold: true
});