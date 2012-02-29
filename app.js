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

        var green = {
            style: "background-color: #3B7E00; color:white;",
            title: "Green",
            html: "Green"
        };

        Sencha.container = Ext.create('Ext.Container', {
            fullscreen: true,
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            defaults: { flex: 1 },
            items: [red, amber, green]
        });

    }
});