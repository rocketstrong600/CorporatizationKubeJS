ServerEvents.recipes(event => {

    // Mechanical Crafting Recipes

    //creative picture frame
    event.recipes.create.mechanical_crafting('littleframes:creative_pic_frame', [
        '     ',
        ' GDG ',
        ' GGG ',
        ], {
        G: 'create:golden_sheet',
        D: 'kubejs:display_pannel'
    })

    //Mixing Recipes

    //bronze alloy
    event.recipes.create.mixing('3x mekanism:ingot_bronze', ['mekanism:ingot_tin', 'minecraft:copper_ingot', 'minecraft:copper_ingot',]).heated()

    //Pressing Recipes

    //Glass Sheet
    event.recipes.create.pressing([Item.of('kubejs:glass_sheet').withChance(0.25), 'kubejs:broken_glass'], 'minecraft:glass_pane')

    //Deploying Recipes

    //Screen Frame
    event.recipes.create.deploying([Item.of('kubejs:screen_frame').withChance(0.75), 'kubejs:broken_glass'], 'minecraft:incomplete_screen_frame')

    //Sequenced Crafting Recipes
    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:display_pannel')
	],'kubejs:screen_frame',[
		event.recipes.createDeploying('kubejs:incomplete_display_pannel',['kubejs:incomplete_display_pannel','minecraft:slime_ball']),
		event.recipes.createDeploying('kubejs:incomplete_display_pannel',['kubejs:incomplete_display_pannel','minecraft:glowstone_dust']),
		event.recipes.createPressing('kubejs:incomplete_display_pannel', 'kubejs:incomplete_display_pannel'),
        event.recipes.createDeploying('kubejs:display_pannel', ['kubejs:incomplete_display_pannel', 'kubejs:screen_controller']),
	]).transitionalItem('kubejs:incomplete_display_pannel').loops(1)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:screen_controller')
	],'create:copper_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_screen_controller',['kubejs:incomplete_screen_controller','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_screen_controller',['kubejs:incomplete_screen_controller','create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_screen_controller',['kubejs:incomplete_screen_controller','createaddition:gold_wire']),
        event.recipes.createDeploying('kubejs:incomplete_screen_controller',['kubejs:incomplete_screen_controller','createaddition:capacitor']),
        event.recipes.createDeploying('kubejs:incomplete_screen_controller',['kubejs:incomplete_screen_controller','minecraft:quartz']),
        event.recipes.createDeploying('kubejs:screen_controller',['kubejs:incomplete_screen_controller','kubejs:media_rx']),

	]).transitionalItem('kubejs:incomplete_screen_controller').loops(1)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:media_rx')
	],'create:copper_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_media_rx',['kubejs:incomplete_media_rx','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_media_rx',['kubejs:incomplete_media_rx','minecraft:lightning_rod']),
        event.recipes.createDeploying('kubejs:incomplete_media_rx',['kubejs:incomplete_media_rx','minecraft:ender_pearl']),
        event.recipes.createDeploying('kubejs:media_rx',['kubejs:incomplete_media_rx','createaddition:gold_wire']),

	]).transitionalItem('kubejs:incomplete_media_rx').loops(1)
});