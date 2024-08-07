StartupEvents.registry('item', event => {
	event.create('screen_controller').displayName('Screen Controller').texture('kubejs:item/pcb')
	event.create('media_rx').displayName('Media RX').texture('kubejs:item/pcb_rx')
	event.create('incomplete_pcb','create:sequenced_assembly').displayName('Incomplete PCB').texture('kubejs:item/incomplete_pcb')
	event.create('incomplete_screen_frame').displayName('Incomplete Screen Frame').texture('kubejs:item/incomplete_screen_frame')
	event.create('screen_frame').displayName('Screen Frame').texture('kubejs:item/screen_frame')
    event.create('display_pannel').displayName('Display Pannel').texture('kubejs:item/display_pannel')
    event.create('incomplete_display_pannel','create:sequenced_assembly').displayName('Incomplete Display Pannel').texture('kubejs:item/screen_frame')
	event.create('glass_sheet').displayName('Glass Sheet').texture('kubejs:item/glass_sheet')
	event.create('broken_glass').displayName('Broken Glass').texture('kubejs:item/broken_glass')

	event.create('basic_motherboard').displayName('Basic Motherboard').texture('kubejs:item/basic_motherboard')
	event.create('advanced_motherboard').displayName('Advanced Motherboard').texture('kubejs:item/advanced_motherboard')
	event.create('elite_motherboard').displayName('Elite Motherboard').texture('kubejs:item/elite_motherboard')
	event.create('ultimate_motherboard').displayName('Ultimate Motherboard').texture('kubejs:item/ultimate_motherboard')

	event.create('incomplete_motherboard','create:sequenced_assembly').displayName('Incomplete Motherboard').texture('kubejs:item/incomplete_motherboard')
})