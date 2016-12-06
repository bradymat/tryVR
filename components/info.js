import html from 'yo-yo'
import 'aframe'
import 'aframe-text-component'
import extras from 'aframe-extras'

AFRAME.registerComponent('checkpoint', extras.misc.checkpoint)
extras.controls.registerAll()
extras.registerAll()

module.exports = (state, dispatch) => html`
    <div>
    <a-scene>
      <a-assets>
        <a-asset-item id="knight" src="/components/assets/knight.ply"></a-asset-item>
        <a-asset-item id="old" src="/components/assets/old.ply"></a-asset-item>
        <a-asset-item id="cloud1" src="/components/assets/cloud1.ply"></a-asset-item>
        <a-asset-item id="castle" src="/components/assets/castle.ply"></a-asset-item>
      </a-assets>

      <a-cylinder position="0 -40 0" radius="1000" height="10" color="#7CFC00"></a-cylinder>
      <a-sphere position="30 150 -120" radius="20" color="#FFC65D"></a-sphere>
      <a-entity position="-50 20 -80" text="text: Hello; size: 20;" material="color: #FFF" ></a-entity>
      <a-entity position="-70 0 -80" text="text: Piwakawaka; size: 20;" material="color: #FFF" ></a-entity>
      <a-entity position="20 -30 -100" ply-model="src: #knight" rotation="-90 0 0"></a-entity>
      <a-entity position="0 -30 -100" ply-model="src: #old" rotation="-90 0 0"></a-entity>
      <a-entity position="0 -5 0" ply-model="src: #castle" rotation="-90 0 0"></a-entity>
      <a-entity position="-40 30 -70" ply-model="src: #cloud1" rotation="-90 -20 0"></a-entity>
      <a-entity position="0 30 -60" ply-model="src: #cloud1" rotation="-90 0 0"></a-entity>
      <a-entity position="40 30 -50" ply-model="src: #cloud1" rotation="-90 -10 0"></a-entity>
      <a-sky color="#00BFFF" ></a-sky>
      
  </a-scene>
    </div>
  `
