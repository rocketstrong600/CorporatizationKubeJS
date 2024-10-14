ServerEvents.recipes(event => {
    //Remove Recipes
    event.remove({ id: 'computercraft:computer_advanced' })
    event.remove({ id: 'computercraft:computer_normal' })
    event.remove({ id: 'computercraft:computer_advanced_upgrade' })
    event.remove({ id: 'computercraft:pocket_computer_normal' })
    event.remove({ id: 'computercraft:pocket_computer_advanced' })
    event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' })
    event.remove({ id: 'computercraft:turtle_normal' })
    event.remove({ id: 'computercraft:turtle_advanced' })
    event.remove({ id: 'computercraft:turtle_advanced_upgrade' })
    event.remove({ id: 'computercraft:monitor_advanced' })
    event.remove({ id: 'computercraft:monitor_normal' })
    event.remove({ id: 'create:crafting/materials/rose_quartz' })
    event.remove({ output: 'projectred_core:red_ingot' })
    event.remove({ output: 'projectred_transmission:red_alloy_wire'})
    event.remove({ type: 'jumbofurnace:jumbo_smelting'})
    //Shaped Recipes

    //Computer Normal
    event.shaped(
        Item.of('computercraft:computer_normal', 1), // arg 1: output
        [
            'IAI',
            'AMA', // arg 2: the shape (array of strings)
            'IDI'
        ],
        {
            I: 'create:iron_sheet',
            A: 'create:andesite_casing',
            M: 'kubejs:basic_motherboard',
            D: 'kubejs:display_pannel'
        }
    )

    //Computer Advanced
    event.shaped(
        Item.of('computercraft:computer_advanced', 1), // arg 1: output
        [
            'GBG',
            'BMB', // arg 2: the shape (array of strings)
            'GDG'
        ],
        {
            G: 'create:golden_sheet',
            B: 'create:brass_casing',
            M: 'kubejs:advanced_motherboard',
            D: 'kubejs:display_pannel'
        }
    )

    //Screen Normal
    event.shaped(
        Item.of('computercraft:monitor_normal', 1), // arg 1: output
        [
            'IAI',
            'AEA', // arg 2: the shape (array of strings)
            'IDI'
        ],
        {
            I: 'create:iron_sheet',
            A: 'create:andesite_casing',
            E: 'create:electron_tube',
            D: 'kubejs:display_pannel'
        }
    )

    //Screen Advanced
    event.shaped(
        Item.of('computercraft:monitor_advanced', 1), // arg 1: output
        [
            'GBG',
            'BEB', // arg 2: the shape (array of strings)
            'GDG'
        ],
        {
            G: 'create:golden_sheet',
            B: 'create:brass_casing',
            E: 'create:electron_tube',
            D: 'kubejs:display_pannel'
        }
    )

    // Mechanical Crafting Recipes

    //creative picture frame
    event.recipes.create.mechanical_crafting('littleframes:creative_pic_frame', [
        ' GDG ',
        ' GMG ',
        ], {
        G: 'create:golden_sheet',
        D: 'kubejs:display_pannel',
        M: 'kubejs:media_rx'
    })

    //incomplete screen frame
    event.recipes.create.mechanical_crafting('kubejs:incomplete_screen_frame', [
        ' SSS ',
        ' S S ',
        ' SSS ',
        ], {
        S: 'create:brass_sheet',
    })

    event.recipes.create.mechanical_crafting('computercraft:turtle_normal', [
        'SCXPS',
        'SGZGS',
        ], {
        S: 'create:iron_sheet',
        C: 'create:cogwheel',
        P: 'create:propeller',
        X: 'computercraft:computer_normal',
        Z: 'minecraft:chest',
        G: 'minecraft:slime_ball'
    })

    event.recipes.create.mechanical_crafting('computercraft:turtle_advanced', [
        'SCXPS',
        'SGZGS',
        ], {
        S: 'create:brass_sheet',
        C: 'create:cogwheel',
        P: 'create:propeller',
        X: 'computercraft:computer_advanced',
        Z: 'minecraft:chest',
        G: 'minecraft:slime_ball'
    })

    //Mixing Recipes

    //bronze alloy
    event.recipes.create.mixing('3x mekanism:ingot_bronze', ['mekanism:ingot_tin', 'minecraft:copper_ingot', 'minecraft:copper_ingot']).heated()

    //Destabalized Redstone
    event.recipes.create.mixing([Fluid.of('thermal:redstone', 100)], ['minecraft:redstone']).heated()

    //Red Alloy Ingot
    event.recipes.create.mixing('projectred_core:red_ingot', [Fluid.of('thermal:redstone', 200), 'minecraft:copper_ingot']).heated()

    //Compacting Recipes

    //Stabalise Redstone
    event.recipes.create.compacting(['minecraft:redstone_block'], [Fluid.of('thermal:redstone', 900)])

    //Recycle Broken Glass
    event.recipes.create.compacting('minecraft:glass', '3x kubejs:broken_glass').heated()

    //Pressing Recipes

    //Glass Sheet
    event.recipes.create.pressing([Item.of('kubejs:glass_sheet').withChance(0.25), 'kubejs:broken_glass'], 'minecraft:glass_pane')

    //Pocket Computer
    event.recipes.create.pressing('computercraft:pocket_computer_normal', 'computercraft:computer_normal')
    event.recipes.create.pressing('computercraft:pocket_computer_advanced', 'computercraft:computer_advanced')


    //Deploying Recipes

    //Screen Frame
    event.recipes.create.deploying('kubejs:screen_frame', ['kubejs:incomplete_screen_frame', 'kubejs:glass_sheet'])

    //Electron Tube
    event.recipes.create.deploying('create:electron_tube', ['create:polished_rose_quartz', 'create:iron_sheet'])
    event.recipes.create.deploying('create:electron_tube', ['create:iron_sheet', 'create:polished_rose_quartz'])

    //Filling Recipes

    //Rose Quartz
    event.recipes.create.filling('create:rose_quartz', [Fluid.of('thermal:redstone', 50), 'minecraft:quartz'])

    //Milling Recipes
    event.recipes.create.milling('9x minecraft:redstone', 'minecraft:redstone_block')


    //Rolling Recipes

    // red alloy wire
    event.custom({
        type: "createaddition:rolling",
        input: {
            tag: "forge:ingots/red_alloy"
        },
        result: {
            item: "projectred_transmission:red_alloy_wire",
            count: 2
        }
    })

    //Sequenced Crafting Recipes
    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:display_pannel')
	],'kubejs:screen_frame',[
		event.recipes.createDeploying('kubejs:incomplete_display_pannel',['kubejs:incomplete_display_pannel','minecraft:slime_ball']),
		event.recipes.createDeploying('kubejs:incomplete_display_pannel',['kubejs:incomplete_display_pannel','minecraft:glowstone_dust']),
		event.recipes.createPressing('kubejs:incomplete_display_pannel', 'kubejs:incomplete_display_pannel'),
        event.recipes.createDeploying('kubejs:incomplete_display_pannel', ['kubejs:incomplete_display_pannel', 'kubejs:screen_controller']),
	]).transitionalItem('kubejs:incomplete_display_pannel').loops(1)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:screen_controller')
	],'create:copper_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','createaddition:gold_wire']),
        event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','createaddition:capacitor']),
        event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','minecraft:quartz']),
	]).transitionalItem('kubejs:incomplete_pcb').loops(1)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:media_rx')
	],'create:copper_sheet',[
        event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','minecraft:ender_pearl']),
		event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','minecraft:lightning_rod']),
        event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','createaddition:gold_wire']),
        event.recipes.createDeploying('kubejs:incomplete_pcb',['kubejs:incomplete_pcb','mekanism:advanced_control_circuit']),
	]).transitionalItem('kubejs:incomplete_pcb').loops(1)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:basic_motherboard')
	],'create:copper_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','mekanism:basic_control_circuit']),
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:gold_wire']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:capacitor']),
	]).transitionalItem('kubejs:incomplete_motherboard').loops(2)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:advanced_motherboard')
	],'create:copper_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','mekanism:advanced_control_circuit']),
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:gold_wire']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:capacitor']),
	]).transitionalItem('kubejs:incomplete_motherboard').loops(2)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:elite_motherboard')
	],'create:copper_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','mekanism:elite_control_circuit']),
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:gold_wire']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:capacitor']),
	]).transitionalItem('kubejs:incomplete_motherboard').loops(2)

    event.recipes.create.sequenced_assembly([
		Item.of('kubejs:ultimate_motherboard')
	],'create:copper_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','mekanism:ultimate_control_circuit']),
		event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:gold_wire']),
        event.recipes.createDeploying('kubejs:incomplete_motherboard',['kubejs:incomplete_motherboard','createaddition:capacitor']),
	]).transitionalItem('kubejs:incomplete_motherboard').loops(2)

});

ServerEvents.afterRecipes(event => {
    event.remove({ type: 'jumbofurnace:jumbo_smelting'})
});
