AFRAME.registerComponent('fishes', {
    init: function () {
        for (var i = 0; i < 20; i++) {
            var id = `fish${i}`
            var posX = Math.floor(Math.random() * 3000 - 1000)
            var posY = Math.floor(Math.random() * 2 - 1)
            var posZ = Math.floor(Math.random() * 3000 - 1000)
            var position = { x: posX, y: posY, z: posZ }

            this.Fishes(id, position)
        }
    },
    Fishes: function (id, position) {
        var islandEl = document.querySelector('#island')
        var fishEl = document.createElement('a-entity')

        fishEl.setAttribute('id', id)
        fishEl.setAttribute('position', position)
        fishEl.setAttribute('scale', { x: 10, y: 10, z: 10 })
        fishEl.setAttribute('gltf-model', "models/clown_fish/scene.gltf")
        fishEl.setAttribute('geometry', { primitive: "torus", radius: 5 })

        fishEl.setAttribute('animation-mixer', {})
        islandEl.appendChild(fishEl)
    }
})