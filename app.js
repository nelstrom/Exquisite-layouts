Ext.application({
    name: 'Sencha',

    launch: function() {

        var red = {
            style: "background-color: #B22222; color:white;",
            title: "Red",
            html: "Red"
        };

        var amber = {
            style: "background-color: #FFBF00; color:white;",
            title: "Amber",
            html: "Amber"
        };

        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'fit',
            items: [red, amber]
        });

    }
});