var anim;
var elem = document.getElementById('gm50')
var animData = {
    container: elem,
    renderer: 'svg',
    loop: false,
    autoplay: false,   /*MAKE SURE THIS IS FALSE*/
    rendererSettings: {
        progressiveLoad:false
    },
    path: '/anims/data50.json',
    name: 'myAnimation',
};
anim = bodymovin.loadAnimation(animData);

var waypoint = new Waypoint({
 element: document.getElementById('gm50'),
 handler: function(direction) {
 anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/
 },
   offset: 'bottom-in-view' /* string defined in waypoint.js See documentation for more presets */
})
