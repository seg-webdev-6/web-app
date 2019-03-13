var anim;
var elem = document.getElementById('gm2')
var animData = {
    container: elem,
    renderer: 'svg',
    loop: false,
    autoplay: false,   /*MAKE SURE THIS IS FALSE*/
    rendererSettings: {
        progressiveLoad:false
    },
    path: '/anims/data.json',
    name: 'myAnimation2',
};
anim = bodymovin.loadAnimation(animData);

var waypoint = new Waypoint({
 element: document.getElementById('gm2'),
 handler: function(direction) {
 anim.play();   /*THIS IS WHERE WE PLAY THE ANIMATION*/
 },
   offset: 'bottom-in-view' /* string defined in waypoint.js See documentation for more presets */
})
