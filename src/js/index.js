const discordTip = document.querySelectorAll('#discord');
const thecodeTip = document.querySelectorAll('#thecode');
const hhughesTip = document.querySelectorAll('#hhughes');

tippy(discordTip, {
    theme: 'discord',
    arrow: true,
    arrowType: 'small',
    animation: 'shift-away',
    placement: 'left',
    touchHold: true,
    duration: 200
});

tippy(thecodeTip, {
    interactive: true,
    interactiveBorder: 2,
    theme: 'rgerdin',
    html: document.querySelector('#thecodequote'),
    animation: 'shift-away',
    inertia: true,
    duration: 200,
    distance: 22,
    placement: 'top',
    touchHold: true,
    arrow: true,
    arrowTransform: 'scale(1.25)'
});

tippy(hhughesTip, {
    interactive: true,
    interactiveBorder: 2,
    theme: 'rgerdin',
    html: document.querySelector('#hhughesquote'),
    animation: 'shift-away',
    inertia: true,
    duration: 200,
    distance: 22,
    placement: 'top',
    touchHold: true,
    arrow: true,
    arrowTransform: 'scale(1.25)'
});