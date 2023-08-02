import * as me from "melonjs";

export default class DebugDrawer {
    constructor(world, renderer, pixelsPerMeter) {
        this.world = world;
        this.renderer = renderer;
        this.pixelsPerMeter = pixelsPerMeter;
        this.buffer = null;
    }

    draw() {
        this.buffer = this.world.debugRender();
        const cls = this.buffer.colors;
        const vtx = this.buffer.vertices;

        this.renderer.setLineWidth(3);
        for (let i = 0; i < vtx.length / 4; i++) {
            this.renderer.beginPath();
            const c = new me.Color().setFloat(cls[i * 8],
                cls[i * 8 + 1], cls[i * 8 + 2], 1);
            this.renderer.setColor(c);
            this.renderer.moveTo(vtx[i * 4] * this.pixelsPerMeter,
                vtx[i * 4 + 1] * this.pixelsPerMeter);
            this.renderer.lineTo(vtx[i * 4 + 2] * this.pixelsPerMeter,
                vtx[i * 4 + 3] * this.pixelsPerMeter);
            this.renderer.stroke();
        }
    }
}
