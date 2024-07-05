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

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:display_pannel')
	],'kubejs:screen_frame',[
		event.recipes.createDeploying('kubejs:incomplete_display_pannel',['kubejs:incomplete_display_pannel','minecraft:slime_ball']),
		event.recipes.createDeploying('kubejs:incomplete_display_pannel',['kubejs:incomplete_display_pannel','minecraft:glowstone_dust']),
		event.recipes.createPressing('kubejs:incomplete_display_pannel', 'kubejs:incomplete_display_pannel'),
        event.recipes.createDeploying('kubejs:display_pannel', ['kubejs:incomplete_display_pannel', 'kubejs:screen_controller']),
	]).transitionalItem('kubejs:incomplete_display_pannel').loops(1)
});